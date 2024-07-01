import { User } from '@prisma/client';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUserFirstCharacter(user: User) {
  if (user) {
    if (user.name.split(' ').length > 1)
      return (
        user.name.split(' ')[0].charAt(0).toUpperCase() +
        user.name.split(' ')[1].charAt(0).toUpperCase()
      );
    return user.name.charAt(0);
  }
  return '';
}
