'''
Created on Jul 4, 2014

@author: anksriv2
'''
import pickle as pk


def serialize_session(session):
    return pk.dumps(session)


def deserialize_session(session):
    return pk.loads(data)
