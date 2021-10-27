const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
	const token = req.cookies['auth_token'];

	try {
		const { user } = jwt.verify(token, process.env.JWT_SECRET);
		req.user = user;
		next();
	} catch (err) {
		res.status(403).json({ error: 'unauthenticated' });
	}
};

module.exports = {
    authMiddleware
}