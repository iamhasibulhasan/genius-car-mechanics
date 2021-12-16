import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404-funny.png';
import './NotFound.css';


const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notfound} alt="" />
            <Link to="/">
                <button class="button-30" role="button">Go Back</button></Link>
        </div>
    );
};

export default NotFound;