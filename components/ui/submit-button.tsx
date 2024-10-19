'use client';

import { useFormStatus } from 'react-dom';

type ButtonProps = {
  submitValue: string;
};

const SubmitButton = ({ submitValue }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      value={submitValue}
      disabled={pending}
      className='w-full rounded-md bg-black px-5 py-3 text-white hover:bg-gray-800 disabled:bg-gray-400'
    >
      {submitValue}
    </button>
  );
};

export default SubmitButton;
