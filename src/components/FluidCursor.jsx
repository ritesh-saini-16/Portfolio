import { useEffect, useRef } from 'react';
import fluidCursor from '@/hooks/use-FluidCursor';

const FluidCursor = () => {
  const init = useRef(false);

  useEffect(() => {
    if (!init.current) {
      init.current = true;
      fluidCursor();
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 z-0 pointer-events-none">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  );
};

export default FluidCursor;
