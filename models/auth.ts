import { User } from './user';

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: Number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  user?: User;
}

export interface Session {
  id: string;
  userId: string;
  expires: Date;
  sessionToken: string;
  user?: User;
}

export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}
