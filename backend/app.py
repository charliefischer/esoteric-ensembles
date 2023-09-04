from flask import Flask, jsonify, send_from_directory, request
import sqlite3
from dotenv import load_dotenv
import requests
import os

load_dotenv()

app = Flask(__name__)
DATABASE_FILE = "chat_forum.db"
DATABASE_LIKES_FILE = "song_likes.db"
DATABASE_USERS_FILE = "users.db"


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    if path != "" and os.path.exists("frontend/build/" + path):
        return send_from_directory("frontend/build", path)
    else:
        return send_from_directory("frontend/build", "index.html")


@app.route("/messages", methods=["GET"])
def get_messages():
    conn = sqlite3.connect(DATABASE_FILE)

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM messages")

    users = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(users)


@app.route("/messages", methods=["POST"])
def create_message():
    message_data = request.json

    conn = sqlite3.connect(DATABASE_FILE)

    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO messages (sender_id, content) VALUES (?, ?)",
        (message_data["sender_id"], message_data["content"]),
    )

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Message created successfully!"}), 201


@app.route("/add-like", methods=["POST"])
def add_like():
    track = request.json

    conn = sqlite3.connect(DATABASE_LIKES_FILE)

    cursor = conn.cursor()

    cursor.execute(
        "INSERT OR IGNORE INTO song_likes (track_id, like_count) VALUES (?, 0)",
        (track["id"],),
    )
    cursor.execute(
        "UPDATE song_likes SET like_count = like_count + 1 WHERE track_id = ?",
        (track["id"],),
    )

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"like": "Like created successfully!"}), 201


@app.route("/remove-like", methods=["POST"])
def remove_like():
    track = request.json

    conn = sqlite3.connect(DATABASE_LIKES_FILE)

    cursor = conn.cursor()

    cursor.execute(
        "UPDATE song_likes SET like_count = like_count - 1 WHERE track_id = ?",
        (track["id"],),
    )

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Like removed successfully!"}), 201


@app.route("/likes", methods=["GET"])
def get_likes():
    conn = sqlite3.connect(DATABASE_LIKES_FILE)

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM song_likes")

    users = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(users)


@app.route("/song-likes/<int:track_id>", methods=["GET"])
def get_total_likes(track_id):
    conn = sqlite3.connect(DATABASE_LIKES_FILE)

    cursor = conn.cursor()

    cursor.execute(
        "INSERT OR IGNORE INTO song_likes (track_id, like_count) VALUES (?, 0)",
        (track_id,),
    )
    cursor.execute("SELECT like_count FROM song_likes WHERE track_id = ?", (track_id,))

    result = cursor.fetchone()

    cursor.close()
    conn.close()

    if result:
        total_likes = result[0]
        return jsonify({"track_id": track_id, "total_likes": total_likes})
    else:
        return jsonify({"error": "Track not found"}), 404


@app.route("/add-dislike", methods=["POST"])
def add_dislike():
    track = request.json
    print(track)

    conn = sqlite3.connect(DATABASE_LIKES_FILE)

    cursor = conn.cursor()

    cursor.execute(
        "INSERT OR IGNORE INTO song_likes (track_id, dislike_count) VALUES (?, 0)",
        (track["id"],),
    )
    cursor.execute(
        "UPDATE song_likes SET dislike_count = dislike_count + 1 WHERE track_id = ?",
        (track["id"],),
    )

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Like created successfully!"}), 201


@app.route("/remove-dislike", methods=["POST"])
def remove_dislike():
    track = request.json

    conn = sqlite3.connect(DATABASE_LIKES_FILE)

    cursor = conn.cursor()

    cursor.execute(
        "UPDATE song_likes SET dislike_count = dislike_count - 1 WHERE track_id = ?",
        (track["id"],),
    )

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"Like": "Like removed successfully!"}), 201


@app.route("/song-dislikes/<int:track_id>", methods=["GET"])
def get_total_dislikes(track_id):
    conn = sqlite3.connect(DATABASE_LIKES_FILE)

    cursor = conn.cursor()

    cursor.execute(
        "INSERT OR IGNORE INTO song_likes (track_id, dislike_count) VALUES (?, 0)",
        (track_id,),
    )
    cursor.execute(
        "SELECT dislike_count FROM song_likes WHERE track_id = ?", (track_id,)
    )

    result = cursor.fetchone()

    cursor.close()
    conn.close()

    if result:
        total_dislikes = result[0]
        return jsonify({"track_id": track_id, "total_dislikes": total_dislikes})
    else:
        return jsonify({"error": "Track not found"}), 404


@app.route("/users", methods=["GET"])
def get_all_user():
        conn = sqlite3.connect(DATABASE_USERS_FILE)
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM users")

        result = cursor.fetchall()

        cursor.close()
        conn.close()

        return jsonify(result)


@app.route("/user-by-name/<string:username>", methods=["GET"])
def get_user_by_name(username):
    conn = sqlite3.connect(DATABASE_USERS_FILE)
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM users WHERE username = ?", (username,))

    result = cursor.fetchone()

    cursor.close()
    conn.close()

    if result:
        return jsonify(result)
    else:
        return jsonify({"error": "User not found"}), 404


@app.route("/user-by-id/<int:id>", methods=["GET"])
def get_user_by_id(id):
        conn = sqlite3.connect(DATABASE_USERS_FILE)
        cursor = conn.cursor()

        cursor.execute("SELECT * FROM users WHERE user_id = ?", (id,))

        result = cursor.fetchone()

        cursor.close()
        conn.close()

        if result:
            return jsonify(result)
        else:
            return jsonify({"error": "User not found"}), 404


@app.route("/new-user", methods=["POST"])
def add_new_user():
    user = request.json
    print(user["username"])
    conn = sqlite3.connect(DATABASE_USERS_FILE)

    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (username) VALUES (?)", (user["username"],))

    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"User": "Username added successfully!"}), 201


@app.route("/get-song", methods=["GET"])
def find_song_info():
    print(os.getenv("RAPIDAPI_KEY"))
    audio_data = request.data

    headers = {
        "content-type": "audio/wav",  # Adjust the content type based on the audio format
        "X-RapidAPI-Key": os.getenv("RAPIDAPI_KEY"),
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    }

    # Make a request to the Shazam API
    response = requests.post(
        "https://shazam.p.rapidapi.com/songs/detect", data=audio_data, headers=headers
    )

    if response.status_code == 200:
        song_info = response.json()
        return jsonify(song_info)
    else:
        return jsonify({"error": "Failed to fetch song information"}), 500


if __name__ == "__main__":
    app.run(debug=True)
