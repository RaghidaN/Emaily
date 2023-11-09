//require in original passport npm module here
const passport = require('passport');

module.exports = (app) => {
    //handle get type http request, first argument is path we want to handle, second argument is code that gets executed when request comes in with this route
    app.get('/auth/google', 
        passport.authenticate('google', {
            //specifies to google what we want access to from this user
            //google internally has a list of all scopes available from an account
            scope: ['profile', 'email']
        })
    );

    app.get('auth/google/callback',
        //tell passport to handle incoming request, using google strategy
        passport.authenticate('google'));

}