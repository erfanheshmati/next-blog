'use client';

import { CheckUserEmail, CheckUserPassword } from '@/actions/auth-action';
import SubmitButton from '../ui/submit-button';
// import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginForm = () => {
  const [error, setError] = useState('');

  return (
    <form
      action={async (formdata) => {
        const email = formdata.get('email');
        const password = formdata.get('password');

        const checkUserEmail = await CheckUserEmail(formdata);
        const checkUserPassword = await CheckUserPassword(formdata);

        if (!checkUserEmail?.success) {
          // redirect('/register');
          setError('کاربری با این ایمیل در سیستم وجود ندارد!');
        } else if (!checkUserPassword?.success) {
          setError('رمزعبور وارد شده اشتباه است!');
        } else {
          signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          });
        }
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-center text-3xl font-bold'>خوش آمدید</h2>
      <input
        type='email'
        placeholder='ایمیل'
        className='rounded-md border p-2 shadow-sm'
        name='email'
        required
      />
      <input
        type='password'
        placeholder='رمز عبور'
        className='rounded-md border p-2 shadow-sm'
        name='password'
        required
      />
      <SubmitButton submitValue='ورود' />

      {/* Error Message */}
      {error && <span className='text-sm text-red-500'>{error}</span>}
    </form>
  );
};

export default LoginForm;
