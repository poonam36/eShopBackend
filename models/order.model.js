module.exports = (mongoose) => {
    const Order = mongoose.model("order", mongoose.Schema({
        "address": Number,
        "product": Number,
        "quantity": Number,
        "user": Number
    }))
    return Order;
};