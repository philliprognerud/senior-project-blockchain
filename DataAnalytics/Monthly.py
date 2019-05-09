import loadJSON as ld
import pandas as pd
import numpy as np
import simplejson as simplejson
from matplotlib import pyplot as plt
from datetime import datetime

udf = pd.read_csv("userData.csv")
monthDF = pd.read_csv("monthData.csv")
yearDF = pd.read_csv("monthData.csv")
mdf = pd.DataFrame(columns=['MonthStamp','vehicle_speed','TripFuelCost','tripDistance']);
mtempdf = pd.DataFrame(columns=['timestamp','vehicle_speed','accelerator_pedal_position','torque_at_transmission','engine_speed','fuel_consumed_since_restart','odometer','fuel_level','AverageTripSpeed','FuelConsumed','TripFuelCost','tripDistance']);
ytempdf = pd.DataFrame(columns=['timestamp','vehicle_speed','accelerator_pedal_position','torque_at_transmission','engine_speed','fuel_consumed_since_restart','odometer','fuel_level','AverageTripSpeed','FuelConsumed','TripFuelCost','tripDistance']);
monthRow = pd.DataFrame(columns=['MonthStamp','TripFuelConsumed','TripFuelCost']);
yearRow = pd.DataFrame(columns=['YearStamp','tripDistance','AverageTripSpeed']);



def loadFile():
     for index, element in udf.iterrows():
         date = datetime.strptime(str(element['timestamp']), '%Y-%m-%d %H:%M:%S')
         if(date.month ==  datetime.today().month):
             mtempdf = mtempdf.append(element, ignore_index=True)

     for index, element in udf.iterrows():
         date = datetime.strptime(str(element['timestamp']), '%Y-%m-%d %H:%M:%S')
         if(date.year ==  datetime.today().year):
             ytempdf = ytempdf.append(element, ignore_index=True)

def getYearlyMilesDriven():
     total = 0;
     for index, element in ytempdf.iterrows():
         total = total + element[['tripDistance']]
     return total;

def getYearlyAverageSpeed():
     val = ydf[['vehicle_speed']]
     val = np.mean(val)
     return val;

def getMonthlyFuelCost():
     total = 0;
     for index, element in mtempdf.iterrows():
         total = total + ld.getFuelConsumption(ld.convertLitersToGallons(element['TripFuelCost']))
     return total;

def getMonthlyFuelConsumed():
     total = 0;
     for index, element in mtempdf.iterrows():
         total = total + ld.convertLitersToGallons(element['TripFuelCost'])
     return total;

def getMonthYear():
     loadFile()
     month = pd.DataFrame(columns=['MonthStamp','TripFuelConsumed','TripFuelCost'])
     year = pd.DataFrame(columns=['MonthStamp','tripDistance','AverageTripSpeed'])
     val1 = {'MonthStamp': datetime.today().month, 'TripFuelConsumed': getMonthlyFuelConsumed(), 'TripFuelCost': getMonthlyFuelCost}
     val2 = {'YearStamp': datetime.today().year, 'tripDistance': getYearlyMilesDriven(), 'AverageTripSpeed': getYearlyAverageSpeed}
     monthRowOne = monthRow.append(val1,ignore_index=True)
     yearRowOne = year.append(val2,ignore_index=True)
     monthRowOne.to_csv('monthData.csv', index=False)
     yearRowOne.to_csv('yearData.csv', index=False)
