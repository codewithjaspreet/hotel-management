

import fastapi as _fastapi

import schemas as _schemas
import services as _services
import sqlalchemy.orm as _orm


app = _fastapi.FastAPI()

_services.create_database()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/create-booking/", response_model=_schemas._Booking)
async def create_booking(

    user: _schemas._Booking,

    db: _orm.Session = _fastapi.Depends(_services.getdb)


):

    db_booking = _services.get_user_by_roomNo(db=db, roomNo=user.room_id) and (_services.get_user_by_start_time(
        db=db, roomNo=user.start_time) or _services.get_user_by_end_time(db=db, roomNo=user.end_time))

    if db_booking:

        raise _fastapi.HTTPException(
            status_code=400, detail="Room is already booked for this time period")

    return _services.create_booking(db=db, booking=user)

# @app.post('/bookings')
# def book_room(room_number: int, start_time: datetime, end_time: datetime, user_email: str, db: Session = Depends(get_db)):
#     # Find the room with the given room number
#     room = db.query(Room).filter(Room.room_number == room_number).first()
#     if not room:
#         raise HTTPException(status_code=404, detail="Room not found")

#     # Check if there are any overlapping bookings for the same room
#     overlapping_booking = db.query(Booking).filter(
#         Booking.room_id == room.id,
#         Booking.start_time < end_time,
#         Booking.end_time > start_time
#     ).first()

#     if overlapping_booking:
#         raise HTTPException(
#             status_code=400, detail="Room already booked for this time")

#     # Calculate the total price based on the room type and duration of the booking
#     duration = (end_time - start_time).total_seconds() / 3600
#     total_price = duration * room.price_per_hour

#     # Create the new booking and add it to the database
#     new_booking = Booking(
#         room_id=room.id,
#         user_email=user_email,
#         start_time=start_time,
#         end_time=end_time,
#         total_price=total_price
#     )
#     db.add(new_booking)
#     db.commit()

#     return {'booking_id': new_booking.id, 'total_price': total_price}
