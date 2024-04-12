export default function handler(req, res) {
  const { username, email, password } = req.body;

  // Mimicking a database with a global object
  global.users = global.users || {};

  if (global.users[username]) {
      return res.status(409).json({ message: 'User already exists' });
  }

  // Ideally, passwords should be hashed using a library like bcrypt
  global.users[username] = { email, password };
  res.status(201).json({ message: 'User registered successfully' });
}
