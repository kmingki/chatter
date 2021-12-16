//import shortId from 'shortid';
import axios from 'axios';
import { all, delay, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';

import {
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    UNLIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST,
    UNLIKE_POST_SUCCESS,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_USER_POSTS_FAILURE,
    LOAD_USER_POSTS_REQUEST,
    LOAD_USER_POSTS_SUCCESS,
    LOAD_HASHTAG_POSTS_FAILURE,
    LOAD_HASHTAG_POSTS_REQUEST,
    LOAD_HASHTAG_POSTS_SUCCESS,
    LOAD_POST_FAILURE,
    LOAD_POST_REQUEST,
    LOAD_POST_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_SUCCESS,
    UPLOAD_IMAGES_FAILURE,
    RETWEET_REQUEST,
    RETWEET_SUCCESS,
    RETWEET_FAILURE,
  } from '../reducers/post';

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function retweetAPI(data){
    return axios.post(`/post/${data}/retweet`);
}

function * retweet(action) {

    try{
        const result = yield call(retweetAPI, action.data);
        yield put({ //put(): redux store에 dispatch하는 역할
            type: RETWEET_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: RETWEET_FAILURE,
            error: err.response.data
        });
    }
    


}
function unlikePostAPI(data) {
    return axios.patch(`post/${data}/unlike`);
}

function * unlikePost(action) {
    try{
        const result = yield call(unlikePostAPI, action.data);
        //console.log(result.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNLIKE_POST_FAILURE,
            data: err.response.data
        });
    }
}

function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`);
}

function * likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: LIKE_POST_FAILURE,
            error: error.response.data
        })
    }
    
}

function loadPostsAPI(data) {
    return axios.get(`/posts?lastId=${data || 0}`);
}

function * loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.data);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadPostAPI(data) {
    return axios.get(`/post/${data}`);
}

function * loadPost(action) {
    try {
        const result = yield call(loadPostAPI, action.data);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function addPostAPI(data) { // data == text 
    
    return axios.post('/post', data);
}

function * addPost(action){ //action
    try {
        const result = yield call(addPostAPI, action.data); //action.data == text
        
        yield put({ 
            type : ADD_POST_SUCCESS,
            data: result.data,
        });
        
        yield put({ //post reducer와 user reducer
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
        
    } catch (err) {
        console.error(err);
        yield put({
            type:ADD_POST_FAILURE,
            error:err.response.data,
        });
    }
}

function removePostAPI(data) {
    return axios.delete(`/post/${data}`);
}

function * removePost(action) {
    try{
        const result = yield call(removePostAPI, action.data); //action.data == postid
        yield put({
            type : REMOVE_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type : REMOVE_POST_OF_ME,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        });
    }
}


function addCommentAPI(data){
    return axios.post(`/post/${data.postId}/comment`, data);
}

function * addComment(action) {
    try{
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error : err.response.data,
        });
    }
}

function uploadImagesAPI(data){
    return axios.post('/post/images', data); //form data는 그대로 전송해야함
}

function * uploadImages(action) {
    try{
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data,
        });
    }
}

function loadUserPostsAPI(data, lastId){
    return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`); 
}

function * loadUserPosts(action) {
    try{
        const result = yield call(loadUserPostsAPI, action.data, action.lastId);
        yield put({
            type: LOAD_USER_POSTS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_USER_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadHashtagPostsAPI(data, lastId) {
    return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`); 
}

function * loadHashtagPosts(action) {
    try{
        const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
        yield put({
            type: LOAD_HASHTAG_POSTS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_HASHTAG_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}

function * watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet);
}

function * watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function * watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function * watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function * watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function * watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function * watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function * watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function * watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
function * watchLoadUserPosts() {
    yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}
function * watchHashtagPosts() {
    yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}
export default function * postSaga() {
    yield all([
        fork(watchRetweet),
        fork(watchUploadImages),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchLoadPost),
        fork(watchLoadUserPosts),
        fork(watchHashtagPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}