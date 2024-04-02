const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, gender, avatar, domain, available } =
      req.body;

    const existringUser = await User.findOne({ email });
    if (existringUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
      gender,
      avatar,
      domain,
      available,
    });

    await newUser.save();

    res.status(201).json({ msg: "User created", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstName, lastName, gender, avatar, domain, available } = req.body;

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    existingUser.firstName = firstName;
    existingUser.lastName = lastName;
    existingUser.gender = gender;
    existingUser.avatar = avatar;
    existingUser.domain = domain;
    existingUser.available = available;

    await existingUser.save();

    res.status(200).json({ msg: "User updated", user: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    await existingUser.remove();

    res.status(200).json({ msg: "User deleted", user: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
