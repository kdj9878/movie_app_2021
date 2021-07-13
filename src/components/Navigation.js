import React from "react";
import "./Navigation.css";
import {Link} from "react-router-dom";
// 요청을 할 때마다 새로고침 하는 것을 막기 위해서 Link태그를 사용한다.

function Navigation(){

    return <section className="navigation__section">
        <div className="home__div">
        <Link to="/">Home</Link>
        </div>
        <div className="about__div">
        <Link to="/about">About</Link>
        </div>
    </section>
}

export default Navigation;

