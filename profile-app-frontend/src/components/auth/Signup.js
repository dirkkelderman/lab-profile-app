import React, { Component } from 'react'

export class Signup extends Component {

    state ={
        username: '',
        password: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        });        
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        
        console.log(e)
    }

    render() {
        return (
            <div>
                <h2>Signup</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>

                    <label>Password</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>

                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default Signup
