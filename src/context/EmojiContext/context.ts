import { createContext } from 'react';
import { noop } from '@/common/utils';

export type EmojiContext = {
  emoji: string;
  setEmoji: (emoji: string) => void;
};

export const EmojiContext = createContext<EmojiContext>({
  emoji: '🍕',
  setEmoji: noop,
});
