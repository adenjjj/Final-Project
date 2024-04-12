export default function handler(req, res) {
  const { username, password } = req.body;

  global.users = global.users || {};

  if (global.users[username] && global.users[username].password === password) {
      res.status(200).json({ message: 'Login successful' });
  } else {
      res.status(401).json({ message: 'Invalid credentials' });
  }
}
