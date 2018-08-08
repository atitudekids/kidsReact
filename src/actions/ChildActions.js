import { ADD_CHILD, FETCH_CHILDREN } from './types';
import axios from 'axios';

//TODO COLOCAR EM UM ARQUIVO DE CONFIGURACAO
const apiUrl = 'http://localhost:3000';

export const createChild = ({ name, born }) => {
    return (dispatch) => {
        axios.post(`${apiUrl}/crianca`, { name, born })
        .then(response => {
            dispatch(createPostSuccess(response.data));
        })
        .catch(error => {
            throw (error);
        });
    };
};

export const createPostSuccess = (data) => {
    return {
        type: ADD_CHILD,
        payload: {
            id: data.id_crianca,
        }
    };
};

export const fetchChildren = (children) => {
    return {
        type: FETCH_CHILDREN,
        children
    };
};
  
export const fetchAllChild = () => {
    return (dispatch) => {
        axios.get(`${apiUrl}/crianca`)
        .then(response => {
          dispatch(fetchChildren(response.data));
        })
        .catch(error => {
          throw (error);
        });
    };
};