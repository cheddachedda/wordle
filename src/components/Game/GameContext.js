import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import randomWord from 'random-word-by-length';

const GameContext = createContext();

// Hook for child components use Game methods
export const useGame = () => useContext(GameContext);

// Provider hook that creates game object and handles game state
export const GameProvider = ({ children }) => {
  const [ answer, setAnswer ] = useState('');
  const [ previousAttempts, setPreviousAttempts ] = useState([]);
  const [ currentAttempt, setCurrentAttempt ] = useState('');
  const [ wordLength, setWordLength ] = useState(5);
  const [ error, setError ] = useState('');

  useEffect(() => {
    generateWord();
  }, []);

  const generateWord = () => {
    let word = randomWord(wordLength);
    
    // randomWord() may not always return the correct word length
    while (word.length !== wordLength) {
      word = randomWord(wordLength);
    }

    setAnswer(word);
  };

  const addLetter = (letter) => {
    setCurrentAttempt(currentAttempt + letter);
  };

  const deleteLetter = () => {
    setCurrentAttempt(currentAttempt.slice(0, -1));
  };

  const submitWord = () => {
    const solved = currentAttempt === answer;
    const valid = validateWord(currentAttempt);

    if (solved) {
      // TODO: Word solved
      // generateWord();
    } else if (currentAttempt.length < wordLength) {
      setError('Not enough letters');
    } else if (!valid) {
      setError('Not in word list');
    } else {
      setPreviousAttempts([ ...previousAttempts, currentAttempt ]);
      setCurrentAttempt('');
    }
  };

  const validateWord = (word) => {
    return axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${ word }`)
      .then(() => true)
      .catch(() => false);
  };

  const changeWordLength = (newLength) => {
    setWordLength(newLength);
  };

  const values = {
    previousAttempts,
    addLetter,
    deleteLetter,
    submitWord,
    changeWordLength,
    error
  };

  return (
    <GameContext.Provider value={ values }>
      { children }
    </GameContext.Provider>
  );
};