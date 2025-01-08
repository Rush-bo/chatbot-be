# Chatbot with Predefined Questions and Free-Form Queries

This project is a chatbot implemented using **NestJS** and integrated with **LangFlow** to handle both predefined questions and dynamic free-form queries. It allows users to answer a series of predefined questions and then interact freely with the chatbot, leveraging LangFlow for intelligent responses.

---

## **Features**
1. **Predefined Questions Flow**:
   - Collects structured data from users (e.g., BHK type, square feet, locality).
   - Ensures all predefined questions are answered before transitioning to free-form queries.

2. **Free-Form Queries**:
   - Allows users to ask context-aware questions after completing the predefined flow.
   - Uses LangFlow's AI capabilities to generate intelligent responses.

3. **Session Management**:
   - Temporarily stores user responses during the session.
   - Optionally persists data using a database.

4. **LangFlow Integration**:
   - Utilizes LangFlow for dynamic, AI-powered responses.

---

## **Project Structure**
```plaintext
├── src
│   ├── app.module.ts
│   ├── main.ts
│   ├── chatbot
│   │   ├── chatbot.module.ts
│   │   ├── chatbot.controller.ts
│   │   ├── chatbot.service.ts
│   ├── database
│   │   ├── database.module.ts
│   │   ├── database.service.ts
│   ├── langflow
│   │   ├── langflow.module.ts
│   │   ├── langflow.service.ts
├── package.json
├── tsconfig.json
```

---

## **Setup Instructions**

### **Prerequisites**
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Python** (v3.11 or compatible)
- **LangFlow** installed via pip

### **Step 1: Clone the Repository**
```bash
git clone <repository-url>
cd chatbot-be1
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Setup LangFlow**
1. Install LangFlow using pip:
   ```bash
   pip install langflow
   ```
2. Start LangFlow:
   ```bash
   langflow
   ```
3. Verify LangFlow is running at `http://localhost:7860`.

### **Step 4: Set Environment Variables**
Add your OpenAI API key to the environment variables:
- **Windows**:
  ```cmd
  set OPENAI_API_KEY=<your-api-key>
  ```
- **Linux/Mac**:
  ```bash
  export OPENAI_API_KEY=<your-api-key>
  ```

### **Step 5: Start the Application**
Run the NestJS application:
```bash
npm run start
```

The chatbot will be available at `http://localhost:3000`.

---

## **Usage**

### **Predefined Questions Flow**
1. Send a POST request to `/chatbot/query` with the first answer:
   ```json
   {
     "query": "2BHK"
   }
   ```
   Response:
   ```json
   {
     "message": "Got it! How much square feet do you prefer?"
   }
   ```

2. Continue answering questions until the flow is complete.

### **Free-Form Queries**
Once the predefined flow is complete, send free-form questions to the same endpoint:
```json
{
  "query": "How many hospitals are nearby?"
}
```
Response:
```json
{
  "message": "There are 5 hospitals within 2 km of your specified locality."
}
```

---

## **Testing the API**

### **Using Postman**
1. Create a POST request to `http://localhost:3000/chatbot/query`.
2. Add headers:
   - `Content-Type: application/json`
3. Add a JSON body with the query:
   ```json
   {
     "query": "2BHK"
   }
   ```
4. Send the request and verify the response.

### **Using curl**
```bash
curl -X POST http://localhost:3000/chatbot/query \
-H "Content-Type: application/json" \
-d '{"query": "2BHK"}'
```

---

## **Troubleshooting**

### **Common Errors**
1. **LangFlow not running**:
   - Ensure LangFlow is started:
     ```bash
     langflow
     ```
   - Verify it’s running at `http://localhost:7860`.

2. **Invalid OpenAI API Key**:
   - Add a valid API key:
     ```bash
     set OPENAI_API_KEY=<your-api-key>  # Windows
     export OPENAI_API_KEY=<your-api-key>  # Linux/Mac
     ```

3. **Connection Issues**:
   - Ensure LangFlow and the chatbot are running on the same machine or accessible over the network.

4. **Method Not Allowed**:
   - Confirm the correct HTTP method (POST) and endpoint (`/api/v1/predict`).

---

## **Future Enhancements**
- Add database integration for persistent session storage.
- Improve NLP capabilities using additional LangFlow components.
- Support multiple users with distinct sessions.



