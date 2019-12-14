from flask import Flask, jsonify, request
from flask_cors import CORS

#importing code that I wrote
from data import *

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)

# This route will deal with getting the user the data for the total number
# of deaths between two dates.
@app.route('/DeathData', methods=['GET', 'POST'])
def DeathData():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        first_date = post_data['startDate']
        last_date = post_data['endDate']
        death_Selector = post_data['deathSelector']
        all_Death_Data = data.allDeathsByDate(first_date, last_date, death_Selector)
        return jsonify(all_Death_Data)

# This route will get data for coalition forces kills between two dates.
@app.route('/CoalitionDeathData', methods=['GET', 'POST'])
def CoalitionDeathData():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        first_date = post_data['startDate']
        last_date = post_data['endDate']
        type = post_data['type']
        death_Selector = post_data['deathSelector']
        coalitionDeathData = data.coalitionDeathsByDate(first_date, last_date, type, death_Selector)
        return jsonify(coalitionDeathData)

# This route will get data for coalition deaths by year.
@app.route('/CoalitionDeathDataByYear', methods=['GET'])
def CoalitionDeathDataByYear():
    data = Data()
    all_deaths = []
    deaths = ["Coalition forces killed", "Iraq forces killed", "Civilian kia", "Enemy kia"]
    for death in deaths:
        deaths_returned = data.sum_Of_Deaths(death)
        all_deaths.append(deaths_returned)
    return jsonify(all_deaths)

# This route will get data for the coalition deaths by region
@app.route('/DeathsByRegion', methods=['Get', 'Post'])
def DeathsByRegion():
    data = Data()
    post_data = request.get_json()
    year = post_data['year']
    data.deaths_by_region(year)
    return jsonify('Hi')

if __name__ == '__main__':
    app.run()
