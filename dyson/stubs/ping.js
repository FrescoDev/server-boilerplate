module.exports = {
  path: '/ping',
  method: 'GET',
  cache: false,
  status(req, res) {
    res.json({}).end();
  },
};
