import React,{useState}  from 'react'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm'
import axios from 'axios';
axios.defaults.withCredentials=true;

const Authentication = (props) => {
    const {authenticated}=props;
    const   [viewRegisterForm, setViewRegisterForm]  = useState(true);
    const changeView=()=>{
        setViewRegisterForm(!viewRegisterForm);
    }
    const registerUser = user =>{
        axios.post("http://localhost:8000/api/register",user,{withCredentials:true})
            .then((response) => console.log(response.data))
            .catch(err =>{
                // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // const errorArr = []; // Define a temp error array to push the messages in
                // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                //     errorArr.push(errorResponse[key].message)
                // }
                // // Set Errors
                // setErrors(errorArr);
                console.log(err.response.data.errors);
            })
    }
    const loginUser =  (user) =>{
         axios.post("http://localhost:8000/api/login",user,{withCredentials:true})
            .then((response) => authenticated(true))
            .catch(err =>{
                // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // const errorArr = []; // Define a temp error array to push the messages in
                // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                //     errorArr.push(errorResponse[key].message)
                // }
                // // Set Errors
                // setErrors(errorArr);
                console.log(err);
            })
    }

    return (
        <>
            {viewRegisterForm&&<RegisterForm onSubmitProp={registerUser} changeView={changeView} />}
            {!viewRegisterForm&&<LoginForm onSubmitProp={loginUser} changeView={changeView} />} 

        </>
    )
}

export default Authentication
