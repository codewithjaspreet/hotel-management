from fastapi import Depends , FastAPI , HTTPException 

import crud , models , schemas
from sqlalchemy.orm import Session
from database import SessionLocal , engine
from fastapi.middleware.cors import CORSMiddleware
from models import Room
import datetime 


import random 

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Add your frontend's origin here
origins = ["http://localhost", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



# creating new user for booking

@app.post("/users/" , response_model = schemas.User)

def create_user(user: schemas.UserCreate , db: Session = Depends(get_db)):
    db_user = crud.get_user_by_roomNo(db , id = user.id)
    if db_user:
        raise HTTPException(status_code = 400 , detail = "Room number already Alloted")
    return crud.create_user(db = db , user = user)




# getting all registered users

@app.get("/users/" , response_model = list[schemas.User])

def read_users(skip: int = 0 , limit: int = 100 , db: Session = Depends(get_db)):
    users = crud.get_users(db , skip = skip , limit = limit)
    return users



# getting user by id

@app.get("/users/{user_id}" , response_model = schemas.User)
def read_user(user_id: int , db: Session = Depends(get_db)):
    db_user = crud.get_user(db , user_id = user_id)
    if db_user is None:
        raise HTTPException(status_code = 404 , detail = "User not found")
    return db_user



#creating booking for user

@app.post("/users/{user_id}/bookings/" , response_model = schemas.Booking)

def create_user_booking(user_id: int , booking: schemas.BookingCreate , db: Session = Depends(get_db)):
    return crud.create_user_booking(db = db , booking = booking , user_id = user_id)



# getting all bookings

@app.get("/bookings/" , response_model = list[schemas.Booking])

def read_bookings(skip: int = 0 , limit: int = 100 , db: Session = Depends(get_db)):
    bookings = crud.get_bookings(db , skip = skip , limit = limit)
    return bookings




# adding random rooms with price per hour , room type , id

@app.post("/add-rooms")
async def add_rooms():
    session = SessionLocal()
    try:
        room_types = ['A', 'B', 'C']
        num_rooms = [2, 3, 5]
        for i, room_type in enumerate(room_types):
            for j in range(num_rooms[i]):
                price_per_hour = random.uniform(30, 150)
                room = Room(room_type=room_type, price_per_hour=price_per_hour)
                session.add(room)
        session.commit()
        return {"message": "Rooms added successfully"}
    except:
        session.rollback()
        raise
    finally:
        session.close()




# getting those rooms that are added in database

@app.get("/rooms")
async def get_rooms():
    session = SessionLocal()
    try:
        rooms = session.query(Room).all()
        return {"rooms": [{"id": room.id, "type": room.room_type, "price_per_hour": room.price_per_hour} for room in rooms]}
    finally:
        session.close()


# deleting booking yet to be done

# @app.delete("/bookings/{booking_id}")
# def delete_booking(booking_id: int, db: Session):
#     booking = db.query(models.Booking).filter(
#         models.Booking.id == booking_id).first()
#     if not booking:
#         raise HTTPException(status_code=404, detail="Booking not found")
#     if booking.start_time < datetime.now():
#         raise HTTPException(
#             status_code=400, detail="Cannot delete past bookings")

#     # Calculate refund amount based on cancellation policy
#     now = datetime.now()
#     start = booking.start_time
#     if (start - now).total_seconds() > 48 * 60 * 60:
#         refund_percent = 100
#     elif (start - now).total_seconds() > 24 * 60 * 60:
#         refund_percent = 50
#     else:
#         refund_percent = 0
#     refund_amount = booking.price * refund_percent / 100

#     # Delete booking from database
#     db.delete(booking)
#     db.commit()

#     return {
#         "message": "Booking deleted successfully",
#         "refund_percent": refund_percent,
#         "refund_amount": refund_amount,
#     }


# app- update booking system - was not able to integrate it with frontend

# @router.put("/bookings/{booking_id}")
# def update_booking(
#     booking_id: int, booking: schemas.BookingUpdate, db: Session = Depends(get_db)
# ) -> Dict[str, Any]:
#     db_booking = crud.get_booking(db, booking_id)
#     if not db_booking:
#         raise HTTPException(status_code=404, detail="Booking not found")
#     if db_booking.start_time < datetime.now():
#         raise HTTPException(
#             status_code=400, detail="Cannot update past bookings")

#     room_id = booking.room or db_booking.room_id
#     email = booking.email or db_booking.email
#     start_time = booking.start_time or db_booking.start_time
#     end_time = booking.end_time or db_booking.end_time

#     room = crud.get_room(db, room_id)
#     if not room:
#         raise HTTPException(status_code=400, detail="Invalid room id")
#     room_type = crud.get_room_type(db, room.type_id)

#     hourly_rate = room_type.hourly_rate
#     duration = (end_time - start_time).total_seconds() / 3600
#     price = hourly_rate * duration

#     if start_time != db_booking.start_time or end_time != db_booking.end_time or room_id != db_booking.room_id:
#         overlapping_bookings = crud.get_overlapping_bookings(
#             db, room_id, start_time, end_time, booking_id
#         )
#         if overlapping_bookings:
#             raise HTTPException(
#                 status_code=409, detail="The selected room is not available during the requested time period")

#     db_booking.room_id = room_id
#     db_booking.email = email
#     db_booking.start_time = start_time
#     db_booking.end_time = end_time
#     db_booking.price = price

#     db.commit()
#     db.refresh(db_booking)

#     return {"message": "Booking updated successfully", "booking": db_booking}
