const db = require("../config/database");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = async () => {
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

const createUser = async (name, email, age) => {
  const id = uuidv4();
  await db.query(
    "INSERT INTO users (id, name, email, age) VALUES (?, ?, ?, ?)",
    [id, name, email, age]
  );
  return getUserById(id);
};

const updateUser = async (id, name, email, age) => {
  await db.query("UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?", [
    name,
    email,
    age,
    id,
  ]);
  return getUserById(id);
};

const deleteUser = async (id) => {
  await db.query("DELETE FROM users WHERE id = ?", [id]);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
