import { cn } from '@/libs/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  isFullHeight?: boolean;
};

const Container = ({ children, className, isFullHeight }: ContainerProps) => {
  return (
    <div
      className={cn('mx-auto max-w-7xl px-4', className, {
        'h-full': isFullHeight,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
