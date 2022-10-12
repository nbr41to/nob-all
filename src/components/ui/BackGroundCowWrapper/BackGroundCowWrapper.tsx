import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const BackGroundCowWrapper: FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-300 bg-[url("../public/bg_image.png")] bg-contain  bg-repeat'>
      <div className="min-h-screen bg-white/70">{children}</div>
    </div>
  );
};
