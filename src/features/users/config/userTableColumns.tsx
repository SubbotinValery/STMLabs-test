import type { Column } from '@/shared/components/Table/Table';
import type { User } from '../types/user.types';

export const userTableColumns: Column<User>[] = [
  { key: 'name', label: 'Имя' },
  {
    key: 'avatarThumb',
    label: 'Аватар',
    render: (value) => <img src={value as string} alt="Avatar" />,
  },
  { key: 'location', label: 'Местоположение' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Телефон' },
  { key: 'registeredDate', label: 'Дата регистрации' },
];
