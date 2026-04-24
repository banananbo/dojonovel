import { useState, useEffect, useRef } from 'react';
import { useGameStore } from '../../store/gameStore';
import { audioManager } from '../../audio/AudioManager';
import { useAudioStore } from '../../store/audioStore';
import { getAvailableCommands } from '../../engine/CommandEngine';
import { getAvailableConnections } from '../../engine/LocationEngine';
import { SceneBackground } from './SceneBackground';
import { CharacterSprite } from './CharacterSprite';
import { DialogueBox } from './DialogueBox';
import { ChoiceList } from './ChoiceList';
import { CommandPanel } from './CommandPanel';
import { ClickableAreaOverlay } from './ClickableArea';
import { MapView } from './MapView';
import { InventoryPanel } from '../inventory/InventoryPanel';
import { SystemMenu } from '../system/SystemMenu';
import styles from './GameScreen.module.css';

export function GameScreen() {
  const {
    state,
    masterData,
    advanceMessage,
    selectChoice,
    executeCommand,
    moveToLocation,
    clickArea,
    useItem,
    closeOverlay,
    goToTitle,
    toSaveData,
    loadGame,
  } = useGameStore();

  const { settings } = useAudioStore();

  const scene = masterData.scenes[state.currentSceneId];
  const location = masterData.locations[state.currentLocationId];
  const currentMessage = scene?.messages[state.currentMessageIndex];
  const speakerId = currentMessage?.voice_character_id;
  const speaker = speakerId ? (masterData.characters[speakerId] ?? null) : null;

  const commands = getAvailableCommands(scene, location, masterData);
  const connections = getAvailableConnections(state.currentLocationId, state, masterData);

  const choices = scene?.branches?.choices ?? [];
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speakingCharId = currentMessage?.voice_character_id ?? null;
  const effectiveIsSpeaking = isSpeaking && state.phase === 'message';

  const currentBgmRef = useRef<string | null>(null);
  useEffect(() => {
    const bgm = scene?.bgm;
    if (!bgm || bgm === currentBgmRef.current) return;
    currentBgmRef.current = bgm;
    audioManager.playBgm(`${import.meta.env.BASE_URL}assets/${bgm}`, true, settings.bgmVolume);
  }, [scene?.bgm]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (state.phase === 'title') {
      audioManager.stopBgm();
      currentBgmRef.current = null;
    }
  }, [state.phase]);

  return (
    <div className={styles.root}>
      <SceneBackground
        backgroundPath={scene?.background}
        locationName={location?.name}
      />

      {state.currentCharacters.map((display) => {
        const char = masterData.characters[display.character_id];
        if (!char) return null;
        return (
          <CharacterSprite
            key={display.character_id}
            display={display}
            character={char}
            isSpeaking={effectiveIsSpeaking && display.character_id === speakingCharId}
          />
        );
      })}

      {state.phase === 'examine' && (
        <ClickableAreaOverlay
          areas={scene?.clickable_areas ?? []}
          flags={state.flags}
          inventory={state.inventory}
          locationId={state.currentLocationId}
          onClick={clickArea}
          onClose={closeOverlay}
        />
      )}

      {(state.phase === 'message') && currentMessage && (
        <DialogueBox
          message={currentMessage}
          speaker={speaker}
          textSpeed={settings.textSpeed}
          onAdvance={advanceMessage}
          onSpeakingChange={setIsSpeaking}
        />
      )}

      {state.phase === 'choice' && (
        <ChoiceList
          choices={choices}
          flags={state.flags}
          inventory={state.inventory}
          locationId={state.currentLocationId}
          onSelect={selectChoice}
        />
      )}

      {state.phase === 'command' && (
        <CommandPanel commands={commands} onSelect={executeCommand} />
      )}

      {state.phase === 'map' && (
        <MapView
          connections={connections}
          onMove={moveToLocation}
          onClose={closeOverlay}
        />
      )}

      {state.phase === 'inventory' && (
        <InventoryPanel
          state={state}
          masterData={masterData}
          onUse={useItem}
          onClose={closeOverlay}
        />
      )}

      <SystemMenu
        onGetSaveData={toSaveData}
        onLoad={loadGame}
        onTitle={goToTitle}
      />
    </div>
  );
}
