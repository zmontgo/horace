const faq = require('../data/faq.json');

module.exports.execute = async (client, message) => {
	//const channel = message.channel();
	//message.channel.send(faq['raid-room']);
	// TODO: add logic to pull correct faq from the JSON
};

module.exports.config = {
	name: 'faq',
	aliases: ['faq'],
	description: 'helpful information about the channel',
	usage: ['faq'],
};