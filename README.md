Bot Battlr

Bot Battlr is a React application that allows users to browse through a list of robots, view detailed information, and manage their own bot army. Users can enlist bots into their army, remove them, or discharge them permanently.

Features
Browse Bots: View a list of all available bots with their details.
Enlist Bots: Add individual bots to your army.
Manage Your Army: Remove bots from your army or discharge them permanently.
Responsive Layout: Modern design with a clean and user-friendly interface.

Project Setup

1. Create a New Project Folder
Create a new folder for your project and navigate into it:

#bash
#Copy code
#mkdir bot-battlr
#cd bot-battlradd

2. Initialize Git
Create a new GitHub repository (make sure it is private) and initialize Git in your project folder:

bash
Copy code
git init
Add your repository as the remote origin:

bash
Copy code
git remote add origin <your-repository-url>
3. Create and Set Up a React App
Use Vite to set up a new React project:

bash
Copy code
npm create vite@latest bot-battlr --template react
cd bot-battlr
Install the necessary dependencies:

bash
Copy code
npm install
4. Add JSON Server for Backend
Install JSON Server to simulate a backend:

bash
Copy code
npm install -g json-server
5. Create db.json
Create a db.json file in the root directory with the following content:

json
Copy code
{
  "bots": [
    {
      "id": 101,
      "name": "wHz-93",
      "health": 94,
      "damage": 20,
      "armor": 63,
      "bot_class": "Support",
      "catchphrase": "1010010101001101100011000111101",
      "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.800Z",
      "updated_at": "2018-10-02T19:55:10.800Z"
    },
    {
      "id": 102,
      "name": "RyM-66",
      "health": 86,
      "damage": 36,
      "armor": 77,
      "bot_class": "Medic",
      "catchphrase": "0110011100000100011110100110011000011001",
      "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.827Z",
      "updated_at": "2018-10-02T19:55:10.827Z"
    }
  ]
}
6. Start JSON Server
Run the JSON Server to serve the db.json file:

bash
Copy code
json-server --watch db.json
The server will be available at http://localhost:8001/bots.

7. Build the Application
Ensure the src folder contains your React components and styling. Implement the following components:

App.jsx: Main component containing the BotCollection and YourBotArmy components.
BotCollection.jsx: Displays all available bots.
YourBotArmy.jsx: Displays bots enlisted in the user's army.
BotCard.jsx: Reusable component for displaying individual bot details.
8. Run the Application
Start the React development server:

bash
Copy code
npm run dev
Visit http://localhost:5173 to view the application in your browser.

Usage
View Bots: Browse through the list of available bots in the BotCollection.
Add Bots to Army: Click on a bot in the BotCollection to add it to your army.
Manage Your Army: View and manage your enlisted bots in the YourBotArmy. You can remove bots from the army or discharge them permanently.
Troubleshooting
500 Internal Server Error: Ensure that JSON Server is running and accessible at http://localhost:8001/bots.
Uncaught ReferenceError: Check that all imported components and variables are correctly defined and used.
Contribution
If you have suggestions or improvements, please create a pull request or submit an issue.

License
This project is licensed under the MIT License.