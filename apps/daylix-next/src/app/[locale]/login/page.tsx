'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button, Input } from '@daylix-ui/components';
import { FormContainer } from '@daylix/components';

export default function LoginPage() {
  const t = useTranslations('Login');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Here you would implement your actual authentication logic
      // This is a placeholder for demonstration purposes
      console.log('Login attempt with:', { email, password });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to home page after successful login
      router.push('/');
    } catch (err) {
      setError(t('loginFailed'));
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
