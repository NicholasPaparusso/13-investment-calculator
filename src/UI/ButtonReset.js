import styles from './Button.module.css';
const ButtonReset = (props) => {
    return(
        <button type='reset' className={styles.buttonAlt}>
            {props.text}
        </button>
    )
}

export default ButtonReset