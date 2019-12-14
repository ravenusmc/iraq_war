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

    def sum_Of_Deaths(self, column):
        Deaths = {}
        year = 2005
        while year <= 2009:
            year = str(int(year))
            first_time_stamp = pd.to_datetime(year + '-01-01')
            last_time_stamp = pd.to_datetime(year + '-12-31')
            data_by_year = self.data.loc[(self.data['Date and time'] >= first_time_stamp) & (self.data['Date and time'] <= last_time_stamp), :]
            sum_deaths = int(data_by_year[column].sum())
            Deaths[year] = sum_deaths
            year = int(year) + 1
        return Deaths

    def deaths_by_region(self, year):
        print(year)
        regions = ['MND-BAGHDAD', 'MNF-W', 'MND-N', 'MND-SE', 'MND-C', 'MND-NE', 'MND-S']
        regions_and_deaths = {}

    def sum_Of_Iraqi_Force_Deaths(self):
            Iraqi_Force_Deaths = {}
            year = 2005
            while year <= 2009:
                year = str(int(year))
                first_time_stamp = pd.to_datetime(year + '-01-01')
                last_time_stamp = pd.to_datetime(year + '-12-31')
                data_by_year = self.data.loc[(self.data['Date and time'] >= first_time_stamp) & (self.data['Date and time'] <= last_time_stamp), :]
                sum_deaths = int(data_by_year['Iraq forces killed'].sum())
                Iraqi_Force_Deaths[year] = sum_deaths
                year = int(year) + 1
            return coalition_Deaths

    def allDeathsByDate(self, first_date, last_date, death_Selector):
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
        columns = ['TimeFrame']
        for value in death_Selector:
            columns.append(value)
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
                list_of_columns = death_Selector
                for column in list_of_columns:
                    deaths = month_data[column].sum()
                    rows.append(int(deaths))
                coalitionDeathData.append(rows)
                start_month += 1
            start_month = 1
            start_year += 1
        return coalitionDeathData

    def coalitionDeathsByDate(self, first_date, last_date, type, death_Selector):
        #Converting what the user entered to proper datetime format
        first_time_stamp = pd.to_datetime(first_date)
        last_time_stamp = pd.to_datetime(last_date)

        start_month = int(first_date[0])
        start_year = int(first_date[4:8])
        end_month = int(last_date[0])
        end_year = int(last_date[4:8])

        # pulling out the data for the type and attack type
        self.data = self.data[(self.data['Type'] == type)]

        # Seperating out the date data
        self.data['Month'] = self.data['Date and time'].dt.month
        self.data['Year'] = self.data['Date and time'].dt.year
        self.data = self.data.loc[(self.data['Date and time'] >= first_time_stamp) & (self.data['Date and time'] <= last_time_stamp), :]

        death_Data = []
        columns = ['TimeFrame']
        for value in death_Selector:
            columns.append(value)
        death_Data.append(columns)

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
                list_of_columns = death_Selector
                for column in list_of_columns:
                    deaths = month_data[column].sum()
                    rows.append(int(deaths))
                death_Data.append(rows)
                start_month += 1
            start_month = 1
            start_year += 1

        return death_Data

# test = Data()
# test.deaths_by_region()
