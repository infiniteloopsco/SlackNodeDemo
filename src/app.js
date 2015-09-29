var Slack = require('slack-node');

webhookUri = 'https://hooks.slack.com/services/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';

slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel: "#general",
  username: "demoslack",
  text: "this is a demo"
}, function(err, response) {
  console.log(response);
});