const R = require('ramda');

const execute = R.compose(
  R.always('function executed'),
  R.prop('body'),
);

module.exports = async (req, res, next) => {
  try {
    return res.json({
      result: execute(req),
    });
  } catch (e) {
    if (e && e.statusCode === 400) {
      return next(e);
    }
    return next(
      new Error(500)
    );
  }
};
