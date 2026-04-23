import { useGameStore } from './store/gameStore';
import { TitleScreen } from './components/system/TitleScreen';
import { GameScreen } from './components/game/GameScreen';
import './App.css';

function App() {
  const { state, startNewGame, loadGame } = useGameStore();

  return (
    <div className="app-wrapper">
      <div className="game-container">
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
