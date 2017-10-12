import React from 'react';
import PropTypes from 'prop-types';
import { button } from './styles.css'

const FacebookAuthButton = ({onAuth, isFetching}) => {
    return (
        <div>
            <button className={button} onClick={onAuth}>
                {isFetching === true 
                    ? 'Loading'
                    : 'Login With Facebook'
                }
            </button>
        </div>
    );
};

FacebookAuthButton.propTypes = {
    onAuth: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default FacebookAuthButton;