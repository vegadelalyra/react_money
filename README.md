# Makaia React Money - Mobile-First Transaction App
## Overview

Makaia React Money is a mobile-first web application designed for seamless financial transactions among your contacts. The app leverages various technologies, including ReactJS for the frontend, Cloudinary for on-demand image upload and download, and Firebase for hosting, database, and authentication services.

### Demo Link: [Makaia React Money](https://makaia-react-money.web.app/)
## Features

    Mobile-First Design: The app is optimized for mobile devices, providing a smooth and intuitive user experience.

    Cloudinary Integration: Utilizes Cloudinary services for high-quality image handling, ensuring low latency and efficient image management.

    Firebase Services:
        Hosting: Deployed and accessible 24/7 on Firebase Hosting.
        Database (Firestore): Implements Firestore, a NoSQL database, for efficient data representation. Each user is identified by their email, ensuring a single account per email. User data is structured with collections for users, accounts, and apps, providing scalability for future portfolio expansion.
        Authentication: Utilizes Firebase Authentication, allowing users to sign in securely using their Google email through OAuth2.

    GitHub Actions: Employs GitHub Actions for continuous integration and deployment. The app is always up-to-date, and errors are promptly fixed.

    Redux State Management: Uses Redux to manage global state, with slices dedicated to user authentication, account details, and app-specific functionalities.

    Pages and Routing: Implements React Router for seamless navigation between multiple pages.

    Thunks for Async Control: Utilizes Redux Thunks to manage asynchronous operations, ensuring smooth communication with various services.

    Sass Styling (Mobile-First Approach): Applies Sass styles with a mobile-first mindset for a responsive and visually appealing design.

## Getting Started
### Prerequisites

    Node.js installed on your machine.

### Installation

    Clone the repository: git clone https://github.com/your-username/makaia-react-money.git
    Navigate to the project directory: cd makaia-react-money
    Install dependencies: npm install

### Usage

    Run the app locally: npm start
    Open http://localhost:3000 in your web browser.

### Contributing

Contributions are welcome! Feel free to open issues, suggest enhancements, or submit pull requests.
License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

Special thanks to the open-source community and the technologies that make this app possible.

Note: This README provides an overview of the project. For more detailed information, explore the codebase and refer to the inline comments for each feature.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# react_money
React Transferring Money App. Last frontend sprint for Bootcamp Makia 
