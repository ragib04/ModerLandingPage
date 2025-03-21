# Digital Solutions - Modern Landing Page

A responsive React.js landing page with API integration, optimized performance, and debounced search functionality.

![Digital Solutions](https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80)

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Modern UI Components**: Hero section, Features, Services, Pricing, Users, and Contact forms
- **API Integration**: Dynamic user data fetched from JSONPlaceholder API
- **Performance Optimized**: Fast load times with lazy-loaded images
- **Efficient Search**: Using Trie data structure for efficient name filtering
- **Smooth Animations**: Subtle animations using Framer Motion
- **Form Validation**: Using React Hook Form with Zod schemas

## Technology Stack

- **Frontend**:
  - React.js
  - TypeScript
  - TailwindCSS
  - Framer Motion (animations)
  - ShadcnUI components
  - React Hook Form with Zod validation
  - TanStack Query (React Query)

- **Backend**:
  - Express.js
  - In-memory storage

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/         # UI components
│   │   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   │   ├── sections/       # Page sections
│   │   │   └── ui/             # Reusable UI components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utility libraries
│   │   ├── pages/              # Page components
│   │   ├── types/              # TypeScript type definitions
│   │   └── utils/              # Utility functions
├── server/                     # Express server files
├── shared/                     # Shared code between client and server
```

## Performance Features

- **Debounced Search**: Prevents excessive API calls and renders while typing
- **Trie Data Structure**: Efficient prefix-based search algorithm
- **Lazy Image Loading**: Images load as they enter the viewport
- **CSS Optimization**: Using Tailwind for minimal CSS footprint

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:5000`

## API Integration

The application fetches user data from the JSONPlaceholder API:
- User data: https://jsonplaceholder.typicode.com/users

## Search Functionality

The user search functionality demonstrates efficient data structures:
- Uses a Trie data structure for fast prefix matching
- Implements debounced input to enhance performance
- Searches across multiple user fields (name, username, email)

## Contact Form

The contact form includes:
- Input validation
- Error handling
- Success/failure toast notifications
- (Note: Form submission is simulated in this demo version)

## License

This project is licensed under the MIT License.
