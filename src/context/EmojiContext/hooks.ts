import { useContext } from 'react';
import { EmojiContext } from './context';

export const useEmojiContext = () => {
  return useContext(EmojiContext);
};
