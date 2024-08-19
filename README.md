## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/tony-g30/Phase-2-Code-Challenge-Bot-Battlr.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Phase 2 Code Challange Bot Battlr
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the JSON server:**

    ```bash
json-server --watch db.json --port 8001    ```

5. **Start the React application:**

    ```bash
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

- **View Bots:** The homepage will display a collection of all available bots. Each bot's profile includes its name, class, health, damage, armor, and catchphrase.
- **Enlist a Bot:** Click on any bot in the `BotCollection` to add it to your army. The bot will appear in the `YourBotArmy` component.
- **Manage Your Army:** In the `YourBotArmy` component, you can click on a bot to remove it from your army, or click the "Discharge" button to permanently discharge it from both the frontend and backend.
- **Delete a Bot:** Permanently remove a bot from the server by clicking the "x" button in the `YourBotArmy` component.

## API Endpoints

- **GET /bots**: Retrieves a list of all bots.

- **DELETE /bots/:id**: Deletes a bot from the backend.
