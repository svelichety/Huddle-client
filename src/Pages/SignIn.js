import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

//import AddTrip from "../components/AddTrip/AddTrip";

class SignInForm extends Component {
    constructor(props) {
        super(props);
         let loggedIn = false
        this.state = {
            email: '',
            password: '',
            loggedIn
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        try{
            const{email, password} = this.state
         // this.props.history.push("/addTrip")

            
            //login state
            if(email ==="A@gmail.com" && password ==="B"){
                this.setState({
                    loggedIn: true
                })
               
            }
        }
        catch(e){
            alert(e.message);
        }

       
    }
    

    render() {
        
           
        
        return (
            <>
           
           
            
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>

                <div className="FormTitle"><h2>Sign In Page</h2></div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" >Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
          </>
        );
    }
}

export default SignInForm;
