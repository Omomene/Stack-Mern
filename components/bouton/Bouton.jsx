const Bouton = ({ onClick, label, style }) => {
  return <button onClick={onClick} style={style}>{label}</button>;
};

export default Bouton;
