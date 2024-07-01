import { User } from '@prisma/client';

export type NextUserResponse = {
  user: User;
  error: string;
};
