'''
Created on Sep 9, 2014

@author: anksriv2
'''
###the self variable represents the instance of the object itself. 
#Most object-oriented languages pass this as a hidden parameter to the methods defined on an object; Python does not.
##You have to declare it explicitly.

"""
class A(object):
    def __init__(self):  
        self.x = 'Hello'

    def method_a(self, foo):
        print self.x + ' ' + foo
        
a = A()

a.method_a("Sailor!")        

"""
import csv
from lxml import etree



out = raw_input("Name for output file:  ")
if out.strip() is "":
  out = "C:\\Users\\anksriv2\\UcsFault_new.csv"

out_data = []


parser = etree.XMLParser(recover=True, remove_blank_text=True)

# xml on disk...could also pass etree.parse a URL
file_name = "C:\\Users\\anksriv2\\UcsFaults_ElCapMR1.xml"

# use lxml to read and parse xml
root = etree.parse(file_name, parser)

# element names with data to keep
tag_list = [ "code", "message", "severity", "type", "cause" ]

# add field names by copying tag_list
out_data.append(tag_list[:])

def get_poi_info(p):        
    info = []
        
    for tag in tag_list:    
    node = p.find(tag)
    if node is not None and node.text:      
        info.append(round(float(node.text), 5))
      else:
        info.append(node.text.encode("utf-8"))
        # info.append(node.text.encode("ascii", "ignore"))
    else:
      info.append("")
  return info


print "nreading xml..."

# get all <poi> elements
pois = root.findall(".//fault")
for p in pois:
  #poi_info = get_poi_info(p)
  # print "%s" % (poiInfo)
  if poi_info:
    out_data.append(poi_info)

print "finished xml, writing file..."

out_file  = open(out, "wb")
csv_writer = csv.writer(out_file, quoting=csv.QUOTE_MINIMAL)
for row in out_data:
  csv_writer.writerow(row)
 
out_file.close()

print "wrote %sn" % out
