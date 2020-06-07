const auth = require('../external-services/firebase/auth');

 async function authMiddleware(req, res, next) {
  try {
    const { authorization =  '' } =req.headers;
    // Bearer token
    const [,token] = authorization.split(' '); //['bearer','token']
    const decodedToken = await auth.verifyToken(token);
    console.log(decodedToken);
    req.locals = { email: decodedToken.email };
    return next();
  } catch (err) {
    return res.status(401).send(err);
  }
}
module.exports = authMiddleware;