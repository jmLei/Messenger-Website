const User = (email, name, chatrooms) => {
    const myUser = {
        "key": email,
        "value": {
            "name": name,
            "chatrooms": chatrooms
        }
    };
    return myUser;
};

module.exports = User;