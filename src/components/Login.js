import React, { Component } from "react";
import { Redirect, Link, NavLink, Route, withRouter} from "react-router-dom";
import "./login.css";
class Login extends Component{
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.state ={
           form:{ 
            username: "",
            password: "",
        },
        formErrorMessage:{
        usernameError:"",
        passwordError:""
        },
        formValid:{
            username:false,
            password:false,
            buttonActive:false
        }
        };
    }
    routeChange() {
        let path = '/dashboard';
        this.props.history.push(path);
      }
    handleSubmit = event => {
        event.preventDefault();
    }
    handleChange = event => {
          let {name,value} = event.target;
          let formDum = this.state.form;
          formDum[name]=value;
          this.setState({ form : formDum})
          this.validateField(name,value);
      }
      validateField = (fieldName, value)=>{
        let errMsg=''
        let formErrDum = this.state.formErrorMessage
        let formValidDum = this.state.formValid
        if(fieldName==="username")
        {
            if(value===""){
                errMsg="field required";
            }
            else
            errMsg="";
        formErrDum.usernameError = errMsg;
        formValidDum.username = errMsg ? false : true;
      }
      if(fieldName==="password"){
          if(value===""){
              errMsg="field required";
          }
          else
          errMsg="";
          formErrDum.passwordError = errMsg;
        formValidDum.password = errMsg ? false : true;
      }
      formValidDum.buttonActive = formValidDum.username && formValidDum.password;
    this.setState({ formErrorMessage : formErrDum, formValid : formValidDum});
    }


    render(){
        let {usernameError,passwordError} = this.state.formErrorMessage;
        return(
            <div>
                <form className="card" onSubmit={this.handleSubmit}>
                    <label> ACCOUNT LOGIN</label><br/>
                    
                <label htmlFor='username'>USERNAME:</label>
                <input type="text" name="username" onChange={this.handleChange}/><br/>
                <span className='text-danger'>{usernameError}</span><br/>
                
                
                <label htmlFor='password'>PASSWORD:</label>
                <input type="password" name="password" onChange={this.handleChange}/><br/>
                <span className='text-danger'>{passwordError}</span><br/>
                
                
                <input type="checkbox" className="remember"/>
                <label htmlFor="rememberMe" className="remember">Remember Me</label><br/>
               <div>
                <button disabled={!this.state.formValid.buttonActive} className="button" onClick={this.routeChange}>Login</button>
                </div>
                </form>
            </div>
        )
    }

}
export default Login;