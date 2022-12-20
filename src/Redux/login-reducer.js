const STORE_USER = 'store_user';
const LOG_IN = "LOG_IN"

const initialState = localStorage.getItem(STORE_USER);
const initialStateToObject = JSON.parse(initialState);

const currState = {
    login: initialStateToObject ? initialStateToObject.login : null,
    isAuth : false
}

const reducerLog = (state = currState, action) => {
    switch(action.type) {
        case LOG_IN: {
            localStorage.setItem(STORE_USER, JSON.stringify(action.data))
            return {
                ...state,
                isAuth: !state.isAuth
            }
        }
        case 'LOG_OUT': {
            localStorage.removeItem(STORE_USER)
            return state = action.payload;
        }
        default:
            return state;
    }
}


export const logInData = (data) => {
    console.log(data)
    return {
        type: LOG_IN,
        data
    }
}

export const logOut = () => {

    const loginData = {
        login: null,
        password: null,
    }

    return {
        type: 'LOG_IN',
        payload: loginData
    }
}



export default reducerLog;