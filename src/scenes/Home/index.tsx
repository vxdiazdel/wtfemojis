import { memo, useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { EmojiList } from '@/components/EmojiList';
import { useEmojiContext } from '@/context/EmojiContext/hooks';
import { Footer } from '@/components/Footer';
import { Notification } from '@/components/Notification';
import { NoResults } from '@/components/NoResults';
import { Loader } from '@/components/Loader';
import { useEmojisQuery } from '@/components/EmojiList/hooks/useEmojisQuery';

const HomeSceneComponent = () => {
  const [searchText, setSearchText] = useState('');
  const { emoji, setEmoji } = useEmojiContext();
  const { data: emojisData, loading, error } = useEmojisQuery();

  const handleSearchChange = useCallback((value: string) => {
    setSearchText(value);
  }, []);

  const handleSelectEmoji = useCallback(
    (newEmoji: string) => {
      if (newEmoji === emoji) return;

      setEmoji(newEmoji);
      toast(<Notification emoji={newEmoji} />, {
        autoClose: 3000,
        position: 'bottom-right',
      });
    },
    [emoji, setEmoji],
  );

  const filteredEmojis = useMemo(() => {
    if (!searchText) return emojisData;

    return emojisData.filter((emoji) => emoji.name.includes(searchText));
  }, [emojisData, searchText]);

  const content = useMemo(() => {
    if (loading) {
      return <Loader className="col-span-full" />;
    }

    if (error) {
      return <div>Oh no, an error occurred. 🥲</div>;
    }

    return (
      <>
        <EmojiList emojis={filteredEmojis} onClick={handleSelectEmoji} />
        {!filteredEmojis.length ? <NoResults /> : null}
      </>
    );
  }, [error, filteredEmojis, handleSelectEmoji, loading]);

  return (
    <>
      <Card>
        <section className="flex flex-col gap-2 text-center">
          <div className="flex align-middle justify-center gap-1">
            <h1 className="text-3xl bg-gradient-to-r from-[#4776e6] to-[#8e54e9] text-transparent bg-clip-text">
              wtfEmojis
            </h1>
            <span className="text-3xl">{emoji}</span>
          </div>
          <h2 className="text-xl">Copy/paste emojis for the web.</h2>
        </section>

        <section className="mt-4 text-center">
          <Input
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search 🧐"
            className="p-4 rounded-md w-full md:w-80"
          />
        </section>

        <section className="mt-4">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(75px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
            {content}
          </div>
        </section>
      </Card>

      <Footer className="mt-12 flex align-middle gap-1 text-sm text-white justify-center">
        <p>Made with ❤️ using React, Tailwind & Typescript</p>
        <span>© {new Date().getFullYear()}</span>
      </Footer>
    </>
  );
};

export const HomeScene = memo(HomeSceneComponent);
