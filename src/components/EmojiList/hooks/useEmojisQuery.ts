import { Emoji } from '@/common/types';
import { getEmojis } from '@/http';
import { useCallback, useEffect, useState } from 'react';

export function useEmojisQuery() {
  const [data, setData] = useState<Emoji[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleFetchEmojis = useCallback(async () => {
    setLoading(true);
    setError(null);

    const { data: emojisData = [], error } = await getEmojis({});

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    setData(emojisData);
    setLoading(false);
  }, []);

  useEffect(() => {
    void handleFetchEmojis();
  }, [handleFetchEmojis]);

  return { data, loading, error };
}
