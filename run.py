from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")


@app.route('/add_movie')
def add_movie():
    return render_template('addmovie.html')


@app.route('/home')
def filler():
    return url_for("index.html")


if __name__ == "__main__":
    app.run()