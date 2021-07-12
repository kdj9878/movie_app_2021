import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movies({year, title, summary, poster, genres}){
    
    return <div className="movie">
        <div className="img__div">
        <img className="movie__img" src={poster} alt={title} title={title}></img>
        </div>
        <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">{genres.map((genres, index) => <li key={index} className="genres__li">{genres}</li>)}</ul>
        <p className="movie__summary">{summary.slice(0, 200)}...</p>
        </div>
        </div>
    
}

Movies.prototype = {
    id : PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movies;