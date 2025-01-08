export interface AiLog {
  id: number;
  userId: string;
  userResponse: string;
  aiAnalysis: string; // AI's analysis of the user's response
  timestamp: Date;
}
