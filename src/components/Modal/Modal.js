import React from 'react';
import styles from './Modal.module.scss';


class Modal extends React.PureComponent {
    

    render() {
        const {header, closeButton, text, actions, chngState} = this.props;

        return (
            <div className={styles.modal}>
                
                <div className={styles.modalBackground} onClick={chngState}></div>

                <div className={styles.modalMainContainer}>
                    <div className={styles.modalHeader}>
                        <p className={styles.modalHeaderText}>{header}</p>
                        {closeButton && <button className={styles.modalClose} onClick={chngState}></button>}
                    </div>
                    <div className={styles.modalContentWrapper}>
                        <p>{text}</p>
                        <p>Are you sure you want to delete it?</p>
                    </div>
                    <div className={styles.modalButtonWrapper}>
                       {actions}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Modal;