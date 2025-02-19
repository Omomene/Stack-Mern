import styles from "./Cards.module.css";

const Cards = ({ title, views }) => {
  return (
    <>
      <h1 className={styles.h2}>
       {title} </h1>
       <h1 className={styles.h3}>{views}</h1>
      
      <p className={styles.p}>  Learn more </p>
    </>
  );
};

export default Cards;
