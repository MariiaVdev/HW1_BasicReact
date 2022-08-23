import React from 'react';
import styles from './Button.module.scss';
import Modal from '../Modal/Modal';


class Button extends React.PureComponent {

    render() {
        const { bgColor, textBtn, onClick, isOpenModal, header, closeButton, text, actions} = this.props;
        return (
            <>
            <button className={styles.btn} style={{backgroundColor: bgColor}} onClick={onClick}>
                {textBtn}</button>
                	{isOpenModal ? <Modal header={header}
                    closeButton={closeButton} text={text}
                    actions={actions} chngState={onClick}/> : null}
                    </>
        )
    }
}

export default Button;