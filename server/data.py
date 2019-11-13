#This file contains the code that will handle working with the data to build
#the graphs and whatever else is needed.

#importing supporting libraries
import numpy as np
import pandas as pd

class Data():

    def __init__(self):
        self.data = pd.read_csv('./data/Deaths_only.csv')
        self.data['Date and time'] = pd.to_datetime(self.data['Date and time'], infer_datetime_format=True)

    def coalitionDeathsByDate(self, first_date, last_date):
        #Converting what the user entered to proper datetime format
        first_time_stamp = pd.to_datetime(first_date)
        last_time_stamp = pd.to_datetime(last_date)
        self.data['Month'] = self.data['Date and time'].dt.month
        self.data = self.data.loc[(self.data['Date and time'] >= first_time_stamp) & (self.data['Date and time'] <= last_time_stamp), :]
        #print(self.data)
        #I need to get the min value for the month column
        min_month = self.data.Month.min()
        #I need to get the max value for the month column
        max_month = self.data.Month.max()

# test = Data()
# test.
