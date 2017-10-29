const { send } = require('micro')
const Collection = require('../../models')

/**
 * @function getImageIds
 *
 * @description
 * Fetches collection from database via string argument
 * that matches 'name' key.
 *
 * @param {Object} { params }
 * @param {Object} res
 *
 * @returns {Array} ids
 */
// const getImageIds = async ({ params }, res) => {
//   try {
//     const { ids } = await Collection.findOne({ name: params.tag })
//     send(res, 200, { ids })
//   } catch (e) {
//     send(res, 500, { message: 'Internal Server Error' })
//     throw e
//   }
// }

// module.exports.getImageIds = getImageIds

// #########################################
// NOTE Code below this line is not needed
// at production time. Just used to seed
// the database.
// NOTE: yarn add cloudinary
// #########################################

const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
})

/**
 * @function getImagesByTag
 *
 * @description
 * Fetches all images from Cloudinary API via 'tag'.
 *
 * @param {String} tag
 */
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
