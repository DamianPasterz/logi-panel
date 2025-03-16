# Angular Project - Light/Dark Theme, Notifications, Loader, and i18n

This is an Angular project that demonstrates the following features:

- **Light/Dark Theme**: Dynamic switching between light and dark themes.
- **Notifications**: Global notification system with success and error messages.
- **Loader**: Global loading spinner for long-running operations.
- **Internationalization (i18n)**: Support for multiple languages (Polish and English).
- **Deferrable Views**: Dynamic loading of components using Angular's `@defer`.

## Features

### 1. Light/Dark Theme

- The application supports both light and dark themes.
- The theme can be toggled using a button in the UI.
- The theme is applied globally using CSS variables.

### 2. Notifications

- Notifications are displayed globally and disappear automatically after 10 seconds.
- Notifications can be manually dismissed by clicking the close button.
- Supports success and error notifications.

### 3. Loader

- A global loading spinner is displayed during long-running operations (e.g., login, logout).
- The loader is dynamically loaded using Angular's `@defer`.

### 4. Internationalization (i18n)

- The application supports two languages: Polish (`pl`) and English (`en`).
- The language can be changed using a dropdown in the UI.
- Translations are loaded from JSON files located in `assets/i18n/`.

### 5. Deferrable Views

- Components like notifications and loader are dynamically loaded using Angular's `@defer`.
- This improves performance by loading components only when needed.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

   ```

2. **Install dependencies**:

```bash
  npm install
```

3.**Run the application:**

```bash
ng serve
```

4.**Open the application:**

```bash
Visit http://localhost:4200 in your browser.
```
