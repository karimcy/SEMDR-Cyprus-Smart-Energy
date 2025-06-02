# SEMDR Website - Smart Energy Management & Demand Response Capabilities

A modern, responsive website for the SEMDR project showcasing smart energy management solutions for Cyprus's hospitality sector.

## Features

- **Modern Design**: Clean, professional layout with energy-themed color scheme
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Professional Icons**: FontAwesome icons throughout the design
- **Image Placeholders**: Clearly marked spaces for logos and photos
- **Easy to Update**: Simple structure for adding news updates

## Quick Start

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Website**
   ```bash
   python app.py
   ```

3. **View in Browser**
   - Open your browser and go to: `http://localhost:5000`
   - The website will be running locally

## Project Structure

```
SEMDR/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Main HTML template
├── static/
│   ├── css/
│   │   └── style.css     # Styling and responsive design
│   ├── js/
│   │   └── script.js     # Interactive functionality
│   └── images/           # Directory for your images and logos
└── README.md             # This file
```

## Adding Content

### Adding News Updates
Edit the `news_updates` list in `app.py`:

```python
news_updates = [
    {
        'date': 'Your Date',
        'title': 'Your Update Title',
        'content': 'Your update content...'
    },
    # Add more updates here
]
```

### Adding Images
1. Place your images in the `static/images/` directory
2. Replace the placeholder sections in `templates/index.html`
3. Update CSS references if needed

### Customizing Content
- Edit the text content directly in `templates/index.html`
- Modify colors and styling in `static/css/style.css`
- Add new sections by following the existing pattern

## Image Placeholders

The website includes clearly marked placeholders for:
- Hero background image
- Partner logos (IMKA, Neura, Restrol)
- Project images
- News update photos
- EU and Cyprus funding logos

## Technical Details

- **Framework**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: FontAwesome
- **Fonts**: Inter (Google Fonts)
- **Responsive**: CSS Grid and Flexbox
- **Browser Support**: All modern browsers

## Deployment

For production deployment:
1. Set `debug=False` in `app.py`
2. Use a production WSGI server like Gunicorn
3. Configure your web server (Apache/Nginx)

## Contact

For questions about the SEMDR project: info@demandresponsecy.com

---

**Funding**: This project is funded by the European Union - NextGenerationEU and the Republic of Cyprus Recovery and Resilience Plan. Part of the 'RESTART 2016-2020' Programmes by the Research and Innovation Foundation. 