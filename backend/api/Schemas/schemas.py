import pydantic

import _datetime as _datetime


class _Booking(pydantic.BaseModel):
    room_id: int
    user_email: str
    start_time: _datetime.datetime
    end_time: _datetime.datetime
    total_price: float

    class Config:
        orm_mode = True


class _BookingBase(pydantic.BaseModel):
    room_id: int
