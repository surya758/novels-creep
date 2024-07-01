import React from 'react';
import { cn } from '@/lib/utils';
import { IconType } from 'react-icons/lib';

type Props = {
  icon: IconType;
  className?: string;
  onClick: () => void;
  size?: number;
  color?: string;
};

const Icon = ({ icon: ActualIcon, size, color, className, onClick, ...rest }: Props) => {
  return (
    <ActualIcon
      size={size || 24}
      color={color || 'white'}
      {...rest}
      className={cn(className)}
      onClick={onClick}
    />
  );
};

export default Icon;
