const User = (email, name) => {
    const myUser = {
        "key": email,
        "value": name,
    };
    return myUser;
};

module.exports = User;