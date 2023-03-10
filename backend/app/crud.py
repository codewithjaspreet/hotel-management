from sqlalchemy.orm import Session

import models, schemas

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()



def get_user_by_roomNo(db: Session, id: int):
    return db.query(models.User).filter(models.User.id == id).first()




def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()



def create_user(db:Session,user: schemas.UserCreate):

    db_user = models.User(email =  user.email, roomNo = user.roomNo)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_bookings(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Booking).offset(skip).limit(limit).all()



def create_user_booking(db: Session, booking: schemas.BookingCreate, user_id: int):
    db_booking = models.Booking(**booking.dict(), owner_id=user_id)
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking