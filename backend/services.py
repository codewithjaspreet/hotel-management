import sqlalchemy.orm as _orm

import models as _models
import schemas as _schemas
import database as _database


def create_database():

    return _database.Base.metadata.create_all(bind=_database.engine)


def getdb():
    db = _database.SessionLocal()

    try:

        yield db
    finally:
        db.close()


def create_booking(db: _orm.Session, booking: _schemas._BookingBase):

    db_booking = _models.Booking(

        room_id  = booking.room_id,
        user_email = booking.user_email,

        start_time = booking.start_time,
        end_time = booking.end_time,
        total_price = booking.total_price


    );


    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    
    return db_booking


def get_user_by_roomNo(db: _orm.Session, roomNo: int):
    return db.query(_models.Booking).filter(_models.Booking.room_id == roomNo).first()
