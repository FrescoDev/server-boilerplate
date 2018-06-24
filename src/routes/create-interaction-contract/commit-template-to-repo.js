const git = require('simple-git/promise');
const {
  GITHUB_API_USER_AGENT,
  GITHUB_API_USER_EMAIL,
} = require('../../env-vars');
const path = `${process.cwd()}/template`;
const gitAPI = require('simple-git')(path);

const initialieRepo = async uri => {
  gitAPI
    .addConfig('user.name', GITHUB_API_USER_AGENT)
    .addConfig('user.email', GITHUB_API_USER_EMAIL)
    .init()
    .add(path)
    .commit('feat: initial commit')
    .addRemote('origin', uri)
    .push('origin', 'master', (err) => {
      if (err) return console.log(err);
      return console.log('git: pushed repo');
    });
};

const getStatus = async workingDir => {
  let statusSummary = null;
  try {
    statusSummary = await git(workingDir).status();
  } catch (e) {
    console.log(e);
  }
  return statusSummary;
};

module.exports = async remoteUrl => {
  initialieRepo(remoteUrl);
  return await getStatus(path);
};
