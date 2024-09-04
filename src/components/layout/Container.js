import styles from './Container.module.css'

function Container (props){
  console.log(props.customClass)
    return (
        /*Todos os containers terão as propriedades iguais e alguns terão propriedades específicas */
        <div className={`${styles.container} ${styles[props.customClass]}`}>
          {props.children}
        </div>
    )
}

export default Container