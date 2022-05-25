import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <div className={styles.block}>
        <img className={styles.img} src="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg" alt=""/>
      </div>
    </>
  )
}

export default Home