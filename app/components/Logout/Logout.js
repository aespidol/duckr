import React from 'react';
import PropTypes from 'prop-types';
import { text } from './styles.css'

const Logout = props => {
    return (
        <div>
            <h1 className={text}>You Are Now Logged Out</h1>
        </div>
    );
};

export default Logout;