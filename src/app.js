var Slack = require('slack-node');

webhookUri = 'https://hooks.slack.com/services/????/????/???';

slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel: "#general",
  username: "demoslack",
  text: "this is a demo"
}, function(err, response) {
  console.log(response);
});