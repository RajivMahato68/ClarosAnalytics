React + Redux Toolkit + TypeScript Application

This project is a sample React application built using Redux Toolkit, TypeScript, and Tailwind CSS.
It fetches data from an external API (JSONPlaceholder), supports search, filtering, and pagination, and displays results in a clean UI.

Features

- Fetch Todos using Redux Toolkit (createAsyncThunk)

- Fully typed with TypeScript

- Search functionality

- Client-side pagination

- Modern UI using Tailwind CSS

- Component-based clean architecture

Tech Stack

- React 18

- Redux Toolkit

- TypeScript

- Tailwind CSS

- Vite

Installation & Setup

Follow these steps to run the application on your local machine.

1. Clone the repository:

   ```bash
   git clone
   ```

2. Install Dependencies

   ```
   npm install

   ```

   3. Start the Development Server

   ```
   npm run dev
   ```

3. API Used

- JSONPlaceholder Todos Endpoint: https://jsonplaceholder.typicode.com/todos

4. Folder Structure

- src/
  - components/ # Reusable UI components
  - pages/ # Page components (HomePage, DataPage)
  - store/ # Redux store and slices
  - App.tsx # Main application component
  - main.tsx # Entry point

5. Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
