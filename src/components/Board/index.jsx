import styles from './Board.module.css';
import Row from '../Row';

const Board = () => {
  return (
    <div className={styles.board}>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

const Row = () => {
  return (
    <div className={ styles.row }>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
};

const Tile = () => {
  return (
    <div className={ styles.tile }>
      <p className={ styles.text }>X</p>
    </div>
  );
};

export default Board;