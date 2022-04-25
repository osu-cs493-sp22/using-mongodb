const { ObjectId } = require('mongodb')

const { getDbInstance } = require('../lib/mongo')
const { extractValidFields } = require('../lib/validation')

/*
 * Schema for a lodging.
 */
const LodgingSchema = {
    name: { required: true },
    description: { required: false },
    street: { required: true },
    city: { required: true },
    state: { required: true },
    zip: { required: true },
    price: { required: true },
    ownerId: { required: true }
}
exports.LodgingSchema = LodgingSchema

exports.insertNewLodging = async function insertNewLodging(lodging) {
    const db = getDbInstance()
    const collection = db.collection('lodgings')

    lodging = extractValidFields(lodging, LodgingSchema)
    const result = await collection.insertOne(lodging)
    return result.insertedId
}

exports.getAllLodgings = async function getAllLodgings() {
    const db = getDbInstance()
    const collection = db.collection('lodgings')
    const lodgings = await collection.find({}).toArray()
    return lodgings
}

exports.getLodgingById = async function getLodgingById(id) {
    const db = getDbInstance()
    const collection = db.collection('lodgings')
    // const lodgings = await collection.find({
    //     _id: new ObjectId(id)
    // }).toArray()
    const lodgings = await collection.aggregate([
        { $match: { _id: new ObjectId(id) } },
        { $lookup: {
            from: "reservations",
            localField: "_id",
            foreignField: "lodgingId",
            as: "reservations"
        }}
    ]).toArray()
    return lodgings[0]
}
