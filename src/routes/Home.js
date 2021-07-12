import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from '../components/Movies';
import "./Home.css";



class Home extends React.Component{ //This is state <== object
  state = {
    isLoading : true,
    movies : []
  };
 
getMoives = async() => {
  const {data :{data :{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
  this.setState({movies, isLoading : false});
}
 
componentDidMount(){
//DidMount is second
  this.getMoives();
  //외부에 있는 데이터를 가지고 오기 위해서 axios를 사용
    
}

componentDidUpdate(){
//Update is third
}
componentWillUnmount(){
//this is last 
//컴포넌트가 떠날 때 호출되는 메소드
}

  render(){
    //render is first
    const {isLoading, movies} = this.state;
    return (
    <main className="container">
      {isLoading 
      ? 
      (<div className="loader">
        <span className="loader__text">
          Loading...
        </span>
      </div> )
       :  //삼항연산자
      (
      <section className="movies">
      {movies.map(movie => (
      //map에서는 무언가를 항상 return 해야한다.
      <Movie 
      key={movie.id} 
      id={movie.id} 
      year={movie.year}
      genres={movie.genres}
      title={movie.title} 
      summary={movie.summary}
      poster={movie.medium_cover_image} />
      ))}
      </section>
    
    )} 
    </main>
    
    
    
    
    )
  }
}




export default Home;
