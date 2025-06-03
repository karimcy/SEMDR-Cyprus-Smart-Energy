from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

# Sample news data (you can easily modify this)
news_updates = [
    {
        'date': 'June 2, 2025',
        'title': 'Successful Site Visit Conducted!',
        'content': 'Our team recently completed an initial site visit to our partner hotel. This marks an important first step in assessing the existing infrastructure and planning for the installation of our smart energy monitoring equipment. We\'re excited to move forward!',
        'has_image': True,
        'image_filename': 'sitevisit.jpeg'
    }
]

@app.route('/')
def index():
    return render_template('index.html', news_updates=news_updates)

@app.route('/about')
def about():
    return render_template('index.html', news_updates=news_updates)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000) 