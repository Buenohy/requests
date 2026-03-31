import useUsers from '../hooks/use-users';

export default function UsersList() {
  const { users, isLoadingUsers } = useUsers();

  if (isLoadingUsers) {
    return <div>Carregando todos os usuários...</div>;
  }

  return (
    <ul>
      {users.map((users) => (
        <li key={users.id}>
          Nome: {users.name} / Username: {users.id}
        </li>
      ))}
    </ul>
  );
}
