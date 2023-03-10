from fastapi import Depends , FastAPI , HTTPException 

import crud , models , schemas
from sqlalchemy.orm import Session
from database import SessionLocal , engine

from models import Room


import random 

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


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
