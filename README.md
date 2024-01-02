# AlltunedIn - MERN Stack Blog Web App
# Table of Contents
1. [Introduction](#Introduction) 
2. [Features](#Features)
3. [Prerequisites](#Prerequisites)
4. [Installation](#Installation)
5. [Folder Structure](#Folder-Structure)
6. [Technologies Used](#Technologies-Used)
7. [Website Details](#Website-Details)
8. [Images](#Images)

## 1. Introduction
AlltunedIn is a blog web app built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create, edit, and delete blog posts, as well as comment on posts.

## 2. Features
1. User authentication and authorization
2. Create, edit, and delete blog posts
3. Comment on blog posts
4. Responsive design for mobile and desktop

## 3. Prerequisites
Before you begin, ensure you have the following installed:
1. Node.js and npm
2. MongoDB
3. Git
   
## 4. Installation
1. Clone the repository
2. Install required server dependencies
3. Install required client dependencies:
4. Create a .env file in the server folder with the variables:
   PORT=3001
  MONGODB_URI=your_mongodb_connection_string
  SECRET_KEY=your_secret_key_for_jwt
5. Update the client configuration in client/src/config.js if you want to change the API for the backend.
6. Start the server.
7. Start the client.
8. Open your browser and go to http://localhost:3000 to use the application.
9. If you want to see direct preview of the website refer:https://blog-web-app-ea2z.vercel.app/

## 5. Folder Structure

BLOG WEBAPP/
|-- alltunedin/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- pages/
|   |   |-- App.js
|   |   |-- index.js
|   |-- package.json
|-- server/
|   |-- database/
|   |-- controller/
|   |-- route/
|   |-- Schema/
|   |-- utils/
|   |-- .env
|   |-- index.js
|   |-- package.json
|-- .gitignore
|-- README.md

## 6. Technologies Used
1. MongoDB
2. Express.js
3. React
4. Node.js
5. JWT for authentication
6. Axios for HTTP requests

## 7. Website Details
### How to Use AlltunedIn
#### Creating a New Blog Post
To create a new blog post, follow these steps:
1. Log in to the application using your credentials.
2. Navigate to the "Create Post" section.
3. Fill in the required details such as title, content, and any additional information.
4. Click the "Submit" button to publish your blog post.
#### Editing a Blog Post
If you need to edit an existing blog post:
1. Log in to the application.
2. Go to the "My Posts" section.
3. Find the post you want to edit and click on the "Edit" button.
4. Update the necessary information.
5. Save your changes.

#### Commenting on a Post
To leave a comment on a blog post:
1. Open the blog post you want to comment on.
2. Scroll down to the comment section.
3. Type your comment in the input box.
4. Click the "Submit" button to post your comment.
   
### Why Use AlltunedIn
#### User Authentication
AlltunedIn implements user authentication to ensure that only registered users can create, edit, and delete blog posts. This adds a layer of security and personalization to the application.

#### Responsive Design
The application is designed to be responsive, providing an optimal viewing and interaction experience across a wide range of devices. This ensures that users can access and use AlltunedIn seamlessly from their desktops, tablets, or mobile phones.

#### MongoDB as a Database
We chose MongoDB as our database solution due to its flexibility and scalability. It allows us to efficiently store and retrieve blog posts and user data while easily adapting to changing requirements.

## Images
You can refer to the following to get user-friendly with the user interface of the website:

1. Login Page:

<img src="https://github.com/gaurav270401/Blog-WebApp/assets/133756033/47948a3c-695e-40ba-913f-6df69973df3a" width="500" height="700">

2. SignUp Page:

<img src="https://github.com/gaurav270401/Blog-WebApp/assets/133756033/7b7c76c3-c5b7-47d6-b29b-cd7bab36a423" width="500" height="700">


4. Home Page:
   ![image](https://github.com/gaurav270401/Blog-WebApp/assets/133756033/7835d772-2b1f-4e35-bfea-f0f5d1c2bea2)


5. Blog Editable Page :
   
   a) Blog:
   ![image](https://github.com/gaurav270401/Blog-WebApp/assets/133756033/b0191255-ae4d-4f16-9ed0-f74c598e3ef1)

   b) Comments:
   ![image](https://github.com/gaurav270401/Blog-WebApp/assets/133756033/72e85bff-9ec4-48cd-9930-0a0f681b8d3d)






