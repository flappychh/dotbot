const schema = mongoose.Schema({

    userID: String,
    guildID: String,
    prologr: {type: Number, default: 0},
    firstglr: {type: Number, default: 0},
    twoglr: {type: Number, default: 0},
    book: {type: Number, default: 0},
    coins: {type: Number, default: 0},
    invent: {type: Number, default: 0},
    hand: {type: String, default: 'левая'},
    biog: {type: String, default: 'отсутсвует'},
    dailycoinscd: {type: Number, default: 0},
    thirdglr: {type: Number, default: 0} 
  
    

})
module.exports = mongoose.model("User", schema)