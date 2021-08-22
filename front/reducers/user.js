//import produce from '../util/produce';
import produce from "immer";

export const initialState = {
    loadMyInfoLoading: false, // 유저 정보 가져오기 시도중
    loadMyInfoDone: false,
    loadMyInfoError: null,
    followLoading: false, // 팔로우 시도중
    followDone: false,
    followError: null,
    unfollowLoading: false, // 언팔로우 시도중
    unfollowDone: false,
    unfollowError: null,
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false, // 닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,
    loadFollowersLoading: false,
    loadFollowersDone: false,
    loadFollowersError: null,
    me: null,
    signUpData: {},
    loginData: {},
};

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_UP_DONE = 'SIGN_UP_DONE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
    case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;
    case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me=action.data;
        draft.loadMyInfoError = null;
        break;
    case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = action.error;
        break;
    case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;
    case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.me.Followings.push(action.data.id);
        draft.followDone = true;
        break;
    case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError=action.error;
        break;
    case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;
    case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter((v)=> v.id !== action.data );
        draft.unfollowDone = true;
        break;
    case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;
    case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        break;
    case LOAD_FOLLOWERS_SUCCESS:
        draft.me.Followers = action.data;
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.loadFollowersError = null;
        break;
    case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = action.error;
        break;
    case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
    case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;
    case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
    case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;    
        break;
    case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;    
        break;
    case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error; 
        break;
    case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
    case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
    case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
    case SIGN_UP_DONE:
        draft.signUpDone = false;
        break;
    case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;
    case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname=action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = true;
        break;
    case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
    case ADD_POST_TO_ME:
        draft.me.Posts.unshift({id: action.data});
        break;
    case REMOVE_POST_OF_ME:
        //filter()메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
        draft.me.Posts = draft.me.Posts.filter((v)=> v.id !== action.data.postId);
        break;
    default:
        break;
    }
});

export default reducer;