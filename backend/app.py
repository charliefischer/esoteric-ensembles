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
    message_data = request.json 

    conn = sqlite3.connect(DATABASE_FILE)

    cursor = conn.cursor()

    cursor.execute("INSERT INTO messages (sender_id, content) VALUES (?, ?)",
                   (message_data['sender_id'], message_data['content']))

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Message created successfully!"}), 201

@app.route('/like', methods=['POST'])
def add_like():
    like_data = request.json 

    conn = sqlite3.connect(DATABASE_LIKES_FILE)

    cursor = conn.cursor()

    cursor.execute("INSERT INTO song_likes (track_id, status) VALUES (?, ?)",
                   (like_data['track_id'], like_data['status']))

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Like created successfully!"}), 201

    
@app.route('/likes', methods=['GET'])
def get_likes():
    conn = sqlite3.connect(DATABASE_LIKES_FILE)

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM song_likes")

    users = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
