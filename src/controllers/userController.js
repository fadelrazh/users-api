const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const createNewUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = await createUser(name, email, age);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateUserDetails = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updatedUser = await updateUser(id, name, email, age);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteUser(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getUsers,
  getUser,
  createNewUser,
  updateUserDetails,
  removeUser,
};
