const userModel = require('../Models/UserModel');
const { hashPassword, comparePassword, generateToken } = require('../Utils/authUtils');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(404).json({ error: "User doesn't exist" });
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: "Password Incorrect" });
    }

    const token = generateToken(user);
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ token });
};

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = new userModel({ name, email, password: hashedPassword });

    try {
        const savedUser = await user.save();
        const token = generateToken(savedUser);
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { login, register };
