import type { User } from '../types/user.types';

export function filterUsers(users: User[], query: string): User[] {
  if (!query.trim()) return users;
  const lowerCaseQuery = query.toLowerCase().trim();
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(lowerCaseQuery) ||
      user.email.toLowerCase().includes(lowerCaseQuery)
  );
}
