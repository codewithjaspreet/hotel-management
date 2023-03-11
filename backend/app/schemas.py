from pydantic import BaseModel
import datetime as dt


class BookingBase(BaseModel):
    begin_time: dt.datetime
    end_time: dt.datetime


class BookingCreate(BookingBase):
    pass


class Booking(BookingBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    roomNo: int


class User(UserBase):
    id: int
    bookings: list[Booking] = []

    class Config:
        orm_mode = True
