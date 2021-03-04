export interface State {
  user: User | null;
  pending: boolean;
  error: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
