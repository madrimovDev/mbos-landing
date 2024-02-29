import { useEffect } from 'react';

const useKeyDown = (
  targetKey: string,
  callback: () => void,
  condition = true
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (condition && event.key === targetKey) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [targetKey, condition, callback]);
};

export default useKeyDown;
