import os
from flask import Flask, render_template, url_for, redirect, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import json
from bson import json_util

if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route('/')
def home():
    return render_template("index.html", film=mongo.db.film_info.find(),
                           page_number=1)


@app.route('/api/get-films')
def get_films():
    films = list(mongo.db.film_info.find())
    return json.dumps(films, default=json_util.default)


@app.route('/add_movie')
def add_movie():
    return render_template('addmovie.html')


@app.route('/films/<page_number>')
def films(page_number):
    films_per_page = 6
    number_of_films = mongo.db.film_info.count_documents({})
    page_count = int((number_of_films // films_per_page) +
                     (number_of_films % films_per_page))
    filter_start = (int(page_number) - 1) * films_per_page
    filter_films = mongo.db.film_info.find().skip(filter_start).limit(
        films_per_page)
    return render_template('films.html', films=filter_films,
                           film_count=number_of_films,
                           page_limit=page_count + 1,
                           current_page=int(page_number))


@app.route("/search/<page_number>", methods=["POST", "GET"])
def search(page_number):
    get_search = request.form.get("search")
    films_per_page = 6
    number_of_films = mongo.db.film_info.count_documents({"film_name":
                                                          get_search})
    page_count = int((number_of_films // films_per_page) +
                     (number_of_films % films_per_page))
    filter_films = mongo.db.film_info.aggregate([
        {"$search": {"text": {"path": "film_name",
                              "query": get_search}}}, {
                              "$limit": (films_per_page)}])
    return render_template('films.html', films=filter_films,
                           film_count=number_of_films,
                           page_limit=page_count + 1,
                           current_page=int(page_number))


@app.route('/insert_film', methods=['POST'])
def insert_film():
    films = mongo.db.film_info
    films.insert_one(request.form.to_dict())
    return redirect(url_for('films', page_number=1))


@app.route('/date_of_film/<film_date>')
def date_of_film(film_date):
    new_date = film_date.replace("_", "/")
    return render_template('viewbydate.html',
                           films=mongo.db.film_info.find(
                               {"release_date": new_date}),
                           the_date=new_date)


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
    return redirect(url_for('films', page_number=1))


@app.route('/home')
def filler():
    hello = env
    return hello
    return url_for("index.html", films=mongo.db.film_info.find())


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
