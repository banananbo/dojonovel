import { create } from 'zustand';
import type { GameState } from '../types/gameState';
import { INITIAL_SCENE_ID, INITIAL_LOCATION_ID } from '../types/gameState';
import type { MasterData } from '../loaders/dataLoader';
import type { SaveData } from '../storage/StorageInterface';
import { SAVE_DATA_VERSION } from '../storage/StorageInterface';
import { getMasterData } from '../loaders/dataLoader';
import { initializeFlags } from '../engine/FlagEngine';
import { transitionTo, advanceMessage, selectChoice, pushHistory } from '../engine/SceneEngine';
import { executeCommand } from '../engine/CommandEngine';
import { moveTo } from '../engine/LocationEngine';
import { useItem } from '../engine/ItemEngine';
import { evaluateCondition } from '../engine/ConditionEvaluator';

interface GameStore {
  state: GameState;
  masterData: MasterData;
  playtimeStart: number;

  startNewGame: () => void;
  loadGame: (saveData: SaveData) => void;
  toSaveData: () => SaveData;

  advanceMessage: () => void;
  selectChoice: (index: number) => void;
  executeCommand: (commandId: string) => void;
  moveToLocation: (locationId: string) => void;
  clickArea: (areaId: string) => void;
  useItem: (itemId: string) => void;
  closeOverlay: () => void;
  goToTitle: () => void;
}

function buildInitialState(masterData: MasterData): GameState {
  const flags = initializeFlags(masterData.flags);
  return {
    currentSceneId: INITIAL_SCENE_ID,
    currentLocationId: INITIAL_LOCATION_ID,
    currentMessageIndex: 0,
    flags,
    inventory: [],
    sceneHistory: [],
    phase: 'title',
  };
}

export const useGameStore = create<GameStore>((set, get) => {
  const masterData = getMasterData();
  const initialState = buildInitialState(masterData);

  return {
    state: initialState,
    masterData,
    playtimeStart: Date.now(),

    startNewGame: () => {
      const md = get().masterData;
      const fresh = buildInitialState(md);
      const started = transitionTo(INITIAL_SCENE_ID, { ...fresh, phase: 'message' }, md);
      set({ state: started, playtimeStart: Date.now() });
    },

    loadGame: (saveData: SaveData) => {
      set({
        state: {
          currentSceneId: saveData.currentSceneId,
          currentLocationId: saveData.currentLocationId,
          currentMessageIndex: 0,
          flags: saveData.flags,
          inventory: saveData.inventory,
          sceneHistory: saveData.sceneHistory,
          phase: 'command',
        },
        playtimeStart: Date.now() - saveData.playtime * 1000,
      });
    },

    toSaveData: (): SaveData => {
      const { state, playtimeStart } = get();
      return {
        version: SAVE_DATA_VERSION,
        timestamp: Date.now(),
        currentSceneId: state.currentSceneId,
        currentLocationId: state.currentLocationId,
        flags: state.flags,
        inventory: state.inventory,
        sceneHistory: state.sceneHistory,
        playtime: Math.floor((Date.now() - playtimeStart) / 1000),
      };
    },

    advanceMessage: () => {
      const { state, masterData } = get();
      if (state.phase !== 'message') return;
      set({ state: advanceMessage(state, masterData) });
    },

    selectChoice: (index: number) => {
      const { state, masterData } = get();
      if (state.phase !== 'choice') return;
      set({ state: selectChoice(index, state, masterData) });
    },

    executeCommand: (commandId: string) => {
      const { state, masterData } = get();
      if (state.phase !== 'command') return;
      const result = executeCommand(commandId, state, masterData);
      if (result.transitionSceneId) {
        const withHistory = pushHistory(state.currentSceneId, state);
        set({ state: transitionTo(result.transitionSceneId, withHistory, masterData) });
      } else {
        set({ state: { ...state, phase: result.newPhase } });
      }
    },

    moveToLocation: (locationId: string) => {
      const { state, masterData } = get();
      set({ state: moveTo(locationId, state, masterData) });
    },

    clickArea: (areaId: string) => {
      const { state, masterData } = get();
      if (state.phase !== 'examine') return;
      const scene = masterData.scenes[state.currentSceneId];
      const area = scene?.clickable_areas?.find((a) => a.id === areaId);
      if (!area) return;

      const ctx = {
        flags: state.flags,
        inventory: state.inventory,
        locationId: state.currentLocationId,
      };
      if (!evaluateCondition(area.condition, ctx)) return;

      const withHistory = pushHistory(state.currentSceneId, state);
      set({ state: transitionTo(area.next_scene, withHistory, masterData) });
    },

    useItem: (itemId: string) => {
      const { state, masterData } = get();
      const { newState, sceneId } = useItem(itemId, state, masterData);
      if (sceneId) {
        const withHistory = pushHistory(state.currentSceneId, { ...newState, phase: 'command' });
        set({ state: transitionTo(sceneId, withHistory, masterData) });
      } else {
        set({ state: newState });
      }
    },

    closeOverlay: () => {
      set((prev) => ({ state: { ...prev.state, phase: 'command' } }));
    },

    goToTitle: () => {
      set((prev) => ({ state: { ...prev.state, phase: 'title' } }));
    },
  };
});
