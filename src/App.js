import './App.css';
import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import home from './Home/home';
import Maps from './Maps/Maps';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <main>
            <Route path='/' exact component={home}/>
            <Route path='/Maps' component={Maps}/>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
