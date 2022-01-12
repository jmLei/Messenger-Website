const client = require("../redis");

module.exports = {
    /* Adds a user into the Redis database.
     *
    */
    addUser: async(payload) => {
        console.log("UserController.addUser");
        const key = payload["sub"];
        await client.hSet(key, "given_name", payload["given_name"]);
        await client.hSet(key, "family_name", payload["family_name"]);
    },

    userExists: async (userid) => {
        return client.EXISTS(userid);
    }
}
