import type { Scene } from '../../types/scene';
import type { CharacterDisplay } from '../../types/scene';
import { useGameStore } from '../../store/gameStore';
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

function getActiveCharacters(scene: Scene, messageIndex: number): CharacterDisplay[] {
  let current: CharacterDisplay[] = scene.characters ?? [];
  for (let i = 0; i <= messageIndex; i++) {
    const msg = scene.messages[i];
    if (msg?.characters !== undefined) {
      current = msg.characters;
    }
  }
  return current;
}

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

  return (
    <div className={styles.root}>
      <SceneBackground
        backgroundPath={scene?.background}
        locationName={location?.name}
      />

      {scene && getActiveCharacters(scene, state.currentMessageIndex).map((display) => {
        const char = masterData.characters[display.character_id];
        if (!char) return null;
        return (
          <CharacterSprite
            key={display.character_id}
            display={display}
            character={char}
          />
        );
      })}

      {state.phase === 'examine' && scene?.clickable_areas && (
        <ClickableAreaOverlay
          areas={scene.clickable_areas}
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
