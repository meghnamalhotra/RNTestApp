import {GET_USER_LIST, LOGOUT, SAVE_USER_DATA} from './Constants';

const initialState = {
  userList: [],
  userData: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      return {
        ...state,
        userList: action.userList,
      };
    }
    case SAVE_USER_DATA: {
      return {
        ...state,
        userData: action.userData,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
