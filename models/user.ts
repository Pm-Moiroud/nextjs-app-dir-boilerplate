import { Account, Session } from './auth';
import { TimeStamps } from './commons';

export interface User extends TimeStamps {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  emailVerified?: boolean;
  accounts?: Account;
  sessions?: Session;
}
