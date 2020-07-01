import os
from flask import Flask, render_template, url_for, redirect, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route('/')
def home():
    return render_template("index.html", film=mongo.db.film_info.find())


@app.route('/add_movie')
def add_movie():
    return render_template('addmovie.html')


@app.route('/films')
def films():
    return render_template('films.html', film=mongo.db.film_info.find())


@app.route('/insert_film', methods=['POST'])
def insert_film():
    films = mongo.db.film_info
    films.insert_one(request.form.to_dict())
    return redirect(url_for('add_movie'))


@app.route('/edit_film/<film_id>')
def edit_film(film_id):
    the_film = mongo.db.film_info.find_one({"_id": ObjectId(film_id)})
    return render_template('editfilm.html', film=the_film,)


@app.route('/update_film/<film_id>', methods=["POST"])
def update_film(film_id):
    films = mongo.db.film_info
    films.update({'_id': ObjectId(film_id)},
                 {
        'film_name': request.form.get('film_name'),
        'genre': request.form.get('genre'),
        'duration': request.form.get('duration'),
        'release_date': request.form.get('release_date'),
        'theatrical_poster_url': request.form.get('theatrical_poster_url'),
        'plot_summary': request.form.get('plot_summary'),
        'director': request.form.get('director'),
        'producer': request.form.get('producer'),
        'screenplay': request.form.get('screenplay'),
        'story': request.form.get('story'),
        'starring': request.form.get('starring')
    })
    return redirect(url_for('films'))


@app.route('/delete_film/<film_id>')
def delete_film(film_id):
    mongo.db.film_info.remove({'_id': ObjectId(film_id)})
    return redirect(url_for('films'))


@app.route('/home')
def filler():
    hello = env
    return hello
    return url_for("index.html", films=mongo.db.film_info.find())


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
