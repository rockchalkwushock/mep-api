const cloudinary = require('cloudinary')

const Collection = require('../../models')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
})

const getImagesByTag = async tag => {
  try {
    const { resources } = await cloudinary.v2.api.resources_by_tag(tag)
    const ids = resources.reduce((acc, { public_id }) => {
      acc.push(public_id)
      return acc
    }, [])
    await Collection.create({
      name: tag,
      ids
    })
  } catch (e) {
    throw e
  }
}

module.exports.getImagesByTag = getImagesByTag
