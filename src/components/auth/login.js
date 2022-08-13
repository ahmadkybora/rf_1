import React, { useState } from 'react'
import Joi from 'joi-browser';
import { Button, H, Input, Label } from '../../utils/tools';
import { DAlert } from '../../utils/styles/style';
import { onLogin } from '../../store/actions/authActions';
import { useSelector, useDispatch } from "react-redux";
import { loginService } from '../../services/authService';

const Login = () => {
    const ui = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const schema = {
        username: Joi.string().min(3).max(25).required().label("نام کاربری"),
        password: Joi.string().min(8).max(25).required().label("رمز عبور")
    }
    const [user, setUser] = useState({
        username: "", 
        password: "", 
    })
    // const [username, setUsername] = useState();
    // const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});

    const Login = e => {
        e.preventDefault();
        const result = Joi.validate(user, schema, { abortEarly: false });
        const { error } = result;
        if(!error) {
            return loginService(user)
        } else {
          const errorData = {};
          for (let item of error.details) {
            const name = item.path[0];
            const message = item.message;
            errorData[name] = message;
          }
          setErrors(errorData);
          return errorData;
        }
        // const { name, value } = e.target;
        // const { name, value } = e.target;
        // console.log(user)
    }

    // const inputsHandler = (e) =>{
    //     const { name, value } = e.target;
    //     setUser((prevState) => ({
    //      ...prevState,
    //      [name]: value,
    //    }));
    // }

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const validation = e => {
    //     console.log(e)
    //     e.preventDefault();
    //     const result = Joi.validate(user, schema, { abortEarly: false });
    //     const { error } = result;
    //     if (!error) {
    //       console.log(user)
    //       return onLogin(user)
    //     } else {
    //       const errorData = {};
    //       for (let item of error.details) {
    //         const name = item.path[0];
    //         const message = item.message;
    //         errorData[name] = message;
    //       }
    //       setErrors(errorData);
    //       return errorData;
    //     }
    // }

    // const handleSave = (e) => {
    //     const { name, value } = e;
    //     console.log(e.target)
        // let errorData = { ...errors };
        // const errorMessage = validateProperty(event);
        // if (errorMessage) {
        //     errorData[name] = errorMessage;
        // } else {
        //     delete errorData[name];
        // }
        // let userData = { ...user };
        // userData[name] = value;
        // setUser(userData);
        // setErrors(errorData);
    // };
      
    // const validateProperty = (event) => {
    //     const { name, value } = event.target;
    //     const obj = { [name]: value };
    //     const subSchema = { [name]: schema[name] };
    //     const result = Joi.validate(obj, subSchema);
    //     const { error } = result;
    //     return error ? error.details[0].message : null;
    // };

    return (
        <div className="h-screen flex bg-blue-200">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                <H 
                    type="1" 
                    value="Log in to your account 🔐" 
                    className="text-2xl font-medium text-primary mt-4 mb-12 text-center" 
                />
                <form onSubmit={e => Login(e)}>
                    {errors && Object.values(errors).map(err => 
                        <div key={err} className={DAlert}>{err}</div>
                    )}

                    <div>
                        <Label htmlFor="email" value="Email" />
                        <Input 
                            type="text" 
                            name="username" 
                            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" 
                            id="username" 
                            defaultValue=""
                            // onChange={e => setUser(e.target.value)} 
                            onChange={handleChange} 
                            placeholder="UserName ..."
                        />
                    </div>

                    <div>
                        <Label htmlFor="password" value="Password" />
                        <Input 
                            type="password" 
                            name="password" 
                            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" 
                            id="password" 
                            defaultValue=""
                            // onChange={e => setUser(e.target.value)} 
                            onChange={handleChange} 
                            placeholder="Pasword ..."
                        />
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <Button 
                            type="submit" 
                            name="login" 
                            value="Login" 
                            className="btn btn-success" 
                            id="login" 
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login