# Note-It App

Note-It is a simple note-taking app built with React, allowing users to create, edit, delete, and manage their notes. It features a clean and intuitive UI that provides users with a seamless experience in organizing their notes.

## Features

- Create, edit, and delete notes
- Archive and restore notes
- Move notes to trash and delete permanently
- User-friendly and responsive design
- Instant editing directly on click without extra buttons

## Installation

Follow these steps to get the app running on your local machine.

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn (package managers)

### Steps to Run the App Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/lnrdgnwn/note-it.git
   cd note-it

2. **Install dependencies**
   ```bash
   npm install

3. **Setup Firebase**
To enable Firebase features like authentication, database, or storage, you'll need to set up Firebase.

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new Firebase project (or use an existing one).
   - In the Firebase Console, go to **Project Settings**, then add Firebase to your web app then Copy Firebase Config that includes:
     - `apiKey`
     - `authDomain`
     - `projectId`
     - `storageBucket`
     - `messagingSenderId`
     - `appId`
     - `measurementId`
   
   - In your project folder, There is an `.env.local.example` file. Rename it to  `.env.local` file and update using your Firebase Config value.

4. **Run Server**
   ```bash
   npm run dev
