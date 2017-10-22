const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })

const Schema = mongoose.Schema

const collectionSchema = new Schema({
  name: String,
  ids: [String]
})

module.exports = mongoose.model('Collection', collectionSchema)
