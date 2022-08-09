import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../footer';
import Header from '../Header';
import Menu from '../menu';

class EnterWeight extends Component {
    constructor(props){
      super(props)

      this.state = {
       username:'',
       comments: '',
       topics:'react'
    };

   // this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleUserNameChange =(event) => {
        this.setState({username: event.target.value
        })
      };
    
      handleCommentsChange=(event) => {
        this.setState({comments: event.target.value
        })
      };

      handleTopicChange=(event) => {
        this.setState({topics: event.target.value
        })
      };

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.username);
        event.preventDefault();
      };

    render() {
        const {username, comments,topics} = this.state
        return (
        <div>
        <Header/>
         <Menu/>
          <div id="container">
           <main>
           <form onSubmit={this.handleSubmit}>
            <div>
            <label>User Name</label>
             <input
              type="text"
              value={username}
              placeholder="Name"
              onChange={this.handleUserNameChange}
             />
            </div>
            <div><label>Comments</label>
             <textarea
              value={comments}
              onChange={this.handleCommentsChange}
             /></div>
            <div>
              <label>Topics</label>
              <select value={topics} onChange={this.handleTopicChange}>
                <option value='angular'>Angular</option>
                <option value='react'>React</option>
                <option value='vue'>Vue</option>
              </select>
            </div>
        <button type="submit">Create</button>
      </form>
    </main>
    </div>
            
            <Footer/>
        </div> 
        );
    }

}


export default EnterWeight;