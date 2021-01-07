import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',

    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input required type="email" id='email' onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input required type="password" id='password' onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName">Fast Name</label>
                        <input required type="text" id='firstName' onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="LastName">Last Name</label>
                        <input required type="text" id='lastName' onChange={this.handelChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : ''}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
