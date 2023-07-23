from flask import Flask, jsonify, send_from_directory
import sqlite3
import os

app = Flask(__name__)
DATABASE_FILE = 'chat_forum.db'  # Replace 'your_database.db' with the path to your SQLite database file

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path != "" and os.path.exists("frontend/build/" + path):
        return send_from_directory('frontend/build', path)
    else:
        return send_from_directory('frontend/build', 'index.html')

@app.route('/messages', methods=['GET'])
def get_messages():
    # Connect to the database
    conn = sqlite3.connect(DATABASE_FILE)

    # Create a cursor
    cursor = conn.cursor()

    # Example: SELECT all users from the 'users' table
    cursor.execute("SELECT * FROM messages")

    # Fetch the results
    users = cursor.fetchall()

    # Close the cursor and the database connection
    cursor.close()
    conn.close()

    # Convert the data to JSON and return it as the API response
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
