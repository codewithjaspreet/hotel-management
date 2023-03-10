from sqlalchemy import Column, ForeignKey, Integer, String,Float
from sqlalchemy import Column, DateTime
from sqlalchemy.orm import relationship
 
from database import Base 
class User(Base):

    __tablename__ = "users"


    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)

    bookings = relationship("Booking", back_populates="owner")



class Booking(Base):

    __tablename__ = "bookings"


    id = Column(Integer, primary_key=True, index=True)

    begin_time = Column(DateTime, index=True)    

    end_time = Column(DateTime, index=True)

    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="bookings")


class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True, index=True)
    room_type = Column(String(50))
    price_per_hour = Column(Float)
