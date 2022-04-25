const { ObjectId } = require('mongodb')

const { getDbInstance } = require('../lib/mongo')
const { extractValidFields } = require('../lib/validation')

/*
 * Schema for a reservation.
 */

const ReservationSchema = {
    start: { required: true },
    end: { required: true },
    userId: { required: true },
    lodgingId: { required: true }
};
exports.ReservationSchema = ReservationSchema;

exports.insertNewReservation = async function insertNewReservation(reservation) {
    const db = getDbInstance()
    const collection = db.collection('reservations')

    reservation = extractValidFields(reservation, ReservationSchema)
    reservation.lodgingId = new ObjectId(reservation.lodgingId)
    const result = await collection.insertOne(reservation)
    return result.insertedId
}
