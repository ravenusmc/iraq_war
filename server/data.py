#This file contains the code that will handle working with the data to build
#the graphs and whatever else is needed.

#importing supporting libraries
import numpy as np
import pandas as pd
import datetime

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

        coalitionDeathData = []
        columns = ['TimeFrame', 'Coalition Deaths', 'Iraqi Forces Killed', 'Civilians Killed', 'Enemy Killed']
        coalitionDeathData.append(columns)

        last_month = 12
        while start_year <= end_year:
            data = self.data
            data =  data.loc[(data['Year'] == start_year)]
            if start_year == end_year:
                last_month = end_month
            while start_month <= last_month:
                rows = []
                date_list = []
                month_data = data
                month_data =  month_data.loc[(month_data['Month'] == start_month)]
                date_list.append(start_year)
                date = datetime.datetime(start_year, start_month, 1)
                test = date.strftime("%b %Y")
                rows.append(test)
                list_of_columns = ['Coalition forces killed', 'Iraq forces killed', 'Civilian kia', 'Enemy kia']
                for column in list_of_columns:
                    deaths = month_data[column].sum()
                    rows.append(int(deaths))
                coalitionDeathData.append(rows)
                start_month += 1
            start_month = 1
            start_year += 1
        return coalitionDeathData


# test = Data()
