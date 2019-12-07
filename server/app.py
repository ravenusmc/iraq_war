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
    coalitionDeaths = data.sum_Of_Coalition_Deaths()
    return jsonify(coalitionDeaths)

if __name__ == '__main__':
    app.run()
