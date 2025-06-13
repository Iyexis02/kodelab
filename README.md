# Kodelab Website Redesign

A modern, responsive website built with Next.js 14, featuring dynamic content management, comprehensive error handling, and server-side logging for security.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Dynamic Content Management**: Integration with DatoCMS for flexible content updates
- **Comprehensive Error Handling**: Client and server-side error management with secure logging
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Contact System**: Advanced contact form with validation and email notifications
- **Performance Optimized**: Server-side rendering, image optimization, and code splitting
- **Analytics Ready**: Google Analytics integration for tracking and insights
- **Security First**: Server-side error logging to prevent client-side exposure

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Features Overview](#features-overview)
- [Development](#development)
- [Deployment](#deployment)
- [Content Management](#content-management)
- [Error Handling & Logging](#error-handling--logging)
- [Contributing](#contributing)
- [License](#license)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/kodelab-redesign.git
   cd kodelab-redesign
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Fill in the required environment variables (see [Environment Variables](#environment-variables))

4. **Run the development server**
   \`\`\`bash
   npm run dev

   # or

   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Email Configuration (Required)

\`\`\`env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=notifications@yourdomain.com
EMAIL_REPLY_TO=your-email@gmail.com
\`\`\`

### Analytics (Optional)

\`\`\`env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
\`\`\`

### DatoCMS (Required for dynamic content)

\`\`\`env
DATOCMS_API_TOKEN=your-datocms-api-token
DATOCMS_ENVIRONMENT=main
\`\`\`

### Gmail Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App passwords
3. Use the generated password for `EMAIL_PASSWORD`

## ✨ Features Overview

### 🎨 Design System

- **Consistent UI**: Reusable components with Tailwind CSS
- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme support (optional)
- **Animations**: Smooth transitions and hover effects

### 📝 Content Management

- **Dynamic Content**: DatoCMS integration for easy content updates
- **Structured Data**: Type-safe GraphQL queries
- **Loading States**: Skeleton loaders for better UX
- **Error Handling**: Graceful error states with retry functionality

### 📧 Contact System

- **Advanced Form**: Multi-step form with validation
- **Email Notifications**: Automated email sending via SMTP
- **Form Types**: Different forms for projects, careers, and general inquiries
- **Spam Protection**: Server-side validation and sanitization

### 📊 Analytics & Monitoring

- **Google Analytics**: Page views and event tracking
- **Error Logging**: Comprehensive error tracking
- **Performance Monitoring**: Built-in Next.js analytics
- **User Journey Tracking**: Form interactions and conversions

## 🛠 Development

### Available Scripts

\`\`\`bash

# Development

npm run dev # Start development server
npm run build # Build for production
npm run start # Start production server
npm run lint # Run ESLint
npm run type-check # Run TypeScript checks

# Testing (if implemented)

npm run test # Run tests
npm run test:watch # Run tests in watch mode
\`\`\`

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (if configured)
- **Husky**: Git hooks for quality checks (if configured)

### Development Guidelines

1. **Component Structure**: Use functional components with TypeScript
2. **Styling**: Tailwind CSS with responsive design principles
3. **State Management**: React hooks and context for local state
4. **Error Handling**: Always implement loading and error states
5. **Logging**: Use the provided logging system for debugging

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Configure Environment Variables**

   - Add all required environment variables in Vercel dashboard
   - Ensure `NEXT_PUBLIC_` prefix for client-side variables

3. **Deploy**
   - Automatic deployments on push to main branch
   - Preview deployments for pull requests

### Manual Deployment

\`\`\`bash

# Build the application

npm run build

# Start production server

npm run start
\`\`\`

### Custom Domain

1. Add domain in Vercel dashboard
2. Configure DNS records as instructed
3. SSL certificate is automatically provisioned

## 📊 Content Management

### DatoCMS Setup

1. **Create Account**: Sign up at [datocms.com](https://datocms.com)

2. **Content Models**: Set up the following models:

   - **Values**: Company values with icons and descriptions
   - **Team Members**: Staff profiles with photos and skills
   - **Products**: Portfolio items with details and technologies
   - **Testimonials**: Client testimonials and ratings
   - **Company Story**: About section content

3. **API Token**: Generate and add to environment variables

4. **GraphQL Queries**: Use the provided queries in `lib/apollo/queries.ts`

### Content Types

\`\`\`typescript
// Example: Values content model
interface Value {
id: string
title: string
description: string
iconName: string
}

// Example: Team Member content model
interface TeamMember {
id: string
name: string
position: string
bio: string
photo: string
skills: string[]
socialLinks: SocialLink[]
}
\`\`\`

## 🔍 Error Handling & Logging

### Client-Side Error Handling

\`\`\`typescript
// Using the client logger
import { useClientLogger } from '@/hooks/use-client-logger'

const { logError, logWarning } = useClientLogger()

// Log errors securely to server
await logError('Form submission failed', 'ContactForm', {
errorType: 'validation',
fieldCount: 5
})
\`\`\`

### Server-Side Logging

\`\`\`typescript
// Server-side logging
import { logError, logInfo } from '@/lib/logger'

// Log with context
await logError('Database connection failed', {
context: 'API',
endpoint: '/api/contact'
})
\`\`\`

### Error Types

- **Validation Errors**: Form validation failures
- **API Errors**: Server communication issues
- **Apollo Errors**: GraphQL query failures
- **Network Errors**: Connection problems
- **Unexpected Errors**: Unhandled exceptions

### Security Features

- **Server-Side Logging**: Sensitive errors logged on server only
- **Data Sanitization**: No sensitive data in client logs
- **Error Boundaries**: React error boundaries for graceful failures
- **Retry Mechanisms**: Automatic retry for failed requests

## 🧪 Testing (Future Implementation)

### Recommended Testing Stack

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Playwright or Cypress
- **E2E Tests**: Playwright for full user journeys
- **Visual Tests**: Chromatic for component testing

### Test Structure

\`\`\`
tests/
├── **mocks**/ # Mock files
├── components/ # Component tests
├── pages/ # Page tests
├── api/ # API route tests
└── e2e/ # End-to-end tests
\`\`\`

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with descriptive messages**
   \`\`\`bash
   git commit -m "feat: add new contact form validation"
   \`\`\`
6. **Push and create a pull request**

### Commit Convention

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions or updates
- `chore:` Maintenance tasks

### Code Review Process

1. All changes require pull request review
2. Ensure tests pass and code follows guidelines
3. Update documentation for new features
4. Squash commits before merging

## 📈 Performance Optimization

### Built-in Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle splitting
- **Server-Side Rendering**: SSR for better SEO and performance
- **Static Generation**: ISR for dynamic content
- **Edge Functions**: Vercel Edge Runtime support

### Performance Monitoring

- **Core Web Vitals**: Automatic tracking
- **Bundle Analysis**: Use `@next/bundle-analyzer`
- **Lighthouse**: Regular performance audits
- **Real User Monitoring**: Vercel Analytics

## 🔒 Security

### Security Measures

- **Environment Variables**: Secure configuration management
- **Input Validation**: Zod schema validation
- **CSRF Protection**: Built-in Next.js protection
- **Rate Limiting**: API route protection (recommended)
- **Content Security Policy**: HTTP security headers (recommended)

### Best Practices

- Never expose sensitive data in client-side code
- Use server actions for sensitive operations
- Validate all user inputs
- Implement proper error handling
- Regular dependency updates

## 📞 Support

### Getting Help

- **Documentation**: Check this README and inline comments
- **Issues**: Create GitHub issues for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact the development team

### Common Issues

1. **Build Failures**: Check environment variables and dependencies
2. **Email Not Sending**: Verify Gmail app password and SMTP settings
3. **CMS Content Not Loading**: Check DatoCMS API token and network
4. **Styling Issues**: Ensure Tailwind CSS is properly configured

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For hosting and deployment platform
- **DatoCMS**: For content management solution
- **Tailwind CSS**: For the utility-first CSS framework
- **Open Source Community**: For the tools and libraries used

---

**Built with ❤️ by the Kodelab Team**

For more information, visit [kodelab.com](https://kodelab.com)
