'''
Created on Jul 4, 2014

@author: anksriv2
'''
from server import server_login
from serializer import deserialize_session, serialize_session

session = server_login()
dsession = deserialize_session(serialize_session())

