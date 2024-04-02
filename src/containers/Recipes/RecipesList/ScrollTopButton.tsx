import { UpButton } from 'components';
import { memo } from 'react';

const ScrollTopButton = memo(function ScrollTopButton() {
  return (
    <div className='fixed bottom-[15vh] z-10'>
      <UpButton />
    </div>
  );
});

export default ScrollTopButton;
