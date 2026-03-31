import useUser from '../hooks/use-user';

export default function UserInfo() {
  const { user, userRequestStatus, getUser } = useUser();

  if (userRequestStatus === 'loading') {
    return <div>Carregando usuário...</div>;
  }

  return (
    <ul>
      <li>Nome: {user?.name}</li>
      <li>Username: {user?.username}</li>
    </ul>
  );
}
