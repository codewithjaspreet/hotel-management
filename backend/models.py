import sqlalchemy as _sql

import sqlalchemy.orm as _orm

import database as _database

from sqlalchemy import UniqueConstraint

class User(_database.Base):
    __tablename__ = 'users'


    id = _sql.Column(_sql.Integer, primary_key=True , index=True)

    room_number = _sql.Column(_sql.Integer, unique=True, nullable=False)

    room_type = _sql.Column(_sql.String, nullable=False)

    room_price = _sql.Column(_sql.Float, nullable=False)

    bookings = _orm.relationship('Booking', back_populates='room')





class Booking(_database.Base):

    __tablename__ = 'bookings'


    id = _sql.Column(_sql.Integer, primary_key=True)
    room_id = _sql.Column(_sql.Integer, _sql.ForeignKey('rooms.id'))

    user_email = _sql.Column(_sql.String, nullable=False)
    start_time = _sql.Column(_sql.DateTime, nullable=False)
    end_time = _sql.Column(_sql.DateTime, nullable=False)
    total_price = _sql.Column(_sql.Float, nullable=False)


    room = _orm.relationship('User', back_populates='bookings')


__table_args__ = (UniqueConstraint('room_id', 'start_time',
                  'end_time', name='no_overlapping_bookings'),)



