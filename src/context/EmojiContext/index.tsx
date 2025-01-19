import { memo, ReactNode, useCallback, useMemo, useState } from 'react';
import { EmojiContext } from './context';

type EmojiProviderProps = {
  children: ReactNode;
};

const EmojiProviderComponent = ({ children }: EmojiProviderProps) => {
  const [emoji, setEmoji] = useState('🍕');

  const handleSetEmoji = useCallback((newEmoji: string) => {
    setEmoji(newEmoji);
  }, []);

  const contextValue = useMemo(
    () => ({
      emoji,
      setEmoji: handleSetEmoji,
    }),
    [emoji, handleSetEmoji],
  );

  return (
    <EmojiContext.Provider value={contextValue}>
      {children}
    </EmojiContext.Provider>
  );
};

export const EmojiProvider = memo(EmojiProviderComponent);
