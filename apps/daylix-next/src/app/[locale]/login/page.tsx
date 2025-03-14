'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button, Input } from '@daylix-ui/components';
import { FormContainer } from '@daylix/components';
import { loginUser } from '@daylix/core/data-access';
import { useAuth } from '@daylix/auth';

export default function LoginPage() {
  const t = useTranslations('Login');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const data = await loginUser(email, password);

      // Using login method from Auth context
      login({
        id: String(data.user.id),
        username: data.user.username,
        email: data.user.email
      });

      // Set JWT in a cookie
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jwt: data.jwt,
          user: data.user
        }),
      });

      router.push('/');
      router.refresh();
    } catch (err: Error | unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage || t('loginFailed'));
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer title={t('title')}>

        {error && (
          <div className="mb-4 p-3 rounded-md bg-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={t('emailLabel')}
            required
            autoComplete="email"
            fullWidth
            size="md"
          />

          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={t('passwordLabel')}
            required
            autoComplete="current-password"
            fullWidth
            size="md"
          />

          <Button
            type="submit"
            disabled={isLoading}
            loading={isLoading}
            color="primary"
            fullWidth
          >
            {isLoading ? t('loggingIn') : t('loginButton')}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-300">
          <a href="#" className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">
            {t('forgotPassword')}
          </a>
        </div>

        <div className="mt-6 text-center text-sm text-gray-300">
          <p>
            {t('noAccount')}{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">
              {t('signUp')}
            </a>
          </p>
        </div>
    </FormContainer>
  );
}
