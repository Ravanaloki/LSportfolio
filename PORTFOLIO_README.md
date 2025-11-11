# Lokesh S - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Decap CMS for easy content management.

## 🌟 Features

- **Modern Dark Theme** with violet accents (switchable to light mode)
- **Fully Responsive** design for mobile, tablet, and desktop
- **Profile Image** with animated gradient border
- **Smooth Animations** and transitions
- **Content Management System** (Decap CMS) for easy updates
- **Dynamic Sections**:
  - Hero section with call-to-action buttons
  - About Me with profile image, education, strengths, and hobbies
  - Skills & Expertise with animated progress bars
  - Work Experience & Certifications
  - Featured Projects with status badges
  - Contact section with social links
  - Professional footer
- **Back to Top Button** for easy navigation
- **SEO Optimized** with proper meta tags

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager

### Installation

1. Navigate to the frontend directory:
```bash
cd /app/frontend
```

2. Install dependencies (already installed):
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

The website will open at `http://localhost:3000`

## 📝 Content Management with Decap CMS

### Accessing the CMS

1. **Start the CMS proxy server** (in a separate terminal):
```bash
cd /app/frontend
yarn cms-proxy
```

2. **Access the CMS admin panel**:
   - Open your browser and go to: `http://localhost:3000/admin/`
   - The CMS will load and you can start editing content

### What You Can Edit

The CMS allows you to manage:

1. **Profile Information**
   - Name, role, tagline
   - Profile image
   - About description
   - Contact details (email, phone, location)
   - Education details
   - Strengths
   - Hobbies

2. **Skills & Expertise**
   - Add/remove skill categories
   - Add/remove individual skills
   - Adjust proficiency levels (0-100%)

3. **Projects**
   - Add new projects
   - Edit project details (title, description)
   - Upload project thumbnails
   - Add technologies used
   - Set project status (In Progress/Completed)
   - Add project links

4. **Experience**
   - Add work experience entries
   - Add certifications
   - Edit responsibilities and descriptions

5. **Social Links**
   - Add/remove social media links
   - Update URLs
   - Choose icons (linkedin, palette, mail, phone, github, twitter, instagram)

### How to Edit Content

1. **Access the admin panel**: `http://localhost:3000/admin/`

2. **Select a collection** from the left sidebar:
   - Profile
   - Skills
   - Projects
   - Experience
   - Social Links

3. **Make your changes** using the intuitive editor

4. **Save your changes** - The changes will be written directly to the JSON files

5. **Refresh the main website** to see your updates

### Uploading Images

- When you upload images through the CMS, they will be stored in `/public/images/uploads/`
- The CMS automatically handles image paths
- Supported formats: JPG, PNG, GIF, WebP
- **To replace the profile image**: Upload your photo through the CMS or replace the image URL in `profile.json`

## 📁 Project Structure

```
/app/frontend/
├── public/
│   ├── data/                    # JSON data files
│   │   ├── profile.json
│   │   ├── skills.json
│   │   ├── projects.json
│   │   ├── experience.json
│   │   └── socials.json
│   ├── images/
│   │   └── uploads/            # CMS uploaded images
│   └── admin/                   # CMS configuration
│       ├── config.yml
│       └── index.html
├── src/
│   ├── components/              # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── BackToTop.jsx
│   │   └── ui/                  # Shadcn UI components
│   ├── App.js
│   ├── App.css
│   └── index.css
└── package.json
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Violet (#7c3aed / hsl(263, 70%, 60%))
- **Background**: Dark blue-gray (#0a0a0f)
- **Cards**: Slightly lighter dark gray
- **Text**: White and light gray
- **Accents**: Violet gradients

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Open Sans (Google Fonts)

### Animations
- Smooth scroll navigation
- Animated blob backgrounds in hero section
- Fade-in effects on load
- Hover effects on cards and buttons
- Progress bar animations in skills section
- Image hover effects in projects

## 🔧 Customization

### Changing Colors

Edit `/app/frontend/src/index.css` to modify the color scheme:
```css
.dark {
  --primary: 263 70% 60%;      /* Violet */
  --background: 240 10% 3.9%;  /* Dark background */
  --accent: 263 70% 60%;       /* Accent color */
}
```

### Editing Data Directly

If you prefer to edit data without the CMS, modify the JSON files in `/app/frontend/public/data/`:
- `profile.json` - Personal information
- `skills.json` - Skills and categories
- `projects.json` - Portfolio projects
- `experience.json` - Work history and certifications
- `socials.json` - Social media links

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (2-column layouts)
- **Desktop**: > 1024px (3-column project grid)

## 🌐 Deployment

### Building for Production

```bash
cd /app/frontend
yarn build
```

This creates an optimized production build in the `build/` folder.

### Deployment Options

The site can be deployed to:
- **Netlify** (Recommended for CMS integration)
- **Vercel**
- **GitHub Pages**
- **Any static hosting service**

### Netlify Deployment with CMS

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `yarn build`
4. Set publish directory: `build`
5. Enable Netlify Identity for CMS authentication
6. Update `/app/frontend/public/admin/config.yml`:
   - Change `backend: name` from `git-gateway` to your GitHub repo
   - Remove `local_backend: true`

## 📄 License

This project is private and belongs to Lokesh S.

## 👨‍💻 Developer

**Lokesh S**
- Email: lokeshshankar779@gmail.com
- Phone: +91 86676 45350
- LinkedIn: [linkedin.com/in/lokesh-s-aaaa45299](https://www.linkedin.com/in/lokesh-s-aaaa45299)
- Behance: [behance.net/mrlocallokesh](https://www.behance.net/mrlocallokesh)

---

Built with ❤️ using React, Tailwind CSS, and Decap CMS
