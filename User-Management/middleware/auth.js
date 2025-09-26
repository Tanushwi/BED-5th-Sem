const User = require('../model/user');

const auth = async (req, res, next) => {
    try {
        const userId = req.session.userId || req.session.registeredUserId;
        console.log('Session userId:', userId);

        if (!userId) {
            return res.redirect('/login');
        }

        const user = await User.findById(userId);
        if (!user) {
            req.session.destroy((err) => {
                if (err) {
                    console.error('Session destroy error:', err);
                }
                res.clearCookie('connect.sid');
                return res.redirect('/login');
            });
            return;
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.redirect('/login');
    }
};

module.exports = auth;