import AsyncStorage from '@react-native-community/async-storage'
import { bookShelfReducer } from 'pages/BookShelf/+state/bookshelf.reducer'
import { profileReducer } from 'pages/Profile/+state/profile.reducer'
import { signInReducer } from 'pages/SignIn/+state/sign-in.reducer'
import { signUpReducer } from 'pages/SignUp/+state/sign-up.reducer'
import { reducer as network } from 'react-native-offline'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { PlainAction } from 'redux-typed-actions'

import { HideLoading, ShowLoading } from './action'

const initialState = {
  showLoading: false
}

export function appReducer(state = initialState, action: PlainAction) {
  if (ShowLoading.is(action)) {
    return {
      showLoading: true
    }
  }
  if (HideLoading.is(action)) {
    return {
      showLoading: false
    }
  }
  return state
}

export function userReducer(state = initialState, action: PlainAction) {
  if (ShowLoading.is(action)) {
    return {
      showLoading: true
    }
  }
  if (HideLoading.is(action)) {
    return {
      showLoading: false
    }
  }
  return state
}

const combinedReducer = {
  SignInState: signInReducer,
  SignUpState: signUpReducer,
  ProfileState: profileReducer,
  AppState: appReducer,
  UserState: userReducer,
  BookShelfState: bookShelfReducer,
  network
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['BookShelfState']
}

const rootReducer = combineReducers(combinedReducer)
export type RootReducer = ReturnType<typeof rootReducer>
export default persistReducer(persistConfig, rootReducer)
