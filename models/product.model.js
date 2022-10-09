module.exports = (mongoose) => {
    const Product = mongoose.model("product", mongoose.Schema({
        "name": String,
        "category": String,
        "manufacturer": String,
        "availableItems": Number,
        "price": Number,
        "imageUrl": String,
        "description": String,
        "updatedAt": Date,
        "createdAt": Date

    }));
    return Product;
};