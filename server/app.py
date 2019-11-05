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
@app.route('/one', methods=['GET', 'POST'])
def deathData():
    if request.method == 'POST':
        data = Data()
        return jsonify('hi')

if __name__ == '__main__':
    app.run()
