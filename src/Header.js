import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';


class HeadApp extends React.Component{

    render(){

    return <Header />
    }
}









function Header(){

    return <header className="header">
    <div className="header__div">
    <h3 className="header__text">Movie List</h3>
    </div>
    </header>
}

export default HeadApp;