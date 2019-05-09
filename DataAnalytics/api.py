from flask import Flask, request, jsonify
import logging
import os
import json
from pprint import pprint

with open('data.json') as f:
    data = json.load(f)

with open('data2.json') as f:
    secondData = json.load(f)

with open('data3.json') as f:
    thirdData = json.load(f)

with open('data4.json') as f:
    fourthData = json.load(f)


app = Flask(__name__)

@app.route('/', methods=['GET'])
def test():
    return jsonify({"Message" : "It works"})

@app.route('/car/<string:vin>', methods=['GET'])
def getCar(vin):
    if vin != "123456":
        return jsonify({vin: "Does not exist in Database"})
    else:
        return jsonify(
            data
        )

@app.route('/history/<string:vin>', methods=['GET'])
def getHistory(vin):
    if vin != "123456":
        return jsonify({vin: "Does not exist in Database"})
    else:
        return jsonify(
            secondData
        )

@app.route('/component/<string:vin>', methods=['GET'])
def getComponent(vin):
    if vin != "123456":
        return jsonify({vin: "Does not exist in Database"})
    else:
        return jsonify(
            thirdData
        )

@app.route('/carValue/<string:vin>', methods=['GET'])
def getValue(vin):
    if vin != "123456":
        return jsonify({vin: "Does not exist in Database"})
    else:
        return jsonify(
            fourthData
        )

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
