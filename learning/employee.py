'''
Created on Aug 20, 2014

@author: anksriv2
'''

class Employee:
    
    def __init__(self,empName,empID,salary):
        
        self.empName = empName
        self.empID = empID
        self.salary = salary 
        
        
e1 = Employee("Ankit",677413,454545)
e2 = Employee("Lala",679413,4954545)


print(" Name:",e1.empName,"Code:", e1.empID,"Pay:", e1.salary)
print(" Name:",e2.empName,"Code:", e2.empID,"Pay:", e2.salary)
       

