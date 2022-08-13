import http from "../../services/httpService"
import { Error, Success } from "../../utils/exceptionHandler";
import { GetAllUser } from "./type";

export const getAllUser = () => {
    return async dispatch => {
        await http.get("panel/users")
            .then(res => {
                Success(res);
                dispatch({
                    type: GetAllUser,
                    payload: res.data.data
                })
            })
            .catch(err => Error(err));
    }
}