import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to="/signup">
                    <button type="button">
                        Signup
                    </button>   
                </Link>
                <Link to="/login">
                    <button type="button">
                        Login
                    </button>
                </Link>
            </div>
        )
    }
}

export default HomePage
