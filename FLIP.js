module.exports = function(bot) {
  bot.on('msg', function(msg) {
    var regex = /^!flip ?(.*)$/;
    var matches = msg.msg.match(regex);

    if (!matches) {
      return;
    }

    var FLIP = function() {
      var coin = Math.random() >= 0.5 ? 'HEDZ' : 'TAILZ';
      if (msg.sender === 'mrf') {
        coin = 'TAILZ';
      }
      bot.msg([msg.chan], (msg.sender + ': ' + coin));
    }

    if (matches[1] === 'me off') {
      bot.msg([msg.chan], (msg.sender + ': t(-.-t)'));
    }
    else {
      FLIP();
    }
  });
}