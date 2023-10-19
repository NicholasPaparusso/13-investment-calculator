import styles from './ErrorModal.module.css';
const ErrorModal = () => {
    return (
        <div className={styles['error-modal']}>
            <div>
                <div className={styles['error-modal-header']} >
                    <span>Error</span>
                </div>
                <div className={styles['error-modal-body']}>
                    To perform the calculation, fill in all fields
                </div>
            </div>    
        </div>
    )
}

export default ErrorModal