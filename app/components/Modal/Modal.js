import React from 'react';
import PropTypes from 'prop-types';
import { default as ReactModal } from 'react-modal'
import { newDuckTop, pointer, newDuckInputContainer, newDuckInput, submitDuckBtn, darkBtn } from './styles.css'

const modalStyles = {
    content: {
        width: 350,
        margin: '0px auto',
        height: 220,
        borderRadius: 5,
        background: '#EBEBEB',
        padding: 0,
    }
}

const Modal = props => {
    function submitDuck() {
        console.log('Duck', props.duckText)
        console.log("User", props.user)
    }
    return (
        <div>
            <span className={darkBtn} onClick={props.openModal}>
                Duck
            </span>
            <ReactModal style={modalStyles} isOpen={props.isOpen} onRequestClose={props.closeModal}>
                <div className={newDuckTop}>
                    <span>Compose New Duck</span>
                    <span onClick={props.closeModal} className={pointer}>X</span>
                </div>
                <div className={newDuckInputContainer} >
                    <textarea 
                        onChange={(e) => props.updateDuckText(e.target.value)}
                        value={props.duckText}
                        maxLength={140}
                        type='text'
                        className={newDuckInput}
                        placeholder="What's on your mind?"/>
                    <button className={submitDuckBtn}
                            disabled={props.isSubmitDisabled}
                            onClick={submitDuck}>
                        Duck
                    </button>
                </div>
            </ReactModal>

        </div>
    );
};

const { object, string, func, bool } = PropTypes;

Modal.propTypes = {
    duckText: string,
    isOpen: bool.isRequired,
    user: object.isRequired,
    openModal: func.isRequired,
    closeModal: func.isRequired,
    isSubmitDisabled: bool.isRequired
};

export default Modal;