module.exports.auth = function(req,res,next){
    if(req.session && req.session.user){
        return next();
    }
    res.redirect('/register');
}