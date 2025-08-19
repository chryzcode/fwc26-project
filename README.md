# FIFA 2026 Business Advantage - Business Consulting Platform

A comprehensive business consulting platform designed to help entrepreneurs and small businesses capitalize on FIFA World Cup 2026 opportunities in Toronto and Vancouver.

## 🚀 Features

### Core Functionality
- **FIFA 2026 Business Consulting Services**
- **Strategy Sessions & Monetization Blueprints**
- **Full-Service Business Launch Support**
- **Event Management & Ticket Waitlist System**

### Technical Features
- **SEO Optimized** with keyword-rich content and meta descriptions
- **Calendly Integration** for easy appointment booking
- **Stripe Payment Processing** for secure transactions
- **Live Chat Widget** powered by OpenAI API
- **Newsletter Signup** with Mailchimp integration
- **Responsive Design** for mobile and desktop
- **Smooth Animations** and hover effects

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Payments**: Stripe
- **Booking**: Calendly
- **AI Chat**: OpenAI API
- **Email Marketing**: Mailchimp
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account
- Calendly account
- OpenAI API key
- Mailchimp account

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd fwc26-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Stripe Configuration
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   
   # OpenAI Configuration
   OPENAI_API_KEY=sk-...
   
   # Mailchimp Configuration
   MAILCHIMP_API_KEY=your_mailchimp_api_key
   MAILCHIMP_LIST_ID=your_list_id
   MAILCHIMP_SERVER_PREFIX=us1
   
   # Base URL
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   
   # Google Verification (optional)
   GOOGLE_VERIFICATION_CODE=your_verification_code
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Stripe Setup
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add them to your environment variables
4. Test with Stripe test cards

### Calendly Integration
1. Create a Calendly account
2. Set up your booking link: `https://calendly.com/fwc26info/30min`
3. The platform automatically embeds this in the booking page

### OpenAI API Setup
1. Get an API key from [OpenAI](https://openai.com)
2. Add it to your environment variables
3. The chat widget will automatically use this for AI responses

### Mailchimp Integration
1. Get your API key from Mailchimp
2. Find your List ID and Server Prefix
3. Add them to your environment variables

## 📱 Pages & Routes

- **Home** (`/`) - Main landing page with services overview
- **About Us** (`/about-us`) - Company information and team
- **Book** (`/book`) - Consultation booking with Calendly
- **Events** (`/events`) - FIFA 2026 match listings
- **Success** (`/success`) - Payment confirmation page
- **Blog** (`/blog`) - Business strategy articles

## 🎨 Customization

### Colors & Branding
Update the color scheme in `src/app/globals.css`:
```css
:root {
  --primary: #2563eb;
  --accent: #3b82f6;
  --cta: #f59e0b;
}
```

### Content Updates
- **SEO Keywords**: Update in `src/app/layout.tsx`
- **Service Descriptions**: Modify in `src/app/page.tsx`
- **Team Information**: Update in `src/app/about-us/page.tsx`

### Images & Assets
- Replace placeholder images in the `public/` directory
- Update image paths in components
- Ensure all images have proper alt text for SEO

## 🔍 SEO Features

### Implemented Optimizations
- **Keyword-rich titles** and meta descriptions
- **Structured H1, H2, H3** hierarchy
- **Alt text** for all images
- **Open Graph** and Twitter Card meta tags
- **Robots.txt** configuration
- **Sitemap** generation (recommended)

### Target Keywords
- FIFA World Cup 2026 business opportunities
- Monetize FIFA 2026 Toronto Vancouver
- Consulting for FIFA vendors Canada
- FIFA 2026 small business support

## 💳 Payment Integration

### Stripe Features
- **Secure checkout** with Stripe Checkout
- **Multiple payment methods** support
- **Automatic receipt** generation
- **Webhook handling** for payment confirmations

### Service Pricing
- **Strategy Sessions**: Custom pricing
- **Monetization Blueprint**: Custom pricing
- **Full-Service Launch**: Custom pricing

## 🤖 AI Chat Integration

### OpenAI Features
- **Context-aware responses** about FIFA 2026
- **Business consulting** expertise
- **Professional tone** and helpful guidance
- **Automatic fallback** for errors

## 📧 Newsletter System

### Mailchimp Features
- **Automatic list management**
- **Tag-based segmentation**
- **Professional templates**
- **Analytics and reporting**

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Similar to Vercel setup
- **AWS**: Use Amplify or custom setup
- **DigitalOcean**: App Platform deployment

## 📊 Performance Optimization

### Implemented Features
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **CSS optimization** with Tailwind
- **Bundle analysis** and optimization

### Monitoring
- **Core Web Vitals** tracking
- **Performance metrics** monitoring
- **SEO score** tracking

## 🔒 Security Features

- **HTTPS enforcement**
- **API rate limiting**
- **Input validation**
- **Secure payment processing**
- **Environment variable protection**

## 📈 Analytics & Tracking

### Recommended Tools
- **Google Analytics 4**
- **Google Search Console**
- **Stripe Dashboard**
- **Mailchimp Analytics**

## 🐛 Troubleshooting

### Common Issues
1. **Environment variables not loading**
   - Ensure `.env.local` is in root directory
   - Restart development server

2. **Stripe payments failing**
   - Check API key configuration
   - Verify webhook endpoints

3. **Chat widget not responding**
   - Verify OpenAI API key
   - Check API rate limits

4. **Newsletter signup errors**
   - Verify Mailchimp credentials
   - Check API permissions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- **Email**: info@fwc26.ca
- **Website**: [fwc26.ca](https://fwc26.ca)
- **Documentation**: Check this README and inline code comments

## 🔄 Updates & Maintenance

### Regular Tasks
- **Security updates** for dependencies
- **Performance monitoring** and optimization
- **Content updates** for FIFA 2026 information
- **SEO monitoring** and keyword updates

### Future Enhancements
- **Multi-language support**
- **Advanced analytics dashboard**
- **Customer portal**
- **Automated marketing campaigns**

---

**Built with ❤️ for FIFA 2026 Business Success**
