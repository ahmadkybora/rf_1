import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
// import http from "../../../services/httpService";
// import { getAllUsers } from "../../../services/userService";
import { getAllUser } from "../../../store/actions/userActions";

const Users = () => {
    // روش استفاده از 
    const getUsers = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch()
    const [users, setUsers] = useState()
    const store = useStore();
    useEffect(() => {
        dispatch(getAllUser())
         //روش ساده و استفاده
        // setUsers(getAllUsers);
        // const getAllUsers = () => {
        //     return http.get("panel/users")
        //         .then(res => setUsers(res.data.data))
        //         .catch(err => console.log(err))
        // }
        // getAllUsers();
        // getAllUsers.then(item =>{
        //     setUsers(item);
        // })
    }, [])
    console.log(store.getState())
    return (
        <div className="flex items-center">
            <table className="shadow-lg bg-white w-full">
                <thead>
                    <tr>
                        <th className="bg-blue-100 border text-center px-8 py-4">Full Name</th>
                        <th className="bg-blue-100 border text-center px-8 py-4">Email</th>
                        <th className="bg-blue-100 border text-center px-8 py-4">Mobile</th>
                        <th className="bg-blue-100 border text-center px-8 py-4">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {getUsers && getUsers.map(user => (
                    <tr>
                        <td className="border text-center px-8 py-4">{user.firstName + " " + user.lastName}</td>
                        <td className="border text-center px-8 py-4">{user.email}</td>
                        <td className="border text-center px-8 py-4">{user.mobile}</td>
                        <td className="border text-center px-8 py-4">
                            <span className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-auto h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>  
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 flex-auto h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 flex-auto h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                <thead>
                    <tr>
                        <th className="bg-blue-200 border rounded-md text-center px-8 py-4">Full Name</th>
                        <th className="bg-blue-200 border rounded-md text-center px-8 py-4">Email</th>
                        <th className="bg-blue-200 border rounded-md text-center px-8 py-4">Mobile</th>
                        <th className="bg-blue-200 border rounded-md text-center px-8 py-4">Option</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Users;