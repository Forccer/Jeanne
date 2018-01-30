const {Command} = require('sylphy');

class Pin extends Command {
    constructor(...args) {
        super(...args, {
            name: 'pin',
            description: 'Pin a message',
            options: {hidden: true, permissions: ['manageMessages']},
            group: 'mod'
        });
    }

    async handle({msg, rawArgs}, responder) {
        const idRegex = /^\d{17,18}$/.test(rawArgs[0]);
        if (idRegex === false) return msg.channel.createMessage('\\❌ Invalid message id.');
        msg.channel.pinMessage(args);
    }
}

module.exports = Pin;