import {
    DISPLAY_ALERT,
    CLEAR_ALERT,

    SEND_MSG_BEGIN,
    SEND_MSG_SUCCESS,
    SEND_MSG_ERROR,

} from './actions';

const reducer = (state, action) => {
    
    switch (action.type) {
        
        // Alert
        case DISPLAY_ALERT: 
            return {
                ...state,
                showAlert: true,
                alertType: 'error',
                alertText: 'Please provide all required values'
            }
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alertType: '',
                alertText: '',
            }

        // Send the message
        case SEND_MSG_BEGIN:
            return {
                ...state,
                isLoading: true,
            }
        case SEND_MSG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: 'Message sent successfully'
            }
        case SEND_MSG_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'error',
                alertText: action.payload.msg,
            }
        
        default: 
            return new Error (`No such action ${action.type}`);
    }
}

export default reducer;