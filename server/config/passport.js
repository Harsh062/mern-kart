var GoogleStrategy = require('passport-google-oauth20').Strategy; 
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy    = require('passport-local').Strategy;

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

     // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        console.log(`req: ${req}`);
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);
        // asynchronous
        process.nextTick(function() {  

            //  Whether we're signing up or connecting an account, we'll need
            //  to know if the email address is in use.
            User.findOne({'local.email': email}, function(err, existingUser) {
                
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // check to see if there's already a user with that email
                if (existingUser) 
                    return done(null, false);

                //  If we're logged in, we're connecting a new local account.
                if(req.user) {
                    var user            = req.user;
                    user.local.email    = email;
                    user.local.password = user.generateHash(password);
                    user.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, user);
                    });
                } 
                //  We're not logged in, so we're creating a brand new user.
                else {
                    // create the user
                    var newUser            = new User();

                    newUser.local.email    = email;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        return done(null, newUser);
                    });
                }

            });
        });

    }));
        
}