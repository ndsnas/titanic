#!/usr/bin/env python
from flask import Flask, request
import pickle

app = Flask(__name__)
model = pickle.load(open('saved_model', 'rb'))


@app.route('/api/prediction', methods=['POST', 'GET'])
def index():
    req_data = request.json
    # print(req_data["age"])
    prediction = model.predict(
        [[req_data['age'], req_data['fare'], req_data['family_members'], req_data['q'], req_data['s'], req_data['male'], req_data['2'], req_data['3']]])[0]
    if prediction == 0:
        return 'died'
    else:
        return 'survived'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
