import {} from 'react';
import { useUsers } from './features/users/hooks/useUsers';

function App() {
  const { users } = useUsers();

  return (
    <>
      <div>STMLABS-test</div>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Изображение</th>
            <th>Метоположение</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Дата регистрации</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <img src={user.avatarThumb} alt={user.name} />
              </td>
              <td>{user.location}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.registeredDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
