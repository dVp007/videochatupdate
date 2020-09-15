// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

"use strict";
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
module.exports = function (server) {
  // Install a `/` route that returns server status
  const router = server.loopback.Router();
  router.get('/token', (req, res) => {
    const {
      identity,
      roomName
    } = req.query;
    let scheduledDate = new Date(req.query.datetime)
    let currentDate = Date.now()
    if (scheduledDate.getTime() > currentDate) {
      res.status(405).send({
        msg: 'Not yet scheduled'
      })
    }
    const MAX_ALLOWED_SESSION_DURATION = 14400;
    const token = new AccessToken(
      'AC07deb1575a8c94e295ae46fb2c31e86e',
      'SK11e2a6d6d727d4790255e32ec03ba750',
      'OE9KauaT8qONjuX7HCs2vrpk4YDTzcr1', {
        ttl: MAX_ALLOWED_SESSION_DURATION,
      }
    );
    token.identity = identity;
    const videoGrant = new VideoGrant({
      room: roomName,
    });
    token.addGrant(videoGrant);
    res.status(200).send({
      token: token.toJwt(),
    });
    console.log(`issued token for ${identity} in room ${roomName}`);
  });
  server.use(router);
};
