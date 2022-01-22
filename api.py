
from flask import Flask, request 
from flask_cors import CORS 

from repository import connect_to_database, create_user


app = Flask("UserManagementAPI")
CORS(app)

database_path = "C:\Users\enesc\OneDrive\Desktop\GitHub\ProjectOnlineShop_web\database\basic_users.db"

@app.route("/api/v1/users", methods=["POST"])
def users(): 
    body = request.json

    if body["password"] != body["passwordRepeat"]:
        error = {
            "error": "Passwords don't match."
        }
        return error, 400

    try:    
        user_details = [
            body["firstName"],
            body["middleName"],
            body["lastName"],
            body["type"],
            body["gender"],
            body["countryCode"],
            body["phone"],
            body["adress"],
            body["email"],
            body["password"],
            body["passwordRepeat"]
        ]

        
        conn = connect_to_database(database_path)
        
        
        create_user(conn, user_details)
        conn.close()

        return "", 204
    except Exception as e:
        error = {
            "error": f"--Failed to create user. Message: {e}"
        }
        return error, 500


app.run(debug=True, port=3010)