import { memo, useCallback, useState } from 'react';
import { useEmojiContext } from '@/context/EmojiContext/hooks';
import { useScroll } from '@/common/hooks/useScroll';

const navScrollClasses = 'bg-white/[.9] shadow-lg';

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { emoji } = useEmojiContext();

  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY === 0) {
      setIsScrolled(false);
      return;
    }

    setIsScrolled(true);
  }, []);

  useScroll(handleScroll);

  return (
    <nav
      className={`p-4 flex align-middle gap-1 sticky w-full top-0 left-0 transition-all z-10 ${
        isScrolled ? navScrollClasses : 'bg-white/[.75]'
      }`}
    >
      <div
        onClick={handleClick}
        className="flex align-middle gap-1 cursor-pointer group"
      >
        <span className="text-lg cursor-pointer bg-gradient-to-r from-[#4776e6] to-[#8e54e9] inline-block text-transparent bg-clip-text">
          wtfEmojis
        </span>
        <span className="text-2xl group-hover:animate-spin">{emoji}</span>
      </div>
    </nav>
  );
};

export const Navbar = memo(NavbarComponent);
