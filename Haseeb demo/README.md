# NESO Complaints Process Website

This is a GitHub Pages-compatible version of the National Energy System Operator (NESO) "Complaints process for initial checks" webpage.

## 🚀 Getting Started

### Option 1: Deploy to GitHub Pages

1. **Create a new GitHub repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `neso-complaints-process` or any name you prefer
   - Make sure it's public (required for free GitHub Pages)

2. **Upload your files:**
   - Upload all the files from this directory to your GitHub repository
   - You can either:
     - Use GitHub's web interface to upload files
     - Clone the repository and push the files using Git commands

3. **Enable GitHub Pages:**
   - Go to your repository's Settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your website:**
   - Your website will be available at: `https://yourusername.github.io/your-repository-name`
   - GitHub will provide you with the exact URL

### Option 2: Run Locally

To test the website locally before deploying:

1. **Simple HTTP Server (Python):**
   ```bash
   # Navigate to the project directory
   cd path/to/your/project
   
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js:**
   ```bash
   npx http-server
   ```

3. **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

Then open your browser and go to `http://localhost:8000`

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── main.css        # Main styles
│   │   ├── components.css  # Component styles
│   │   └── responsive.css  # Responsive/mobile styles
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   ├── images/
│   │   └── logo.svg       # NESO logo
│   └── favicon.ico        # Website icon
└── README.md              # This file
```

## 🎨 Customization

### Colors
The main brand colors used are:
- Primary Blue: `#006DAE`
- Secondary Purple: `#7A3864`
- Dark Grey: `#1A1A1A`
- Light Grey: `#F8F9FA`

### Typography
The website uses the Inter font family from Google Fonts.

### Modifying Content
- Edit `index.html` to change the page content
- Modify CSS files in `assets/css/` to adjust styling
- Update JavaScript in `assets/js/main.js` for functionality changes

### Adding New Pages
1. Create a new HTML file (e.g., `about.html`)
2. Follow the same structure as `index.html`
3. Update navigation links in all HTML files
4. Add corresponding CSS/JS as needed

## 📱 Features

- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Accessible:** Follows web accessibility guidelines
- **Fast Loading:** Optimized CSS and JavaScript
- **SEO Friendly:** Proper meta tags and semantic HTML
- **Modern Browser Support:** Works with all modern browsers

## 🔧 Technical Details

### Browser Support
- Chrome/Edge 70+
- Firefox 65+
- Safari 12+
- Mobile browsers

### Performance
- Lightweight CSS (~15KB compressed)
- Minimal JavaScript (~8KB compressed)
- SVG logo for crisp display on all devices
- Optimized for fast loading

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Focus management

## 🛠️ Maintenance

### Updating Content
1. Edit the HTML files directly
2. Test changes locally (optional)
3. Push changes to GitHub
4. GitHub Pages will automatically rebuild and deploy

### Adding New Styles
1. Add CSS to appropriate file in `assets/css/`
2. Follow existing naming conventions
3. Test on multiple screen sizes

### JavaScript Modifications
1. Edit `assets/js/main.js`
2. Follow existing code patterns
3. Test functionality across browsers

## 📞 Support

This is a static website template. For support with:
- GitHub Pages: Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- HTML/CSS/JS: Refer to web development resources like MDN Web Docs
- NESO-specific content: Contact the original content creators

## 📄 License

This project is based on the original NESO website content. Please ensure you have proper permissions for the content and branding used.

## 🔄 Updates

To update this website:
1. Make changes to the files
2. Test locally (recommended)
3. Commit and push to GitHub
4. GitHub Pages will automatically update your live site

---

**Note:** This is a static HTML version converted from the original dynamic NESO website. Some interactive features from the original site may not be included.
