'use server';

import prismadb from '@/libs/prismadb';
import { compareSync, hash } from 'bcrypt';

// Create New User
export const CreateUserAction = async (formdata: FormData) => {
  try {
    const { name, email, password } = Object.fromEntries(formdata);

    const hashedPassword = await hash(password as string, 12);

    const user = await prismadb.user.create({
      data: {
        name: name as string,
        email: email as string,
        hashedPassword,
      },
    });

    if (!user) return { success: false };

    return { success: true };
  } catch (error) {
    console.log('CreateUsreAction', error);
    return { success: false };
  }
};

// Check User Email
export const CheckUserEmail = async (formdata: FormData) => {
  try {
    const { email } = Object.fromEntries(formdata);

    const user = await prismadb.user.findUnique({
      where: {
        email: email as string,
      },
    });

    if (!user) return { success: false };

    return { success: true };
  } catch (error) {
    console.log('CheckUserEmail', error);
    return { success: false };
  }
};

// Check User Password
export const CheckUserPassword = async (formdata: FormData) => {
  try {
    const { email, password } = Object.fromEntries(formdata);

    const user = await prismadb.user.findUnique({
      where: {
        email: email as string,
      },
    });

    if (!user || !compareSync(password as string, user.hashedPassword)) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.log('CheckUserPassword', error);
    return { success: false };
  }
};
