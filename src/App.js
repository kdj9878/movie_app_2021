import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About"
import Home from './routes/Home';

function App(){



  return <HashRouter>
    <Route path="/" exact={true} component={Home}/>
    {/* exact는 경로에 있는 것 아니면 randering을 하지 않는 다는 의미 */}
    <Route path="/about" component={About} />
    {/* 해당 path로 가서 해당 js파일을 보여준다 */}
  </HashRouter>
}

export default App;