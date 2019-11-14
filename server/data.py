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

        start_month = int(first_date[0])
        start_year = int(first_date[4:8])
        end_month = int(last_date[0])
        end_year = int(last_date[4:8])

        self.data['Month'] = self.data['Date and time'].dt.month
        self.data['Year'] = self.data['Date and time'].dt.year
        self.data = self.data.loc[(self.data['Date and time'] >= first_time_stamp) & (self.data['Date and time'] <= last_time_stamp), :]

        #Getting min year
        # min_year = self.data.Year.min()
        # #Getting Max year
        # max_year = self.data.Year.max()
        # number_of_years = max_year - min_year
        # #I need to get the min value for the month column
        # min_month = self.data.Month.min()
        # #I need to get the max value for the month column
        # max_month = self.data.Month.max()

        #while guess != name and pos < len(name):
        #These loops will get the deaths by the year and then by the month
        # while min_year <= max_year:
        #     data = self.data
        #     data =  data.loc[(data['Year'] == min_year)]
        #     while min_month <= max_month:
        #         month_data = data
        #         month_data =  month_data.loc[(month_data['Month'] == min_month)]
        #         monthly_deaths = month_data['Coalition forces killed'].sum()
        #         min_month += 1
        #     if number_of_years > 0:
        #
        #     min_year += 1


# test = Data()
# test.
