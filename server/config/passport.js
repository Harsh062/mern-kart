var GoogleStrategy = require('passport-google-oauth20').Strategy; 
var keys = require('./keys');
var User = require('../models/user');

module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id)
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err);
        })
    })

    passport.use(new GoogleStrategy({
        clientID        : keys.googleAuth.clientID,
        clientSecret    : keys.googleAuth.clientSecret,
        callbackURL     : keys.googleAuth.callbackURL,
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

    }, (req, accessToken, refreshToken, profile, done) => {
        for(i in profile) {
            console.log (i, profile[i])
        }
        User.findOne({'google.id' : profile.id})
            .then((existingUser) => {
                if(existingUser) {
                    done(null, existingUser);
                } else {
                    var user = new User();
                    user.google.id = profile.id;
                    user.google.email = profile.emails[0].value;
                    user.google.name = profile.displayName;
                    user.save()
                    .then(() => {
                        done(null, user);
                    })
                    .catch(err => {
                        done(err);
                    })
                }
            })
            .catch((err) => {
                done(err);
                console.log(err);
            })
    }))
}