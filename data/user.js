const schema = mongoose.Schema({

    userID: String,
    guildID: String,
    prologr: {type: Number, default: 0},
    firstglr: {type: Number, default: 0},
    twoglr: {type: Number, default: 0},
    book: {type: Number, default: 0},
    coins: {type: Number, default: 0},
    invent: {type: Number, default: 0},
    hand: {type: String, default: 'левая'}
    

})
module.exports = mongoose.model("User", schema)