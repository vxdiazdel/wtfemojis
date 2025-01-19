import { memo, useCallback } from 'react';
import { List } from '@/components/List';
import { Emoji } from '@/common/types';

type EmojiListProps = {
  emojis: Emoji[];
  onClick?: (emoji: string) => void;
};

const EmojiListComponent = ({ emojis = [], onClick }: EmojiListProps) => {
  const handleClick = useCallback(
    async (emoji: Emoji) => {
      try {
        await navigator.clipboard.writeText(emoji.value);
      } catch (error) {
        console.error(error);
      }

      onClick?.(emoji.value);
    },
    [onClick],
  );

  const renderEmoji = useCallback(
    (emoji: Emoji) => {
      return (
        <div
          key={emoji.id}
          className="p-4 flex align-middle justify-center cursor-pointer hover:scale-125 hover:drop-shadow-lg transition-all"
          onClick={() => void handleClick(emoji)}
        >
          <span title={emoji.name} className="text-5xl">
            {emoji.value}
          </span>
        </div>
      );
    },
    [handleClick],
  );

  return <List<Emoji> data={emojis} renderItem={renderEmoji} />;
};

export const EmojiList = memo(EmojiListComponent);
