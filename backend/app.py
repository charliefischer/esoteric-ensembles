from flask import Flask, jsonify, send_from_directory, request
import sqlite3
import os

app = Flask(__name__)
DATABASE_FILE = 'chat_forum.db'
DATABASE_LIKES_FILE = 'song_likes.db'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path != "" and os.path.exists("frontend/build/" + path):
        return send_from_directory('frontend/build', path)
    else:
        return send_from_directory('frontend/build', 'index.html')

@app.route('/messages', methods=['GET'])
def get_messages():
    conn = sqlite3.connect(DATABASE_FILE)

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM messages")

    users = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(users)

@app.route('/messages', methods=['POST'])
def create_message():
    # Get the message data from the request
    message_data = request.json  # Assuming the request contains JSON data

    # Connect to the database
    conn = sqlite3.connect(DATABASE_FILE)

    # Create a cursor
    cursor = conn.cursor()

    # Example: INSERT a new message into the 'messages' table
    cursor.execute("INSERT INTO messages (sender_id, content) VALUES (?, ?)",
                   (message_data['sender_id'], message_data['content']))

    # Commit the changes to the database
    conn.commit()

    # Close the cursor and the database connection
    cursor.close()
    conn.close()

    # Return a success response
    return jsonify({"message": "Message created successfully!"}), 201

def get_likes():
    False

if __name__ == '__main__':
    app.run(debug=True)
