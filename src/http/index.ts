import type { Emoji } from '@/common/types';
import { get } from './client';
import type { FetchRequest } from './types';

export async function getEmojis({ query = {}, options = {} }: FetchRequest) {
  return get<Emoji[]>({ baseUrl: '/api', path: '/emojis', query, options });
}
