module.exports = (mongoose) => {
    const Address = mongoose.model("address", mongoose.Schema({
        "name": String,
        "city": String,
        "state": String,
        "street": String,
        "contactNumber": String,
        "landmark": String,
        "zipCode": String,
        "user_id": Number,
    }
    )
    );
    return Address;
};