const client = require("../redis");

module.exports = {
    addUser : async (user) => {
        await client.set(user.email, user.name);
    },
}