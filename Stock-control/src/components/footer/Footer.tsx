import { Link } from "react-router-dom"
import style from './Footer.module.sass'

function Footer() {
  return (
    <div className={style.wrapper}>
        <Link to={'#'} className={style.link}>Información</Link>
        <Link to={'#'} className={style.link}>Ayuda</Link>
        <Link to={'#'} className={style.link}>Copyright</Link>
        <Link to={'#'} className={style.link}>API</Link>
        <p className={style.link}>©MyStockify by Grupo7</p>
    </div>
  )
}

export default Footer