'''
Created on Jul 4, 2014

@author: anksriv2
'''

import requests as req

URL_ROOT = 'http://10.65.183.5:80'

def get_logged_in_session(name):
    session = req.session(auth=('user','pass'))
    
    login_response = session.post(url, data)