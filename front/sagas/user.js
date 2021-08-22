import { all, delay, fork, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
    LOAD_MY_INFO_REQUEST,
    LOAD_MY_INFO_SUCCESS,
    LOAD_MY_INFO_FAILURE,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWERS_SUCCESS,
    CHANGE_NICKNAME_REQUEST,
    CHANGE_NICKNAME_SUCCESS,
    CHANGE_NICKNAME_FAILURE,
  } from '../reducers/user';

function loadMyInfoAPI() {
    return axios.get('/user');
}

function * loadMyInfo (action) {
    try {
        const result = yield call(loadMyInfoAPI);
        yield put({
            type: LOAD_MY_INFO_SUCCESS,
            data: result.data
        });

    } catch (err) {
        console.error(err);
        yield put({
            type:LOAD_MY_INFO_FAILURE,
            error: err.response.data,
        });
    }
}


function logInAPI(data){
    return axios.post('/user/login', data);
}

/// delay() => Promise 가 한번 resolve 되고 나면, 미들웨어는 Saga 를 다시 작동시키면서, 다음 yield 까지 코드를 실행합니다.
function * logIn (action) {
    try{
        const result = yield call(logInAPI, action.data);//{ email, password }
        //console.log(result.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (err){
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data, 
        });
    }
}

/*err.response.data :  https://xn--xy1bk56a.run/axios/guide/error-handling.html */


function logOutAPI() {
    return axios.post('/user/logout');
}

function * logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error : err.response.data,
        });
    }
}

function signUpAPI(data) {
    return axios.post('/user', data);
}

//put():특정 액션을 dispatch한다.
function* signUp(action) {
    try {
      const result = yield call(signUpAPI, action.data);
      console.log(result);
      yield put({
        type: SIGN_UP_SUCCESS,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: SIGN_UP_FAILURE,
        error: err.response.data,
      });
    }
  }
  
function followAPI(data) {
    return axios.patch(`/user/follow/${data}`);
}

function * follow(action) {
    try{
        const result = yield call(followAPI, action.data);
        yield put({
            type: FOLLOW_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type:FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowAPI() {
    return axios.patch('/api/unfollow');
}

function * unfollow(action) {
    try{
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data : action.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}
function loadFollowersAPI(){
    return axios.get('user/loadFollowers');
}
function * loadFollowers(action){
    
    try {
        const result = yield loadFollowersAPI();

        yield put({
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data
        });

    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWERS_FAILURE,
            error: err.response.data
        });
    }
}

function changeNicknameAPI(data) {
    return axios.patch('/user/changeNickname', { nickname: data});
}

function * changeNickname(action) { 
    try {
        const result = yield call(changeNicknameAPI, action.data); // result.data.nickname
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data
        });
    }
}

function * watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

function * watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function * watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function * watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function * watchLoadFollowers() {
    yield takeLatest(UNFOLLOW_REQUEST, loadFollowers);
}

function * watchLoadFollowings() {
    yield takeLatest(UNFOLLOW_REQUEST, loadFollowings);
}

function * watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function * watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function * watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function * userSaga(){
    yield all([
        fork(watchChangeNickname),
        fork(watchLoadMyInfo),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}