export async function getProfile(req, res) {
  if (!req.user) {
    return res.status(404).json({ message: 'User not found.' });
  }
  res.json(req.user);
}

export async function updateProfile(req, res) {
  const user = req.user;
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }
  user.name = req.body.name || user.name;
  await user.save();
  res.json(user);
}
