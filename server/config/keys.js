module.exports = {
    googleAuth: {
        clientID: '48962189184-8ncamprnk22jfp3peh6dokd8ool5dljk.apps.googleusercontent.com',
        clientSecret: '26XpvJDYF-NF-NWxdta8dy8l',
        callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    facebookAuth : {
        clientID      : '257787938334533', 
        clientSecret  : 'aaa8473000cb50e77aea9f29fcebc2f8', 
        callbackURL   : 'http://localhost:5000/auth/facebook/callback',
        profileURL    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        profileFields : ['id', 'email', 'name'] 
    }
}