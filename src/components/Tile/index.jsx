import styles from './Tile.module.css';

const Tile = () => {
  return (
    <div className={ styles.tile }>
      <p className={ styles.text }>X</p>
    </div>
  );
};

export default Tile;
