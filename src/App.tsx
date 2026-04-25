import { useState, useEffect } from 'react';
import { useGameStore } from './store/gameStore';
import type { DebugStartConfig } from './store/gameStore';
import { useAudioStore } from './store/audioStore';

const DEBUG_KEY = '__novel_debug_start__';
import { TitleScreen } from './components/system/TitleScreen';
import { GameScreen } from './components/game/GameScreen';
import './App.css';

function useGameScale() {
  const [scale, setScale] = useState(() =>
    Math.min(1, window.innerWidth / 800, window.innerHeight / 600)
  );
  useEffect(() => {
    function update() {
      setScale(Math.min(1, window.innerWidth / 800, window.innerHeight / 600));
    }
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return scale;
}

function App() {
  const { state, startNewGame, startDebugGame, loadGame } = useGameStore();
  const { loadSettings } = useAudioStore();
  const scale = useGameScale();

  useEffect(() => {
    loadSettings();
    const raw = localStorage.getItem(DEBUG_KEY);
    if (raw) {
      localStorage.removeItem(DEBUG_KEY);
      try {
        const config: DebugStartConfig = JSON.parse(raw);
        startDebugGame(config);
      } catch { /* ignore malformed */ }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="app-wrapper">
      <div className="game-container" style={{ transform: `scale(${scale})` }}>
        {state.phase === 'title' ? (
          <TitleScreen onNewGame={startNewGame} onLoad={loadGame} />
        ) : (
          <GameScreen />
        )}
      </div>
    </div>
  );
}

export default App;
