"""
=======================================================
Name        : lab9_exe_C.py
Assignment  : Lab 9, Exercise C
Author(s)   : Sarah Elmahdy, Suprova Hoque
Submission  : March 18, 2024
Description : Fetch data by Python.
"""

import requests
import json

def fetch_product_data(url):
    try:
        response = requests.get(url)
        # Rasies an error for bad responses
        response.raise_for_status()
        # The JSON structuer includes a 'products' key
        return response.json()['products']
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None

def list_all_products(products):
    # Check if products is not None and is a list
    if products and isinstance(products, list):
        for product in products:
            # Since each product is a dictionary and has a 'title' key
            if 'title' in product:
                print(product['title'])
    else:
        print("No products to display.")

def search_product(products, name):
    # Check if products is not None and is a list
    if products and isinstance(products, list):
        for product in products:
            # Since each product is a dictionary and has a 'name' key
            if 'title' in product and product['title'] == name:
                # Pretty print the product details with 4 indents
                print(json.dumps(product, indent=4))
                return
    print("Product not found.")

def main():
    products_url = 'https://dummyjson.com/products'
    products = fetch_product_data(products_url)

    if products:
        while True:
            choice = input("Choose an option:\n1. List all products \n2. Search for a product \n3. Exit\n> ")
            if choice == '1':
                list_all_products(products)
            elif choice == '2':
                name = input("Enter a product name: ")
                search_product(products, name)
            elif choice == '3':
                break
            else:
                print("Invalid choice. Please try again.")
    else:
        print("Failed to fetch product data.")

if __name__ == "__main__":
    main()