/*
{
    name: String,
    isStudent: boolean,
    region: String or SomeType,
    code: String
}
*/

import AsyncStorage from '@react-native-community/async-storage';

export const RESTORE_TOKEN = 'RESTORE_TOKEN';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const authReducer = (state, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoggedIn: action.isLoggedIn,
        isLoading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: true,
        userToken: action.token,
      };
    case SIGN_OUT:
      AsyncStorage.removeItem('userInfo');
      return {
        ...state,
        isLoggedIn: false,
        userToken: null,
      };
    default:
      return state;
  }
};
