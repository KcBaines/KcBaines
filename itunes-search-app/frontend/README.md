# iTunes Search App

## Description

The iTunes Search App is a web application that allows users to search for various media types using the iTunes Search API. It features a user-friendly interface built with React for the front-end and Node.js with Express for the back-end. Users can search for media, view search results, and add items to their favourites list.

## Purpose

The primary purpose of this application is to provide an interactive and engaging way to search for and explore media content from the iTunes Store. It allows users to filter their search results by different media types and manage a list of favourite items.

## Key Features

- **Search Functionality**: Users can enter search terms and select media types (e.g., movie, podcast, music, etc.) to find relevant content.
- **Media Display**: Search results are displayed with relevant details, including artwork, collection name, and artist name.
- **Favourites Management**: Users can add and remove items from their favourites list.
- **JWT Authentication**: Utilizes JSON Web Tokens (JWT) for securing API requests.

## Installation and Running Locally

To run this application locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- A code editor such as Visual Studio Code.

### Navigate to the project directory

- cd itunes-search-app

### Navigate to the backend directory

- cd backend
- npm install

### Navigate to the frontend directory

- cd ../frontend
- npm install

### Set up environment variables

- create a `.env` file in the backend directory and add the secret key
- SECRET_KEY=your_secret_key_here

### Start the backend 

- cd backend
-npm start

### Start the frontend

- cd ../frontend
- npm start

### The application will be accessible at http://localhost:3000 in your web browser.

