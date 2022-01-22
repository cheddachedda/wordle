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

export default Board;