import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Gerenciador de Projetos</span></h1>
            <LinkButton to="/newProject" text="Novo Projeto"></LinkButton>
            <img src={savings} alt='Gerenciador de Projetos'/>
        </section>
    )    
}

export default Home

