import styles from './Keyboard.module.css';

const Keyboard = () => {
  const keyboard = [
    [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
    [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
    [ 'Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace' ]
  ];

  return (
    <div className={ styles.keyboard }>
      { keyboard.map((row, i) => <Row key={i} data={row} />) }
    </div>
  );
};

const Row = ({ data }) => {
  return (
    <div className={ styles.row }>
      { data.map((key) => <Button key={key} data={key} />) }
    </div>
  );
};

const Button = ({ data }) => {
  let className = data === 'Enter' || data === 'Backspace' ? styles.bigButton : styles.button;

  let label;
  if (data === 'Enter') {
    label = '⮐';
  } else if (data === 'Backspace') {
    label = '⌫';
  } else {
    label = data.toUpperCase();
  }

  return (
    <button className={ className }>
      { label }
    </button>
  );
};

export default Keyboard;
