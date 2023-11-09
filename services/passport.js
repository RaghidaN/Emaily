const passport = require('passport');
//exports many properties, but we only need the strategy property, with internal identifier of 'google'
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//new GoogleStrategy creates a new instance of Google Strategy
//passport.use tells passport that Google Strategy is available
passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    //route user is sent to after they grant permissions to our application
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    //accessToken allows you to reach back into Google and do something with the person's info, which we're not doing
    //refreshToken allows us to refresh the accessToken, because accessToken expires after some amount of time
    console.log(accessToken);
}
));

