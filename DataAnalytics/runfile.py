import loadJSON as ld
import pandas as pd
import numpy as np
import simplejson as simplejson
import Monthly as mt
import linearregression as lr
from matplotlib import pyplot as plt
from datetime import datetime

udf = pd.read_csv("userData.csv")

#getStart date
startDate = ld.getStartDate()
startDate = datetime.strptime(startDate, '%Y-%m-%d')



#GetTripDistance
TripDistance = ld.getTripDistance()

#GetAverageTripSpeed
AverageTripSpeed = ld.getAverageTripSpeed()

#Get the fuel Used
FuelConsumed = ld.getFuelSinceRestart()

#Get Gas Cost
TripFuelCost = ld.getFuelConsumption(FuelConsumed)

#get MPG
MPG = ld.getMPG(TripDistance,TripFuelCost)


row = {'timestamp': startDate, 'tripDistance': TripDistance, 'AverageTripSpeed': AverageTripSpeed, 'FuelConsumed': FuelConsumed, 'TripFuelCost': TripFuelCost, 'MPG': MPG }
udf = udf.append(row, ignore_index=True)
udf.to_csv('userData.csv', index=False)
mt.loadFile()
mt.getMonthYear()
ld.componentCheck('transmission_gear_position','accelerator_pedal_position')
ld.componentCheck('engine_speed','accelerator_pedal_position')
ld.componentCheck('brake_pedal_status','vehicle_speed')
