const User = (email, name) => {
    const myUser = {
        "email": email,
        "name": name
    }
    return myUser;
};

module.exports = User;