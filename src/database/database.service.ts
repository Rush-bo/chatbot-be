import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  private sessions: Record<string, any> = {};

  async saveSession(data: any): Promise<void> {
    // Save session data to a database or in-memory store
    this.sessions[data.userId] = data;
  }

  async getSession(userId: string): Promise<any> {
    // Retrieve session data from the store
    return this.sessions[userId];
  }
}
