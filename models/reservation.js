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
