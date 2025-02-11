import styles from './page.module.scss';
import HomePageCard from '@/app/HomePageCard/HomePageCard';


export default function About() {
    return (
      <main>
        <div className = "body">
          <div className = {styles.tempNavbar}>
            <h1>Temp Navbar</h1>
          </div>
          <div className = {styles.title_body}>
            <h1 className> Welcome to Joan Viteri Memorial Clinic </h1>
            <h4 className> Serving health care needs of uninsured drug users, sex workers, <br></br> trans folks, and their families.</h4>
            <button className ="btn">Contact Us</button>
          </div>

          <div className = {styles.homepage_body}>
          <h4 className = "h4"> Serving the Oak <br></br> Park Community </h4>


          </div>
          

          
          
        </div>
      
      </main>
    );
  }
  