'''
Created on Aug 20, 2014

@author: anksriv2
'''

import smtplib

server = smtplib.SMTP('smtp.gmail.com', 587)

#Next, log in to the server
server.login("ankit.812@gmail.com", "password")

#Send the mail
msg = "\nHello!" # The /n separates the message from the headers
server.sendmail("ankit.812@gmail.com", "target@example.com", msg)

