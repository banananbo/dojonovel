import type { GameState, GamePhase } from '../types/gameState';
import type { CommandDefinition } from '../types/command';
import type { Scene } from '../types/scene';
import type { LocationDefinition } from '../types/location';
import type { MasterData } from '../loaders/dataLoader';

export function getAvailableCommands(
  scene: Scene | undefined,
  location: LocationDefinition | undefined,
  masterData: MasterData,
): CommandDefinition[] {
  const commandIds =
    scene?.commands ?? location?.default_commands ?? Object.keys(masterData.commands);
  return commandIds
    .map((id) => masterData.commands[id])
    .filter((cmd): cmd is CommandDefinition => Boolean(cmd));
}

export interface CommandResult {
  newPhase: GamePhase;
  transitionSceneId?: string;
}

export function executeCommand(
  commandId: string,
  state: GameState,
  masterData: MasterData,
): CommandResult {
  const command = masterData.commands[commandId];
  if (!command) return { newPhase: state.phase };

  switch (command.action_type) {
    case 'examine':
      return { newPhase: 'examine' };
    case 'move':
      return { newPhase: 'map' };
    case 'inventory':
      return { newPhase: 'inventory' };
    case 'talk': {
      const scene = masterData.scenes[state.currentSceneId];
      const talkSceneId = findTalkScene(state.currentLocationId, masterData);
      if (talkSceneId) {
        return { newPhase: 'message', transitionSceneId: talkSceneId };
      }
      if (scene?.characters && scene.characters.length > 0) {
        return { newPhase: 'message', transitionSceneId: `scene_talk_${scene.characters[0].character_id}` };
      }
      return { newPhase: 'command' };
    }
    case 'system':
      return { newPhase: 'system_menu' };
    default:
      return { newPhase: state.phase };
  }
}

function findTalkScene(locationId: string, masterData: MasterData): string | null {
  const sceneId = `scene_talk_${locationId.replace('loc_', '')}`;
  if (masterData.scenes[sceneId]) return sceneId;

  const candidates = Object.keys(masterData.scenes).filter(
    (id) =>
      id.startsWith('scene_talk_') &&
      masterData.scenes[id].location_id === locationId,
  );
  return candidates[0] ?? null;
}
