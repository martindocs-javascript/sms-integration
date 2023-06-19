import React, { useContext, createContext, useReducer } from 'react';
import reducer from './reducer';
import axios from 'axios';

import { 
    DISPLAY_ALERT,
    CLEAR_ALERT,

    SEND_MSG_BEGIN,
    SEND_MSG_SUCCESS,
    SEND_MSG_ERROR,
} from './actions';

const AppContext = createContext();

const initialState = {
    isLoading: false,
    showAlert: false,
    alertType: '',
    alertText: '',   
};

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    // AXIOS instance
    const authFetch = axios.create({
        baseURL: '/api/v1',
    });

    // Display alert
    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT});
        clearAlert();
    }
    
    // Clear alert
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT});
        },3000)
    }

    // Send the message
    const sendMessage = async ({phone, textMsg}) => {
      
        dispatch({type: SEND_MSG_BEGIN});
        try{
            await authFetch.post('/sms', {
                phone: phone, 
                textMsg: textMsg, 
            })
            
            dispatch({type: SEND_MSG_SUCCESS});
        }catch(err){
            dispatch({type: SEND_MSG_ERROR, payload: {msg: err.response.data.msg}});           
        }
        clearAlert();
    }

    return (
        <AppContext.Provider 
            value={{
                ...state,
                displayAlert,
                sendMessage,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext, initialState};