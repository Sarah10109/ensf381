# from flask import Flask, request, jsonify, send_from_directory
# from flask_cors import CORS # Import CORS
# import json
# import os


from flask import Flask, request, jsonify
from flask_cors import CORS # Import CORS

app = Flask(__name__)
CORS(app)

# List of user objects with username, password, and email
users = [
    {"username": "", "password": "", "email": ""}
]

@app.route('/login', methods=['POST'])
def authenticate_user():
    data = request.get_json()
    entered_username = data.get('username')
    entered_password = data.get('password')

    # Check if the entered username and password match any user in the list
    for user in users:
        if user['username'] == entered_username and user['password'] == entered_password:
            return jsonify({"authenticated": True, "message": "Login successful"})
    return jsonify({"authenticated": False, "message": "Login failed. Incorrect username or password"})


@app.route('/signup', methods=['POST'])
def authenticate_signup():
    signup_data = request.get_json()
    username_created = signup_data.get('username')
    password_created = signup_data.get('password')
    email_created = signup_data.get('email')

    # Check if the entered username matches any user in the list
    for user in users:
        if user['username'] == username_created:
            return jsonify({"signupAuthenticated": False, "message": "Username already exists. Please choose a different username."})

    # If the username doesn't match any user in the list, append the new user details to the users list
    users.append({
        "username": username_created,
        "password": password_created,
        "email": email_created
    })
    return jsonify({"signupAuthenticated": True, "message": "Signup successful"})


@app.route('/')
def hello():
    return 'Hello, Flask World!'

if __name__ == '__main__':
    app.run(debug=True)
