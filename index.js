module.exports = function(bot) {
  bot.on('msg', function(msg) {
    var regex = /^!flip ?(.*)$/;
    var matches = msg.msg.match(regex);
    var coin = Math.random() >= 0.5 ? 'HEDZ' : 'TAILZ';

    if (!matches) {
      return;
    }

    bot.msg([msg.chan], (msg.sender + ': ' + coin));
  });
}
