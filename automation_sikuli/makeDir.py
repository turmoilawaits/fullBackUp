'''
Created on Sep 10, 2014

@author: anksriv2
'''

"""
import os,datetime
import pygame

def createDirectory(list,filename):
    myDir = os.path.join(os.getcwd(),datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S'))    
    os.makedirs(myDir)
    
    with open(os.path.join(myDir,'C:\\Users\\anksriv2\\Desktop\\Learning\\test\\logFile'),'w') as d:        
        d.writelines(list)
            
            
        
createDirectory()   

"""


class Restaurant(object):
    bankrupt = False
    
    def open_branch(self):
        if not self.bankrupt:
            print "Branch opened "
            
x = Restaurant()
x.open_branch()
