import type { IStorage } from './StorageInterface';
import { LocalStorageAdapter } from './LocalStorageAdapter';

export type StorageBackend = 'localStorage' | 'indexeddb' | 'server';

export function createStorage(backend?: StorageBackend): IStorage {
  const target =
    backend ??
    (import.meta.env.VITE_STORAGE_BACKEND as StorageBackend | undefined) ??
    'localStorage';

  switch (target) {
    case 'localStorage':
    default:
      return new LocalStorageAdapter();
  }
}

let instance: IStorage | null = null;

export function getStorage(): IStorage {
  if (!instance) {
    instance = createStorage();
  }
  return instance;
}
