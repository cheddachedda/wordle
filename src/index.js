import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import { GameProvider } from './components/Game/GameContext';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

