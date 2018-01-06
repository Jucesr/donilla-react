import React from 'react';

export default class Header extends React.Component {

  logInHandler = (e) => {
    var error;
    e.preventDefault();
    const username = e.target.elements.username.value.trim();

    if(!!username){
      this.props.updateUsername(username);
    }else{
      error = 'Username is invalid, try again.';
    }

    this.props.errorHandler(error);
  }

  logOutHandler = (e) => {
    e.preventDefault();
    this.props.updateUsername();
  }

  render(){
    return (
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1 className="header-title">Donilla</h1>
            <section className="header-login">
              {!this.props.username ? (
                <form className="log_in" onSubmit={this.logInHandler}>
                  <input className="username_input" type="text" placeholder="Type your name" name="username" />
                  <button className="log_in_btn" >Log in</button>
                </form>
              ):(// else
                <form >
                  <span className="username">{this.props.username}</span>
                  <button className="log_out_btn" onClick={this.logOutHandler}>Log out</button>

                </form>
              )
              }
            </section>
          </div>
        </div>


      </header>
    )
  }
}
