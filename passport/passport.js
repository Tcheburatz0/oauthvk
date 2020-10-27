const VKontakteStrategy = require('passport-vkontakte').Strategy;

//Стратегия авторизации вконтакте
let vkStrategy = new VKontakteStrategy(
  {
    clientID: '7642744',
    clientSecret: 'YpDT14ERr3zMycgX7BCr',
    callbackURL: 'http://localhost:3000/auth/vk/callback',
    scope: ['email'],
    profileFields: ['email,photo_200_orig'],
  },
  function verify(accessToken, refreshToken, params, profile, done) {

    process.nextTick(function () {
      let data = {
          profile: profile,
          accessToken: accessToken,
          refreshToken: refreshToken
      }
      return done(null, data);
    });
  }
);

module.exports = vkStrategy;
