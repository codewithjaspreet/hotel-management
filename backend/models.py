import sqlalchemy as _sql

import sqlalchemy.orm as _orm

import database as _database


class User(_database.Base):
    __tablename__ = "users"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    username = _sql.Column(_sql.String, unique=True, index=True)
    email = _sql.Column(_sql.String, unique=True, index=True)
    room_number = _sql.Column(_sql.Integer, unique=True, index=True)
    start_time = = _sql.Column(_sql.DateTime, unique=True, index=True)
    end_time = _sql.Column(_sql.DateTime, unique=True, index=True)

    
