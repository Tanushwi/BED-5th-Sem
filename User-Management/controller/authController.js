const User = require('../model/user');

const register = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const user = new User({ name, email, password, age });
        await user.save();

        req.session.userId = user._id;
        console.log('Session set for user:', user._id);
        
        res.json({ 
            message: 'User registered successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                age: user.age
            }
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const isMatch = user.checkPassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        req.session.userId = user._id;
        console.log('Login session set for user:', user._id); 
        
        res.json({ 
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                age: user.age
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Logout error:', err);
            return res.status(500).json({ error: 'Logout failed' });
        }
        res.json({ message: 'Logout successful' });
    });
};

const getCurrentUser = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({ error: 'Not logged in' });
        }

        const user = await User.findById(req.session.userId).select('-password');
        if (!user) {
            req.session.destroy();
            return res.status(401).json({ error: 'User not found' });
        }
        
        res.json(user);
    } catch (error) {
        console.error('Get current user error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { register, login, logout, getCurrentUser };