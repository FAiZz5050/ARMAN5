module.exports.config = {
	name: "run",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "FAIZU",
	description: "THIS BOT WAS MADE BY MR FAIZ ANSARI",
	commandCategory: "RUN SHELL",
	usages: "PREFIX",
	cooldowns: 5,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
    const permission = ["100082052205053"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("MY BOSS FAIZ ANSARI ONLY", event.threadID, event.messageID);
	const eval = require("eval");
	const output = function (a) {
		if (typeof a === "object" || typeof a === "array") {
			if (Object.keys(a).length != 0) a = JSON.stringify(a, null, 4);
			else a = "";
		}

		if (typeof a === "number") a = a.toString();
		
		return api.sendMessage(a, event.threadID, event.messageID);
	}
	try {
		const response = await eval(args.join(" "), { output, api, event, args, Threads, Users, Currencies, models, global }, false);
		return output(response);
	}
	catch (e) { return output(e) };
}
