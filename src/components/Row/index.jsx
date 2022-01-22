import styles from './Row.module.css';
import Tile from "../Tile";

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

export default Row;
