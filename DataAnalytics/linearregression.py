import pandas as pd
import numpy as np
import simplejson as simplejson
from matplotlib import pyplot as plt
from scipy.interpolate import *

def computeLinearRegression(X, y):
    df = pd.DataFrame()
    xmean = np.mean(X)
    ymean = np.mean(y)
    df['xycov'] = (df['X'] - xmean) * (df['y'] - ymean)
    df['xvar'] = (df['X'] - xmean)**2
    beta = df['xycov'].sum() / df['xvar'].sum()
    alpha = ymean - (beta * xmean)
    ypred = alpha + beta * X
    '''plt.figure(figsize=(12, 6))
    plt.plot(X, ypred)
    plt.plot(X, y, 'ro')
    plt.xlabel('X')
    plt.ylabel('y')
    plt.show()'''
    mean = computeCostBenefit(alpha, beta, X, y)
    return getPercentage(component, mean, mileage, componentLife)

def computeCostBenefit(alpha, beta, X, y):
    i = 0
    total = []
    while i < len(X):
        total[i] = y[i] - (alpha + beta * X[i]);
    return np.mean(total)

def getPercentage(component, mean, mileage, componentLife):
    if(component == "brakes"):
        if(componentLife):
            return (((brakeLife/40000 * .40)) + ((mileage * .5) + (mean * .55))/100)
        else:
            return (((mileage * .10) + (mean * .90))/100)
    if(component == "Engine"):
        if(componentLife):
            return ((((componentLife/150000) * .40)) + ((mileage * .20) + (mean * .40))/100)
        else:
            return (((mileage * .30) + (mean * .90))/100)
    if(component == "transmission"):
        if(componentLife):
            return ((((componentLife/175000) * .40)) + ((mileage * .20) + (mean * .40))/100)
        else:
            return (((mileage * .30) + (mean * .90))/100)



'''def removeOutliers(data, m=2):
    return data[abs(data - np.mean(data)) < m * np.std(data)]'''
