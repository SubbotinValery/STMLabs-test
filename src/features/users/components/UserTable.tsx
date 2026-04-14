import { useMemo } from 'react';
import { Table } from '@/shared/components/Table/Table';
import { useUsers } from '../hooks/useUsers';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';
import { UserSearch } from './UserSearch';
import { userTableColumns } from '../config/userTableColumns';
import { filterUsers } from '../utils/filterUsers';

export function UserTable() {
  const { users, loading, error } = useUsers();
  const { searchQuery, debouncedQuery, setSearchQuery } = useDebouncedSearch(300);

  const filteredUsers = useMemo(() => {
    return filterUsers(users, debouncedQuery);
  }, [users, debouncedQuery]);

  const getEmptyMessage = (): string => {
    if (users.length === 0) return 'Список пользователей пуст';
    if (debouncedQuery) return 'Пользователи не найдены';
    return 'Нет данных';
  };

  return (
    <div className="user-table-container">
      <UserSearch value={searchQuery} onChange={setSearchQuery} disabled={loading} />
      <Table
        columns={userTableColumns}
        data={filteredUsers}
        loading={loading}
        error={error}
        emptyMessage={getEmptyMessage()}
      />
    </div>
  );
}
