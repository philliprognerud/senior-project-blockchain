import simplejson as simplejson
import pandas as pd
import numpy as np
import linearregression as lr
from matplotlib import pyplot as plt
from datetime import datetime

def SanitizeData():
    data = []
    df = pd.read_json("temp1.json",lines=True, orient='columns')
    vehicleSpeedDF = pd.DataFrame(columns=['timestamp','vehicle_speed']);
    accPedDF = pd.DataFrame(columns=['timestamp','accelerator_pedal_position']);
    torqueTransDF = pd.DataFrame(columns=['timestamp','torque_at_transmission']);
    engineSpeedDF = pd.DataFrame(columns=['timestamp','engine_speed']);
    fuelRestartDF = pd.DataFrame(columns=['timestamp','fuel_consumed_since_restart']);
    odometerDF = pd.DataFrame(columns=['timestamp','odometer']);
    fuelLevelDF = pd.DataFrame(columns=['timestamp','fuel_level']);
    longitudeDF = pd.DataFrame(columns=['timestamp','longitude']);
    latitudeDF = pd.DataFrame(columns=['timestamp','latitude']);
    brakeDF = pd.DataFrame(columns=['timestamp','brake_pedal_status']);
    engineSpeedDF = pd.DataFrame(columns=['timestamp','engine_speed']);
    transmissionGearDF = pd.DataFrame(columns=['timestamp','transmission_gear_position']);
    for index, element in df.iterrows():
       if(element['name'] == 'vehicle_speed'):
            vehicleSpeedDF = vehicleSpeedDF.append({'timestamp':element['timestamp'],'vehicle_speed':element['value']}, ignore_index=True)
       if(element['name'] == 'accelerator_pedal_position'):
            accPedDF = accPedDF.append({'timestamp':element['timestamp'],'accelerator_pedal_position':element['value']}, ignore_index=True)
       if(element['name'] == 'torque_at_transmission'):
            torqueTransDF = torqueTransDF.append({'timestamp':element['timestamp'],'torque_at_transmission':element['value']}, ignore_index=True)
       if(element['name'] == 'engine_speed'):
            engineSpeedDF = engineSpeedDF.append({'timestamp':element['timestamp'],'engine_speed':element['value']}, ignore_index=True)
       if(element['name'] == 'fuel_consumed_since_restart'):
            fuelRestartDF = fuelRestartDF.append({'timestamp':element['timestamp'],'fuel_consumed_since_restart':element['value']}, ignore_index=True)
       if(element['name'] == 'odometer'):
            odometerDF = odometerDF.append({'timestamp':element['timestamp'],'odometer':element['value']}, ignore_index=True)
       if(element['name'] == 'fuel_level'):
            fuelLevelDF = fuelLevelDF.append({'timestamp':element['timestamp'],'fuel_level':element['value']}, ignore_index=True)
       if(element['name'] == 'longitude'):
            longitudeDF = longitudeDF.append({'timestamp':element['timestamp'],'longitude':element['value']}, ignore_index=True)
       if(element['name'] == 'latitude'):
            latitudeDF = latitudeDF.append({'timestamp':element['timestamp'],'latitude':element['value']}, ignore_index=True)
       if(element['name'] == 'brake_pedal_status'):
             brakeDF = brakeDF.append({'timestamp':element['timestamp'],'brake_pedal_status':element['value']}, ignore_index=True)
       if(element['name'] == 'engine_speed'):
             engineSpeedDF = engineSpeedDF.append({'timestamp':element['timestamp'],'engine_speed':element['value']}, ignore_index=True)
       if(element['name'] == 'transmission_gear_position'):
             transmissionGearDF = transmissionGearDF.append({'timestamp':element['timestamp'],'transmission_gear_position':element['value']}, ignore_index=True)

    merge1 = pd.merge(vehicleSpeedDF, accPedDF, how="outer")
    merge2 = pd.merge(merge1, torqueTransDF, how="outer")
    merge3 = pd.merge(merge2, engineSpeedDF, how="outer")
    merge4 = pd.merge(merge3, fuelRestartDF, how="outer")
    merge5 = pd.merge(merge4, odometerDF, how="outer")
    merge6 = pd.merge(merge5, fuelLevelDF, how="outer")
    merge7 = pd.merge(merge6, longitudeDF, how="outer")
    merge8 = pd.merge(merge7, latitudeDF, how="outer")
    merge9 = pd.merge(merge8, brakeDF, how="outer")
    merge10 = pd.merge(merge8, engineSpeedDF, how="outer")
    merge11= pd.merge(merge10, transmissionGearDF, how="outer")
    merge11.to_csv('trip.csv', index=False)

df = pd.read_csv("trip.csv")
def getAverage(nameAverage):
    val = df[[nameAverage]]
    val = np.mean(val)
    return val[0]

def getRange(nameRange):
    val = df[[nameRange]]
    max = np.amax(val)
    min = np.amin(val)
    val = min - max
    return val[0]

def getTripDistance():
    return getRange('odometer')

def getAverageTripSpeed():
    return convertMilesPerHour(getAverage('vehicle_speed'))

def getStartDate():
    val = df['timestamp'].iloc[0].split(' ')
    return val[0]

def getStartLat():
    latitude = df[['latitude']]
    return latitude.iloc[0]

def getStartLong():
    longitude = df[['longitude']]
    return longitude.iloc[0]

def getEndLat():
    latitude = df[['latitude']]
    return latitude.iloc[len(df)]

def getEndLong():
    longitude = df[['longitude']]
    return longitude.iloc[len(df)]

def epochSubtractor(time1, time2):
    fmt = '%Y-%m-%d %H:%M:%S.%f'
    d1 = datetime.datetime.strptime('2010-01-01 17:31:22.10', fmt)
    d2 = datetime.datetime.strptime('2010-01-03 20:15:14.10', fmt)
    diff = d2 -d1

    print(diff)
    diff_seconds = (diff.days * 24 * 60 * 60) + (diff.seconds)
    print(diff_seconds)

def convertLitersToGallons(amt):
    return amt *0.264172

def getFuelConsumption(gallons):
    '''Query for gas price in for current date'''
    gasPrice = 3.91
    return gallons * gasPrice;

def getFuelSinceRestart():
    arr = df[['fuel_consumed_since_restart']]
    val = convertLitersToGallons(np.max(arr))
    return val[0]
    #return convertLitersToGallons(arr[len(arr) - 1])


def getBatteryPercentage(list, wattage):
    for element in list:
        element = element/wattage

    data = {
        "Usage":{
            "AC": list[0],
            "Heater": list[1],
            "Lights": list[2],
            "Sound System": list[3]
        },    }

'''Unsanitized Trip Dataset'''
def getCarUsage():
    df = pd.read_json("temp.json",lines=True, orient='columns')
    accelerationCount = 0;
    rollingCount = 0;
    brakesCount = 0;

    for element in df.iterrows():
        if(element['name'] != null):
            if(element['name'] == 'accelerator_pedal_position'):
                accelerationCount = accelerationCount + 1;
            else:
                brakesCount = brakesCount + 1;
        else:
            rollingCount = rollingCount + 1
    data = {
        "Braking": (brakesCount/len(df)),
        "Rolling": (brakesCount/len(df)),
        "Accelerating": (brakesCount/len(df))
    }

def convertMilesPerHour(km):
    return km * 62137

def getMPG(distance,fuelConsumed):
    return distance/fuelConsumed


def componentCheck(nameX,nameY):
    x = df[[nameX]]
    y = df[[nameY]]
    lr.computeLinearRegression(x,y)
