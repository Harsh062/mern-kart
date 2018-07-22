module.exports = (app, passport) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    
    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/home',
        failureRedirect: '/'
    }));

    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: 'email'
    }));
    
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/home',
        failureRedirect: '/'
    }));

    app.get('/home', (req, res) => {
        console.log(`res: ${res}`);
        res.send('Authentication Complete');
    })

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/home', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
    }));
}
