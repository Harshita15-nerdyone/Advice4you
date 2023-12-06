import React from 'react';
import axios from 'axios';
import './App.css';
class App extends React.Component{
state ={
    Advice: ''
};
componentDidMount(){
    // console.log('COMPONENT DID MOUNT');
   this.fetchAdvice();

}
fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response) =>{
           console.log(response.data.slip.advice);

           this.setState({Advice: response.data.slip.advice});
    })
    .catch((error)=> {
        console.log(error);

    })

}

    render(){
        const {Advice} = this.state;
        return(
           <div className = "app">
            <div className="card">
              <h1 className = "heading">{Advice}</h1>
              <button className="button" onClick ={this.fetchAdvice}>
                <span>Suggest an Advice!!</span>
              </button>
            </div>

           </div>

    
        )
    }
}
export default App;