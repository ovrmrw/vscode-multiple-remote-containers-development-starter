import os
from flask import Flask

host = os.getenv("HOST", "0.0.0.0")
port = os.getenv("PORT", "5000")

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, World!"


if __name__ == "__main__":
    app.run(host=host, port=port, debug=True)
