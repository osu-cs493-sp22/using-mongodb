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
    ownerid: { required: true }
}

exports.LodgingSchema = LodgingSchema
