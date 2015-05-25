module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Bonjour ' + userName + 'Ici on aurait un bout de la documentation de docker qui pourrait aider un dev a remonter un environnement par exemple' 
  };
 
  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
