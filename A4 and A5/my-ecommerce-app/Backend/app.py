# from flask import Flask, request, jsonify, send_from_directory
# from flask_cors import CORS # Import CORS
import json
# import os


from flask import Flask, request, jsonify
from flask_cors import CORS # Import CORS

app = Flask(__name__)
CORS(app)

# List of user objects with username, password, and email
users = [
    {"username": "", "password": "", "email": ""}
]

# List of product items
products = [
 {
 "id": 1,
 "name": "Product 1",
 "description": "Description for Product 1",
 "price": 10.99,
 "image": 'images/product1.png'
 },
 {
 "id": 2,
 "name": "Product 2",
 "description": "Description for Product 2",
 "price": 20.99,
 "image": 'images/product2.jpg'
 },
 {
 "id": 3,
 "name": "Product 3",
 "description": "Description for Product 3",
 "price": 10.99,
 "image": 'images/product3.jpg'
 },
 {
 "id": 4,
 "name": "Product 4",
 "description": "Description for Product 4",
 "price": 10.99,
 "image": 'images/product4.jpg'
 },
 {
 "id": 5,
 "name": "Product 5",
 "description": "Description for Product 5",
 "price": 10.99,
 "image": 'images/product5.jpg'
 },
 {
 "id": 6,
 "name": "Product 6",
 "description": "Description for Product 6",
 "price": 10.99,
 "image": 'images/product6.jpg'
 },
 {
 "id": 7,
 "name": "Product 7",
 "description": "Description for Product 7",
 "price": 10.99,
 "image": 'images/product7.jpg'
 },
 {
 "id": 8,
 "name": "Product 8",
 "description": "Description for Product 8",
 "price": 10.99,
 "image": 'images/product8.jpg'
 },
 {
 "id": 9,
 "name": "Product 9",
 "description": "Description for Product 9",
 "price": 10.99,
 "image": 'images/product9.jpg'
 },
 {
 "id": 10,
 "name": "Product 10",
 "description": "Description for Product 10",
 "price": 10.99,
 "image": 'images/product10.jpg'
 }
]

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)


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
