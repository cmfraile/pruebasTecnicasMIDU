import Link from "next/link";
import styles from './main.module.css'

const Bootstrap = () => 
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
  </>

const Navigation = () =>
  <ul className={styles.navigation}>
    <li><Link href='/about'>ABOUT</Link></li>
    <li><Link href='/'>HOME</Link></li>
  </ul>

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return(
    <html lang="es">
      <head><Bootstrap/></head>
      <body>
        <div className="container">
          <div className="row"><Navigation/></div>
          <div className="row">{children}</div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
