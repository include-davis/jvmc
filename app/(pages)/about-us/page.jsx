import styles from './page.module.scss';

export default function About() {
    return (
      <main>
        <div className = {styles.body}>
          <div className = {styles.title_body}>
            <h1> Welcome to Joan Viteri Medical Clinic </h1>
            <h4>Serving health care needs of uninsured drug users, sex workers, <br></br> trans folks, and their families.</h4>
            <button className = {styles.btn}>Contact Us</button>
          </div>

          <div className = {styles.homepage_body}>
          <h4> Serving the Oak Park Community </h4>
          </div>
          
          
          
        </div>
      
      </main>
    );
  }
  