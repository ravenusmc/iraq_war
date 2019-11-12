#This file contains the code that will handle working with the data to build
#the graphs and whatever else is needed.

#importing supporting libraries
import numpy as np
import pandas as pd

class Data():

    def __init__(self):
        self.data = pd.read_csv('./data/Deaths_only.csv')

    def coalitionDeathsByDate(self, first_date, last_date):
        #converting Date adn time column from an object to a datetime column
        self.data['Date and time'] = pd.to_datetime(self.data['Date and time'], infer_datetime_format=True)
        #Converting what the user entered to proper format
        first_time_stamp = pd.to_datetime(first_date)
        last_time_stamp = pd.to_datetime(last_date)
        print(last_time_stamp)
        self.data = self.data.loc[(self.data['Date and time'] >= first_time_stamp) & (self.data['Date and time'] <= last_time_stamp), :]
        print(self.data)

# test = Data()
# test.
