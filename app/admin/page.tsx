import AdminPostList from '@/components/admin/admin-post-list';
import NewPostForm from '@/components/admin/new-post-form';
import Container from '@/components/ui/container';
import { authOption } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';

const Admin = async () => {
  const session = await getServerSession(authOption);

  if (!session || session?.user.userRole !== 'ADMIN')
    return (
      <div className='flex h-96 flex-col items-center justify-center text-red-500'>
        دسترسی غیر مجاز!
      </div>
    );

  return (
    <div>
      <Container className='mt-8 flex flex-col gap-x-10 md:flex-row'>
        {/* Create New Post */}
        <div className='w-full p-2'>
          <NewPostForm />
        </div>

        {/* Mobile View Break Line */}
        <div className='my-5 block border-b shadow-md md:hidden'></div>

        {/* New Posts Created List */}
        <div className='w-full p-2 md:h-96 md:overflow-y-auto'>
          <AdminPostList />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
