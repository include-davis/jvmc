import styles from './page.module.scss';
import aboutUs from '@/app/(pages)/_data/about-us.json';


export default function About() {
    return (
      <main>
        <div className = "body">
          <div className = {styles.tempNavbar}>
            <h1>Temp Navbar</h1>
          </div>

          <div className = {styles.title_body}>
            <h1> {aboutUs.homePageTitle} </h1>
            <h4> {aboutUs.homePageSubtitle} </h4>
            <button className ="btn"> {aboutUs.buttonMsg} </button>
          </div>

          <div className = {styles.homepage_body}>
          <h4 className = "h4"> Serving the Oak <br></br> Park Community </h4>


          </div>
          

          
          
        </div>
      
      </main>
    );
  }
  