const User = require('../models/User');
const History = require('../models/History');

const claimPoints = async (req, res) => {
  const { userId } = req.body;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const points = Math.floor(Math.random() * 10) + 1;
  user.totalPoints += points;
  await user.save();

  const history = new History({
    userId: user._id,
    userName: user.name,
    claimedPoints: points,
  });
  await history.save();

  res.json({ user, claimedPoints: points });
};

module.exports = {
  claimPoints
};
