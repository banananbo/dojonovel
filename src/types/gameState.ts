import type { FlagMap } from './flag';

export type GamePhase =
  | 'title'
  | 'message'
  | 'choice'
  | 'command'
  | 'map'
  | 'examine'
  | 'inventory'
  | 'system_menu';

export interface GameState {
  currentSceneId: string;
  currentLocationId: string;
  currentMessageIndex: number;
  flags: FlagMap;
  inventory: string[];
  sceneHistory: string[];
  phase: GamePhase;
}

export const INITIAL_SCENE_ID = 'scene_danchi_morning';
export const INITIAL_LOCATION_ID = 'loc_danchi';
