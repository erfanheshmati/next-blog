import { getServerSession } from 'next-auth';
import Container from '../ui/container';
import { authOption } from '@/libs/next-auth';
import UserAvatar from './user-avatar/user-avatar';
import Logo from './logo';
import NavbarRoutes from './navbar-routes';
import NavbarMobileMenu from './navbar-mobile-menu';

const Navbar = async () => {
  const session = await getServerSession(authOption);

  return (
    <nav className='border-b py-3'>
      <Container isFullHeight className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-x-6'>
          {/* Navbar Logo */}
          <div className='hidden md:block'>
            <Logo />
          </div>

          {/* Navbar Links */}
          <div className='hidden md:block'>
            <NavbarRoutes session={session} />
          </div>

          {/* Navbar Mobile View */}
          <div className='block md:hidden'>
            <NavbarMobileMenu session={session} />
          </div>
        </div>

        {/* Navbar User Avatar */}
        <div className='flex items-center justify-normal gap-x-6'>
          <UserAvatar session={session} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
