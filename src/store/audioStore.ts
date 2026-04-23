import { create } from 'zustand';
import type { GameSettings } from '../storage/StorageInterface';
import { DEFAULT_SETTINGS } from '../storage/StorageInterface';

interface AudioStore {
  settings: GameSettings;
  updateSettings: (partial: Partial<GameSettings>) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  settings: DEFAULT_SETTINGS,
  updateSettings: (partial) =>
    set((state) => ({ settings: { ...state.settings, ...partial } })),
}));
