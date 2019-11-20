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
# of deaths between two years.
@app.route('/CoalitionDeathData', methods=['GET', 'POST'])
def CoalitionDeathData():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        first_date = post_data['startDate']
        last_date = post_data['endDate']
        death_Selector = post_data['deathSelector']
        coalitionDeathData = data.coalitionDeathsByDate(first_date, last_date, death_Selector)
        return jsonify(coalitionDeathData)

if __name__ == '__main__':
    app.run()
