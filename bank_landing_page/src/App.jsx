import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
          Navbar
        </div>
      </div>

      <div className={'bg-primary ${stylex.paddingX} ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>

        </div>
      </div>
      
    </div>
  )
}

export default App