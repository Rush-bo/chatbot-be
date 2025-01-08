export interface ChatLog {
  id: number;
  userSessionId: number; // Links to the user session
  questionId: number; // Links to the question
  userResponse: string; // User's response
  botPrompt: string; // Bot's prompt
  timestamp: Date;
}
