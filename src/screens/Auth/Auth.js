import React, { Component } from 'react';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
        username: '',
        password: ''
    }
    this.signInOrSignUp = this.signInOrSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  signInOrSignUp() {
    const { username, password } = this.state;
    const {
        UserLog,
        signIn
    } = this.props.Auth;
    if(signIn){
        if(localStorage.getItem('users')){
            var users = JSON.parse(localStorage.getItem('users'));
            users.push({
                username,
                password
            })
            localStorage.setItem('users', JSON.stringify(users));
        }
        else
            localStorage.setItem('users', JSON.stringify([{ username, password }]));
        UserLog(true);
    }
    else{
        if(localStorage.getItem('users')){
            var users = JSON.parse(localStorage.getItem('users'));
            users.map(user => {
                if(user.username === username && user.password === password){
                    return UserLog(true);
                }
            })
        }
        
    }
  }
  handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  render() {
    const {
        username,
        password 
    } = this.state;
    const {
        toggleSignInAndUp,
        signIn 
    } = this.props.Auth;
    return (
        <div className="App">
            <h1>{signIn ? 'Sign Up' : 'Log In'}</h1>
            <input name='username' className='form-control' value={username} onChange={this.handleChange} type='text' placeholder='Username'/>
            <input name='password' className='form-control' value={password} onChange={this.handleChange} type='password' placeholder='Password'/>
            <input className='btn btn-primary' type='button' onClick={this.signInOrSignUp}  value={signIn ? 'Sign Up' : 'Log In'}/><br/ ><br/ >
            <span onClick={toggleSignInAndUp}>{signIn ? 'Have an account? Log In' : `Don't have an account? Sign Up`}</span>
        </div>
    );
  }
}

export default Auth;