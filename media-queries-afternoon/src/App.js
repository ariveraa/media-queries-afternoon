import React, {Component} from 'react';

import './App.css';
import{TransitionMotion, spring} from 'react-motion';

class App extends Component{
  constructor(){
    super()
    this.state = { 
      showDropdown: false
    }
  }

  toggleDropdown= () => {
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }
  
  // willEnter = () => {
  //   return{
  //     height:0,
  //     opacity:0
  //   }
  // }

  // willLeave = () => {
  //   return {
  //     height:spring(0), 
  //     opacity:spring(0)
  //   }
  // }

  render(){
  return (
    <div className="App">

        <header >
          <h1>Start BootStrap</h1>
          <nav id = 'desktop-nav'>
            <a>Services</a>
            <a>Portfolio</a>
            <a>About</a>
            <a>Team</a>
            <a>Contact</a>
          </nav>

          <nav id ="tablet-nav"> 
          <button className = 'menu-button' onClick = {this.toggleDropdown}>MENU</button>
          </nav>
        </header>

        
        {this.state.showDropdown ? (
          // <TransitionMotion
          //   willEnter = {this.willEnter}
          //   willLeave ={this.willLeave}
          // >
            <div id = 'drop-down'> 
              <a>Services</a>
              <a>Portfolio</a>
              <a>About</a>
              <a>Team</a>
              <a>Contact</a>
          </div> 
          // </TransitionMotion>
          ): null}
        
        
      <section   className= 'main-top'> 
        

        <h2>Welcome To Our Studio!</h2>
        <h3 id= 'desktop-greet'>IT'S NICE TO MEET YOU </h3>
        <h3 id= 'tablet-greet'>IT'S NICE TO <br/> MEET YOU </h3>
        <h3 id= 'phone-greet'>IT'S NICE TO MEET <br/>YOU </h3>
        <button>TELL ME MORE</button>
      </section>


    </div>
  );
  }
}

export default App;
