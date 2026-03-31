import React from 'react';
import { fetcher } from '../helpers/api';
import type { User } from '../models/user';

export default function useUser() {
  const [user, setUser] = React.useState<User | null>(null);
  const [requestStatus, setRequestStatus] = React.useState<
    'idle' | 'loading' | 'saving'
  >('idle');

  async function getUser(username: string) {
    try {
      setRequestStatus('loading');
      const data = await fetcher(`/users/${username}`);
      setUser(data);
    } catch (event) {
      console.error(event);
      alert('Erro ao buscar usuário');
    } finally {
      setRequestStatus('idle');
    }
  }

  return {
    user,
    userRequestStatus: requestStatus,
    getUser,
  };
}
