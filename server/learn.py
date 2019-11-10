#The code in this file is only to play around with the CSV file to
#learn aspects about it that I'll need for this project.

#importing supporting libraries
import numpy as np
import pandas as pd

class Learn():

    def __init__(self):
        self.data = pd.read_csv('./data/Deaths_only.csv')

    def showData(self):
        print(self.data.head())

    def showUniqueElements(self):
        print(self.data['Attack on'].unique())

learn = Learn()
learn.showUniqueElements()
