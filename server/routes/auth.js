module.exports = (app, passport) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    
    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/home',
        failureRedirect: '/'
    }));

    app.get('/home', (req, res) => {
        res.send('Authentication Complete');
    })
}
