module.exports = (app, passport) => {
    
       app.get('/auth/google', passport.authenticate('google', {
           scope: ['profile', 'email']
       }));
      
       app.get('/auth/google/callback', function(req, res, next) {
                   passport.authenticate('google', (err, user, info) => {
                       console.log(`info: ${info}`);
                     if (err) { return next(err); }
                     if (!user) { return res.send(err); }
                     res.writeHead(302, {
				        'Location': 'http://localhost:3000/dashboard'
			        });
			        res.end();
                   })(req, res, next);
                 });
    
       app.get('/auth/facebook', passport.authenticate('facebook', {
           scope: 'email'
       }));
      
       app.get('/auth/facebook/callback', passport.authenticate('facebook', {
           successRedirect: '/home',
           failureRedirect: '/'
       }));

       app.get('/api/current_user', (req, res) => {
           console.log('req.user: ', req.user);
           res.send(req.user);
       })
    
       app.post('/signup', function(req, res, next) {
                   passport.authenticate('local-signup', (err, user, info) => {
                     if (err) { return next(err); }
                     if (!user) { return res.send(err); }
                     delete user.local.password;
                     return res.send(user);
                   })(req, res, next);
                 });
    }
    
    
    