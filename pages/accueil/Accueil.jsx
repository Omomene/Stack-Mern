import { useNavigate } from "react-router-dom";
import Bouton from "../../components/bouton/Bouton";
import useCompteur from "../../hooks/useCompteur";
import styles from "../../components/cards/Cards.module.css";

const Accueil = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCompteur(0);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail");
  };
  return (
    <div style={{ textAlign: 'center', margin: '0 5px', padding: '10px 20px'}}>
    
      <h1 className={styles.h1}>Welcome to the New World!</h1>
      <Bouton label="detail" onClick={handleNavigate} style={{  backgroundColor: 'transparent', 
    border: 'none', color: '#547D86',  
    textDecoration: 'none',
    fontSize: '18px',
    margin: '0 5px',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    borderBottom: '2px solid #547D86'}}/>
      <h2 style={{ textAlign: 'center' }}>{count}</h2>
      <Bouton label="+ 1" onClick={handleIncrement} />
      <Bouton label="- 1" onClick={handleDecrement} />
      <Bouton label="reset" onClick={handleReset} />
    </div>
  );
};

export default Accueil;
