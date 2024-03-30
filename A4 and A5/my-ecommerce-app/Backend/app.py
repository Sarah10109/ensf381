# from flask import Flask, request, jsonify, send_from_directory
# from flask_cors import CORS # Import CORS
# import json
# import os

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, Flask World!'

if __name__ == '__main__':
    app.run(debug=True)
