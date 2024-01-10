import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/"><span>CurrencyWiz</span></Link>
            <nav>
                <Link to="/">Página Inicial</Link>
                <Link to="/BitCointracker">Monitor de BitCoin</Link>
                <Link to="/CurrencyConverter">Conversor de Moedas</Link>
            </nav>
        </header>
    )
}

export default Header
