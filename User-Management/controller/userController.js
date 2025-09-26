const User = require('../model/user');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        console.error('Get all users error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Get user by ID error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, age } = req.body;
        
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, age },
            { new: true, runValidators: true }
        ).select('-password');
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({ 
            message: 'User updated successfully', 
            user 
        });
    } catch (error) {
        console.error('Update user error:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteUser = async (req, res) => {
    try {
        if (req.params.id === req.user._id.toString()) {
            return res.status(400).json({ error: 'You cannot delete your own account' });
        }

        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };