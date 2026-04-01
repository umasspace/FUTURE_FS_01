# umas.pro

A modern, interactive portfolio website built with Next.js, featuring stunning 3D graphics and smooth animations.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://umas.pro)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ Features

- 🎨 Modern and responsive design
- 🎭 Interactive 3D graphics and animations
- ⚡ Lightning-fast performance with Next.js 16
- 🎬 Smooth scrolling and transitions
- 📱 Mobile-friendly and responsive
- 🎯 SEO optimized
- 📧 Contact form integration with EmailJS
- 🌙 Dynamic visual effects

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **UI Components:** React Icons, React Type Animation
- **Smooth Scrolling:** Lenis, Locomotive Scroll

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm**, **yarn**, or **pnpm** package manager

## 🚀 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/umasspace/-FUTURE_FS_01.git
cd -FUTURE_FS_01
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

> 💡 **Tip:** Get your EmailJS credentials from [www.emailjs.com](https://www.emailjs.com)

## 🏃 Running the Project

### Development Mode

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

1. **Build the application:**

```bash
npm run build
# or
yarn build
# or
pnpm build
```

2. **Start the production server:**

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.js     # Root layout
│   │   ├── page.js       # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── canvas/       # 3D canvas components
│   │   ├── hoc/          # Higher-order components
│   │   └── ...           # Other components
│   ├── constants/        # Constants and configuration
│   ├── assets/           # Images and static assets
│   └── utils/            # Utility functions
├── public/               # Public static files
├── .env.local            # Environment variables (create this)
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── package.json          # Project dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `src/constants/constants.js` to add your:
- Personal details
- Projects
- Work experience
- Skills
- Social media links

### Add/Remove Sections

Modify `src/app/page.js` to include or exclude sections:
- About
- Projects
- Skills
- Testimonials
- Experience
- Contact

### Modify Components

Customize individual components in the `src/components` directory to match your style and requirements.

### Styling

- **Colors & Themes:** Adjust in `tailwind.config.js`
- **Global Styles:** Modify `src/app/globals.css`
- **Component Styles:** Update Tailwind classes in individual components

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier (if configured)
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables in Vercel dashboard:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/umasspace/-FUTURE_FS_01)

### Deploy on Other Platforms

This Next.js application can also be deployed on:
- **Netlify** - Great for static sites
- **AWS Amplify** - Full AWS integration
- **Digital Ocean** - App Platform
- **Railway** - Simple deployment
- **Render** - Free tier available

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com)
2. Create an email service
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file

### Tailwind CSS

Customize your theme in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports

If you discover any bugs, please create an issue on GitHub with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Website:** [umas.pro](https://umas.pro)
- **GitHub:** [@umasspace](https://github.com/umasspace)
- **Issues:** [GitHub Issues](https://github.com/umasspace/-FUTURE_FS_01/issues)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Three.js](https://threejs.org/) - 3D Graphics Library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [EmailJS](https://www.emailjs.com/) - Email Service
- All open-source contributors

## 📸 Screenshots

> Add screenshots of your portfolio here to showcase the design and features

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Umas](https://umas.pro)
