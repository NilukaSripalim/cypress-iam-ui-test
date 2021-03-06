// auth.js

/**
 * Required External Modules
 */

const express = require("express");
const router = express.Router();
const passport = require("passport");
const util = require("util");
const url = require("url");
const querystring = require("querystring");

require("dotenv").config();


/**
 * Routes Definitions
 */
router.get(
    "/login", passport.authenticate('oauth2'));
    // passport.authenticate("auth0", {
    //   scope: "openid email profile"
    // }),
//     passport.authenticate('oauth2', {failWithError: true}),
//     (req, res) => {
//       res.redirect("/");
//     }
//   );
router.get('/callback',
//   passport.authenticate('oauth2', { successRedirect: '/',
//                                       failureRedirect: '/login' }));

                                      function(req, res, next) {
                                        console.log("[OAuth2:redirect:query]:", JSON.stringify(req.query));
                                        console.log("[OAuth2:redirect:body]:", JSON.stringify(req.body));
                                      },
                                      passport.authenticate('twitter', { failureRedirect: '/login' }),
                                      function(req, res) {
                                        res.redirect('/');
                                      });
//   router.get("/callback", (req, res, next) => {
    // passport.authenticate("oauth2", (err, user, info) => {
    //   if (err) {
    //     return next(err);
    //   }
    //   if (!user) {
    //     return res.redirect("/login");
    //   }
    //   req.logIn(user, (err) => {
    //     if (err) {
    //       return next(err);
    //     }
    //     const returnTo = req.session.returnTo;
    //     delete req.session.returnTo;
    //     res.redirect(returnTo || "/");
    //   });
    // })(req, res, next);
//   });

//   router.get("/logout", (req, res) => {
//     req.logOut();
  
//     let returnTo = req.protocol + "://" + req.hostname;
//     const port = req.connection.localPort;
  
//     if (port !== undefined && port !== 80 && port !== 443) {
//       returnTo =
//         process.env.NODE_ENV === "production"
//           ? `${returnTo}/`
//           : `${returnTo}:${port}/`;
//     }
  
//     const logoutURL = new URL(
//       util.format("https://%s/logout", process.env.AUTH0_DOMAIN)
//     );
//     const searchString = querystring.stringify({
//       client_id: process.env.AUTH0_CLIENT_ID,
//       returnTo: returnTo
//     });
//     logoutURL.search = searchString;
  
//     res.redirect(logoutURL);
//   });
/**
 * Module Exports
 */

module.exports = router;
