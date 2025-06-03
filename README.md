# SEMDR - Smart Energy Management & Demand Response

A modern website showcasing SEMDR's smart energy management capabilities for Cyprus's hospitality sector.

## Features

- Modern responsive design
- Interactive timeline and animations  
- Hero section with Cyprus hotel imagery
- Smart energy flow visualization
- Partner information and EU funding acknowledgments
- Real-time updates section with images

## Setup

1. Install dependencies: `pip install -r requirements.txt`
2. Run the application: `python app.py`
3. Visit: `http://localhost:8000`

## Technology Stack

- Flask (Python web framework)
- HTML5/CSS3 with modern animations
- JavaScript for interactivity
- FontAwesome icons
- Responsive design

---
*Last updated: June 3, 2025*

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