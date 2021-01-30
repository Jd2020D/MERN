import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
import styles from './blocks.module.css'
                
function App() {
  return (
    <div  className={`app ${styles.app}`}>
      <div className={styles.header}> 
        <Header />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <Navigation/>
        </div>
        <Main>
            <section>
              <div className={styles.subcontent}>
                  <SubContents num={1} />
                </div>
                <div className={styles.subcontent}>
                  <SubContents num={2} />
                </div>
                <div className={styles.subcontent}>
                  <SubContents num={3} />
                </div>
            </section>
            <div className={styles.advertisement}>
              <Advertisement />
            </div>
        </Main>
      </div>
    </div>
  );
}
                
export default App;
