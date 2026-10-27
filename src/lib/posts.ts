import { getCollection } from 'astro:content';
export async function visiblePosts() {
  return (await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
