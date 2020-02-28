var axios = require('axios');

function getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
   var userGit =axios
    .get(queryUrl)
    .then(res => {
    console.log(res.data.avatar_url);
    console.log(res)
  
    return res
    }).catch(err => console.log(err))
  
    return userGit


  };

module.exports = getUser;
