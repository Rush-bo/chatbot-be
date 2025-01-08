import { PredefinedData } from "./predefined-data.interface";


export interface ChatSession {
  userId: string;
  predefinedData: PredefinedData;
  freeFormQueries: string[];
}
