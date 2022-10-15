module.exports = (mongoose) => {
    const User = mongoose.model("user", mongoose.Schema({
        "isAdmin": Boolean,
        "name": String,
        "email": String,
        "password": String,
        "contact": String
    }
    )
    );
    return User;
};