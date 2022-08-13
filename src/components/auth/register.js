import React, { useState } from 'react';
import Joi from 'joi-browser';
import { Button, H, Input, TextArea } from '../../utils/tools';

export const InputStyle = "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"

const Register = () => {
    const schema = {
        first_name: Joi.string().min(3).max(25).required().label("First Name"),
        last_name: Joi.string().min(3).max(25).required().label("Last Name"),
        username: Joi.string().min(3).max(25).required().label("User Name"),
        email: Joi.string().min(3).max(25).required().label("Email"),
        password: Joi.string().min(8).max(25).required().label("Password"),
        password_confirmation: Joi.string().min(8).max(25).required().label("Confirmation Password"),
        mobile: Joi.string().min(8).max(25).required().label("Mobile"),
        home_phone: Joi.string().min(8).max(25).required().allow('').label("HomePhone"),
        work_phone: Joi.string().min(8).max(25).required().allow('').label("WorkPhone"),
        image: Joi.string().allow('').label("Image"),
        work_address: Joi.string().min(8).max(250).required().allow('').label("Work Address"),
        home_address: Joi.string().min(8).max(250).required().allow('').label("Home Address"),
    }
    const [edit, setEdit] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const [showImg, setShowImg] = useState();

    return (
        <div className="h-screen flex bg-blue-200 border rounded-md">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-4 px-4 drop-shadow-2xl">
                {edit ? 
                <H type="1" value="Update Form" className="text-2xl font-medium text-primary mt-4 mb-12 text-center" /> : 
                <H type="1" value="Register Form" className="text-2xl font-medium text-primary mt-4 mb-12 text-center" />}
                <form>
                    {errors && Object.values(errors).map(err => 
                        <div className="justify-content-center">
                            <div key={err} className="col-8 alert alert-danger">{err}</div>
                        </div>
                    )}

                    <div className="columns-2">
                        <div>
                            <Input 
                                type="text" 
                                name="firstName" 
                                className={InputStyle} 
                                id="first-name" 
                                value="" 
                                placeholder="First Name ..."
                            />
                        </div>
                        <div>
                            <Input 
                                type="text" 
                                name="last_name" 
                                className={InputStyle} 
                                id="last-name" 
                                value="" 
                                placeholder="Last Name ..."
                            />
                        </div>
                    </div>

                    <div className="columns-2">
                        <div>
                            <Input 
                                type="text" 
                                name="username" 
                                className={InputStyle} 
                                id="username" 
                                value="" 
                                placeholder="User Name ..."
                            />
                        </div>
                        <div>
                            <Input 
                                type="email" 
                                name="email" 
                                className={InputStyle} 
                                id="email" 
                                value="" 
                                placeholder="Email ..."
                            />
                        </div>
                    </div>

                    <div className="columns-2">
                        <div>
                            <Input 
                                type="number" 
                                name="mobile" 
                                className={InputStyle} 
                                id="mobile" 
                                value="" 
                                placeholder="Mobile ..."
                            />
                        </div>
                        <div>
                            <Input 
                                type="email" 
                                name="email" 
                                className={InputStyle} 
                                id="email" 
                                value="" 
                                placeholder="Email ..."
                            />
                        </div>
                    </div>

                    <div className="columns-2">
                        <div>
                            <Input 
                                type="text" 
                                name="password" 
                                className={InputStyle} 
                                id="password" 
                                value="" 
                                placeholder="Password ..."
                            />
                        </div>
                        <div>
                            <Input 
                                type="text" 
                                name="confirma_password" 
                                className={InputStyle} 
                                id="confirma-password" 
                                value="" 
                                placeholder="Confirmation Password ..."
                            />
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-4">
                            <Input />
                            <div className="form-group col-md-4">
                                <Input />
                            </div>
                        </div>
                    </div>

                    { isSelected === true ? 
                    <div className="col-md-4">
                        <img 
                            class="rounded-circle" 
                            src={showImg}
                            width="100px" 
                            height="100px" 
                        />
                    </div>
                    : '' }
                
                    <TextArea />
                    <TextArea />
                    <TextArea /> */}

                    {edit ? 
                    <Button 
                        type="submit" 
                        name="" 
                        value="" 
                        className="" 
                        id=""
                    /> : 
                    <Button 
                        type="submit" 
                        name="" 
                        value="Register" 
                        className="btn btn-success" 
                        id=""
                    />}
                </form>
            </div>
        </div>
    )
}

export default Register