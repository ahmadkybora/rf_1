import React from 'react'
import { NavLink } from 'react-router-dom';
import { Search } from '../../../utils/tools';
const Footer = () => {
    return (
        <div>
            <div className="flex bg-gray-200 rounded-md">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="row">
                            <form>
                                <div className="input-group">
                                    <div className="form-outline w-75">
                                        <div className="form-group">
                                            <Search 
                                                onSubmit={null}
                                                type="" 
                                                name=""
                                                className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" 
                                                id="" 
                                                value=""
                                                placeholder=""
                                                style={null}
                                            />
                                        </div>
                                    </div>
                                    <button 
                                        className="btn btn-success">
                                        <i className="fa fa-send" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;