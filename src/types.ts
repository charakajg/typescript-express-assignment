export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
  }
  
  export interface User {
    id: number;
    name: string;
  }
  
  export interface Error {
    status?: number;
    message?: string;
  }
  