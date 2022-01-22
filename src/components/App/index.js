import styles from './App.module.css';
import Header from '../Header';
import Board from '../Board';
import Keyboard from '../Keyboard';

const App = () => {
  return (
    <div className={ styles.App }>
      <Header />
      <Board />
      <Keyboard />
    </div>
  );
};

export default App;
