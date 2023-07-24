import Link from "next/link";
import styles from './main.module.css'

const Bootstrap = () => 
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
  </>

const Navigation = () => {

  const routes:string[] = ['/','/about','/posts'];

  return(
    <ul className={styles.navigation}>
      {routes.map( (x,i) => 
        <li key={i}><Link href={x}>
          {(i == 0) ? 'home' : x.substring(1)}
        </Link></li>)
      }
    </ul>
  )

}

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return(
    <html lang="es">
      <head><Bootstrap/></head>
      <body>
        <div className="container p-5">
          <div className="row"><Navigation/></div>
          <div className="row">{children}</div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
