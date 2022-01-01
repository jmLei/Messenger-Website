const client = require("../redis");

module.exports = {
    addUser : async (user) => {
        await client.set(user.email, user.name);
    },

    getUser : async (email) => {
        const user = await client.get(email);
        return user;
    },
}