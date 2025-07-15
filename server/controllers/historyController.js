const History = require('../models/History');

const getHistory = async (req, res) => {
  const history = await History.find().sort({ timestamp: -1 });
  res.json(history);
};

module.exports = {
  getHistory
};
