import styles from './Button.module.css';
const ButtonSubmit = (props) => {
    return(
        <button type='submit' className={styles.button}>
            {props.text}
        </button>
    )
}

export default ButtonSubmit