'use client';

import { cn } from '@/libs/utils';
import { Session } from 'next-auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarRoutesProps = {
  session: Session | null;
  vertical?: boolean;
};

const routes = [
  {
    label: 'خانه',
    path: '/',
  },
  {
    label: 'بلاگ',
    path: '/blog',
  },
];

const NavbarRoutes = ({ session, vertical = false }: NavbarRoutesProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn('flex w-full items-center justify-start gap-2', {
        'flex-col': vertical,
      })}
    >
      {routes.map(({ label, path }) => (
        <Link
          key={label}
          href={path}
          className={cn(
            'flex w-full items-center justify-center py-1 text-lg md:w-14',
            {
              'rounded-md bg-black text-white': pathname === path,
            },
          )}
        >
          {label}
        </Link>
      ))}

      {/* Admin Route */}
      {session?.user.userRole === 'ADMIN' && (
        <Link
          href='/admin'
          className={cn(
            'flex w-full items-center justify-center py-1 text-lg md:w-14',
            {
              'rounded-md bg-black text-white': pathname === '/admin',
            },
          )}
        >
          ادمین
        </Link>
      )}
    </div>
  );
};

export default NavbarRoutes;
