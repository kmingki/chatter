const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    } else {
        res.status(401).send('로그인이 필요합니다.');
    }
}

const isNotLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){//로그인 안한경우
        next();
    } else {
        res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
    }
}


module.exports = {
    isLoggedIn, isNotLoggedIn
  };