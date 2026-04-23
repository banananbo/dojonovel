import yaml from 'js-yaml';
import type { Scene } from '../types/scene';
import type { FlagDefinition } from '../types/flag';
import type { ItemDefinition } from '../types/item';
import type { LocationDefinition } from '../types/location';
import type { CharacterDefinition } from '../types/character';
import type { CommandDefinition } from '../types/command';

import scenesRaw from '../data/scenes.yaml?raw';
import flagsRaw from '../data/flags.yaml?raw';
import itemsRaw from '../data/items.yaml?raw';
import locationsRaw from '../data/locations.yaml?raw';
import charactersRaw from '../data/characters.yaml?raw';
import commandsRaw from '../data/commands.yaml?raw';

export interface MasterData {
  scenes: Record<string, Scene>;
  flags: FlagDefinition[];
  items: Record<string, ItemDefinition>;
  locations: Record<string, LocationDefinition>;
  characters: Record<string, CharacterDefinition>;
  commands: Record<string, CommandDefinition>;
}

function toRecord<T extends { id: string }>(arr: T[]): Record<string, T> {
  return Object.fromEntries(arr.map((item) => [item.id, item]));
}

function loadMasterData(): MasterData {
  const scenesData = yaml.load(scenesRaw) as { scenes: Scene[] };
  const flagsData = yaml.load(flagsRaw) as { flags: FlagDefinition[] };
  const itemsData = yaml.load(itemsRaw) as { items: ItemDefinition[] };
  const locationsData = yaml.load(locationsRaw) as { locations: LocationDefinition[] };
  const charactersData = yaml.load(charactersRaw) as { characters: CharacterDefinition[] };
  const commandsData = yaml.load(commandsRaw) as { commands: CommandDefinition[] };

  return {
    scenes: toRecord(scenesData.scenes),
    flags: flagsData.flags,
    items: toRecord(itemsData.items),
    locations: toRecord(locationsData.locations),
    characters: toRecord(charactersData.characters),
    commands: toRecord(commandsData.commands),
  };
}

let cached: MasterData | null = null;

export function getMasterData(): MasterData {
  if (!cached) {
    cached = loadMasterData();
  }
  return cached;
}
