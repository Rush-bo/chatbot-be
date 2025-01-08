import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LangflowService {
  async getResponse(query: string, context: string): Promise<string> {
    try {
      const response = await axios.post('http://127.0.0.1:7860/api/v1/predict', {
        query,
        context,
      });
      return response.data.answer;
    } catch (error) {
      console.error('Error communicating with LangFlow API:', error);
      throw new Error('Could not fetch response from LangFlow');
    }
  }
}
