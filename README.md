# Organic Fashion Website

A modern React application built with TypeScript, Redux Toolkit, and SCSS. This project demonstrates best practices in component architecture, state management, and styling.

## 🚀 Features

- **Modern React**: Built with React 18, TypeScript, and functional components
- **State Management**: Redux Toolkit for centralized state management
- **Styling**: SCSS with BEM methodology and CSS Modules
- **Performance**: React.memo for component optimization
- **Error Handling**: Error boundaries and loading states
- **Responsive Design**: Mobile-first approach with custom breakpoints

## 📁 Project Structure

```
src/
├── app/                    # Redux store configuration
├── components/             # Page-specific components
│   ├── header/
│   ├── categories/
│   ├── collection/
│   ├── about/
│   └── follow/
├── features/              # Redux slices
│   ├── typographySlice.ts
│   └── mediaSlice.ts
├── shared/               # Shared utilities and components
│   ├── components/       # Reusable components
│   ├── contexts/         # React contexts
│   └── styles/          # Global styles and variables
├── types/               # TypeScript type declarations
└── assets/              # Static assets
```

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **Redux Toolkit** for state management
- **SCSS** with CSS Modules
- **Vite** for build tooling
- **ESLint** for code quality

## 🎨 Styling Architecture

### BEM Methodology
The project follows BEM (Block Element Modifier) methodology:

```scss
.header {                    // Block
  &__content { }            // Element
  &__title { }              // Element
  &__button {               // Element
    &--active { }           // Modifier
  }
}
```

### SCSS Structure
- **Variables**: `src/shared/styles/variables.scss`
- **Mixins**: `src/shared/styles/mixins.scss`
- **Main styles**: `src/shared/styles/main.scss`

## 🔧 State Management

### Redux Store Structure
```typescript
{
  typography: {
    data: TypographyData,
    loading: boolean,
    error: string | null
  },
  media: {
    data: MediaData,
    loading: boolean,
    error: string | null
  }
}
```

### Async Actions
- `fetchTypography()`: Loads text content from JSON
- `fetchMedia()`: Loads image paths from JSON

## 🚦 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📝 Code Quality

### TypeScript
- Strict type checking enabled
- Proper type definitions for all components
- Interface definitions for props and state

### Performance Optimizations
- React.memo for component memoization
- Proper dependency arrays in useEffect
- Optimized re-renders with useSelector

### Error Handling
- Error boundaries for component error catching
- Loading states for async operations
- Graceful fallbacks for missing data

## 🎯 Best Practices Implemented

1. **Component Architecture**
   - Single responsibility principle
   - Proper separation of concerns
   - Reusable component design

2. **State Management**
   - Centralized Redux store
   - Async thunks for API calls
   - Proper loading and error states

3. **Styling**
   - BEM methodology
   - CSS Modules for scoping
   - Responsive design with mixins

4. **Performance**
   - Component memoization
   - Optimized imports with index files
   - Efficient re-renders

5. **Developer Experience**
   - TypeScript for type safety
   - ESLint for code quality
   - Clean project structure

## 🔄 Data Flow

1. **App Initialization**: Redux store is configured
2. **Data Fetching**: Typography and media data loaded via thunks
3. **Component Rendering**: Components consume data from Redux store
4. **User Interactions**: Click events trigger context updates
5. **Error Handling**: Error boundaries catch and display errors

## 📱 Responsive Design

The application uses custom breakpoints:
- `on1290`: Max-width 1290px
- `on759`: Max-width 759px

## 🎨 Customization

### Adding New Components
1. Create component folder in `src/components/`
2. Add TypeScript interface for props
3. Implement BEM styling
4. Export from `src/components/index.ts`

### Adding New Data
1. Update JSON files in `public/`
2. Add types to Redux slices
3. Update component selectors

## 🤝 Contributing

1. Follow the established code structure
2. Use TypeScript for all new code
3. Implement BEM methodology for styling
4. Add proper error handling
5. Include loading states for async operations

## 📄 License

This project is for educational purposes.
