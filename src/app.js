import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import {ErrorMessage} from './components/ErrorMessage';
import {Cover} from './components/Cover';
import MainContainer from './components/MainContainer';


export default class App extends React.Component {
  state = {
    username: '',
    error_message: ''
  }

  updateUsername = (username) => {
    this.setState(() => ({
      username
    }));
  }

  updateErrorMessage = (error_message) => {
    this.setState(() => ({
      error_message
    }));
  }

  render(){
    return (
      <div>
        <Header
          username={this.state.username}
          updateUsername={this.updateUsername}
          errorHandler={this.updateErrorMessage}
        />
        <ErrorMessage error_message={this.state.error_message}/>
        <div className="container">
          {!this.state.username ?
            <Cover/> :
            <MainContainer
              username={this.state.username}
              updateErrorMessage={this.updateErrorMessage}
            />}
        </div>
      </div>
    );
  };

};

ReactDOM.render(<App/>, document.getElementById('app'));
