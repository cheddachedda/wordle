import { useEffect, useState } from 'react';

import styles from './App.module.css';
import Header from '../Header';
import Board from '../Board';
import Keyboard from '../Keyboard';

const App = () => {
  const [ attempts, setAttempts ] = useState([[], [], [], [], [], []]);

  const handleKeyUp = (event) => {
    attempts[0].push(event.key);
    console.log(event.key, attempts[0]);
  };

  return (
    <div className={ styles.App } onKeyUp={ handleKeyUp }>
      { attempts }
      <Header />
      <Board attempts={ attempts } />
      <Keyboard setAttempts={ setAttempts } />
    </div>
  );
};

export default App;
