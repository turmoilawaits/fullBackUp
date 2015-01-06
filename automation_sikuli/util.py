'''
Created on Sep 10, 2014

@author: anksriv2
'''

import ConfigParser
import datetime
import os


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
        
        self.folder = 'C:\\Users\\anksriv2\\Desktop\\Learning\\test\\logs' + self.timeStamp()
        self.createDirectory(self.folder)
        self.csvPath = self.folder + "\\logFile.txt"
                            
        
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
    
    def mockMethod(self):
        theString = "Sample text to be writtem in the file "
        logFile = open(self.csvPath,'a')
        logFile.write(theString)
        print(theString)
        logFile.close()
           
        
    
            
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

#obj.testMethod1()
#obj.timeDiff()
obj.mockMethod()



    



    
        