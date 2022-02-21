import React from "react";
import Grid from "./Grid";
class Login extends React.Component{
    state ={
        email:'',
        password:''
    }


    handleChange(e){
        const {name, value} = e.target;
        // this.setState({[name]:value});
    }


    handleSubmit(e){
        console.log("yese");
        e.preventDefault();
        document.getElementsByClassName("map")[0].style.display = "block";
        // return (<div>
        // <Grid/>
        // </div>)
    }



    render(){
        return (
            <div>
                {/* <form> */}
                    <input type='email' name='email' placeholder='Email...' required onChange={this.handleChange}/>
                    <br/>
                    <input type='password' name='pwd' placeholder='Password...' required onChange={this.handleChange}/>
                    <button type='submit' onClick={this.handleSubmit}>Login</button>
                {/* </form> */}
            </div>
        )
    }
}

export default Login;