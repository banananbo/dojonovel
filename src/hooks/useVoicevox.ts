import { useCallback, useRef } from 'react';
import type { SceneMessage } from '../types/scene';
import type { CharacterDefinition } from '../types/character';
import { voicevoxClient } from '../audio/VoicevoxClient';
import { audioManager } from '../audio/AudioManager';
import { voiceHashKey } from '../utils/hashUtils';

const memoryCache = new Map<string, string>();

export function useVoicevox() {
  const speakingRef = useRef(false);

  const speak = useCallback(async (
    message: SceneMessage,
    character: CharacterDefinition | null,
  ) => {
    console.log('[Voicevox] speak called:', { character: character?.id, speakerId: character?.voicevox_speaker_id, voiceCharId: message.voice_character_id });
    if (!character?.voicevox_speaker_id || !message.voice_character_id) return;

    const speakerId = character.voicevox_speaker_id;
    const text = message.text;
    speakingRef.current = true;

    try {
      const hashKey = await voiceHashKey(text, speakerId);
      console.log('[Voicevox] synthesizing:', { text, speakerId, hashKey });

      if (memoryCache.has(hashKey)) {
        console.log('[Voicevox] cache hit');
        await audioManager.playVoice(memoryCache.get(hashKey)!);
        return;
      }

      const prebuiltUrl = `${import.meta.env.BASE_URL}assets/voicevox/${hashKey}.wav`;
      const prebuiltRes = await fetch(prebuiltUrl, { method: 'HEAD' }).catch(() => null);
      if (prebuiltRes?.ok && prebuiltRes.headers.get('content-type')?.startsWith('audio/')) {
        console.log('[Voicevox] prebuilt hit');
        memoryCache.set(hashKey, prebuiltUrl);
        await audioManager.playVoice(prebuiltUrl);
        return;
      }

      console.log('[Voicevox] calling engine...');
      const buffer = await voicevoxClient.synthesize(text, speakerId);
      if (!buffer) {
        console.warn('[Voicevox] synthesize returned null (engine not running?)');
        return;
      }

      console.log('[Voicevox] playing synthesized audio');
      const blob = new Blob([buffer], { type: 'audio/wav' });
      const blobUrl = URL.createObjectURL(blob);
      memoryCache.set(hashKey, blobUrl);
      await audioManager.playVoice(blobUrl);
    } finally {
      speakingRef.current = false;
    }
  }, []);

  const stop = useCallback(() => {
    audioManager.stopVoice();
  }, []);

  return { speak, stop };
}
