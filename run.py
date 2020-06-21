import os
from flask import Flask, render_template, url_for, redirect, request
from flask_pymongo import PyMongo

if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route('/')
def home():
    return render_template("index.html")


@app.route('/add_movie')
def add_movie():
    return render_template('addmovie.html')


@app.route('/films')
def films():
    return render_template('films.html', films=mongo.db.film_info.find())


@app.route('/insert_film', methods=['POST'])
def insert_film():
    film = mongo.db.film_info
    film.insert_one(request.form.to_dict())
    return redirect(url_for('add_movie'))


@app.route('/home')
def filler():
    hello = env
    return hello
    return url_for("index.html")


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
