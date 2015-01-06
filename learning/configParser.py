'''
Created on Sep 9, 2014

@author: anksriv2
'''
import ConfigParser
import datetime
import os

#import sys

#myPath = 'C:\\Users\\anksriv2\\Desktop\\Learning\\test\\'
#myPath = os.path.dirname(getBundlePath())
#if not myPath in sys.path: sys.path.append(myPath)



class util(object):
        
    def __init__(self):
        
        data = ConfigParser.ConfigParser()
        data.read('C:\\Users\\anksriv2\\Desktop\\Learning\\test\\testdata.txt')
        
        config = ConfigParser.ConfigParser()
        config.read('C:\\Users\\anksriv2\\Desktop\\Learning\\test\\config.txt')
        
        self.startOfTimer = config.get("vars", "startTimer")
        self.endOfTimer = config.get("vars", "endTimer")
        
        self.termsArr = data.get("terms", "term").split(",")
        self.termsUser = data.get("terms", "users").split(",")
        self.termPass = data.get("terms","passwords").split(",")
        
        self.dateFormatString = config.get("vars","dateFormat")
        
        #self.folder = 'C:\\Users\\anksriv2\\Desktop\\Learning\\test\\' + timeStamp
        #myPath = 'C:\\Users\\anksriv2\\Desktop\\Learning\\test\\'
        
        
    def startTimer(self):
        self.startOfTimer = datetime.datetime.now()
        
    def endTimer(self):
        self.endOfTimer = datetime.datetime.now()
        
    def timeDiff(self):
        return str(self.endOfTimer - self.startOfTimer)
    
    def timeStamp(self):
        return datetime.datetime.now().strftime(self.dateFormatString)
    
    def createDirectory(self,path):
        os.makedirs(path)
        
        
            
########## Test methods to check functionality of individual module ###############
               
        
    def testMethod1(self):
        for i in self.termsUser:
            print i
        for k in self.termsArr:
            print k
        for j in self.termPass:
            print j        
    
    def testMethod2(self):
        return str(self.endOfTimer - self.startOfTimer)
                
        
obj = util()

obj.testMethod1()
#obj.timeDiff()





    



    
        