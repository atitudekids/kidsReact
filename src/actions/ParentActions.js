import { PARENT_ADD, PARENT_FETCH } from './types';
import axios from 'axios';

//TODO COLOCAR EM UM ARQUIVO DE CONFIGURACAO
const apiUrl = 'http://localhost:3000';

export const parentCreate = ({ nome, identificacao, telefone, email }) => {
    return (dispatch) => {
        console.log(nome);
        axios.post(`${apiUrl}/responsavel`, { nome, identificacao, telefone, email })
        .then(response => {
            dispatch(parentCreateSuccess(response.data));
        })
        .catch(error => {
            throw (error);
        });
    };
};

export const parentCreateSuccess = (data) => {
    return {
        type: PARENT_ADD,
        payload: {
            id: data.id_responsavel,
        }
    };
};

export const parentFetch = (parent) => {
    return {
        type: PARENT_FETCH,
        parent
    };
};
  
export const parentsFetch = () => {
    return (dispatch) => {
        axios.get(`${apiUrl}/responsavel`)
        .then(response => {
          dispatch(parentFetch(response.data));
        })
        .catch(error => {
          throw (error);
        });
    };
};