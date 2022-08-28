import { notion } from './client';

/* ブログPageのプロパティを取得 */
export const getProperty = async (pageId: string, propertyId: string) => {
  const response = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: propertyId,
  });

  return response;
};

/* PageのTitleを取得 */
export const getTitleInProperty = async (
  pageId: string,
  propertyId: string
) => {
  const response = await getProperty(pageId, propertyId);

  if (!response) return null;
  if (!('results' in response)) return null;
  if (!('title' in response.results[0])) return null;

  return response.results[0].title.plain_text;
};
/* PageのCategoryを取得 */
export const getCategoryInProperty = async (
  pageId: string,
  propertyId: string
) => {
  const response = await getProperty(pageId, propertyId);

  if (!response) return null;
  if (!('select' in response)) return null;
  if (!response.select) return null;

  return response.select.name;
};
/* PageのDateを取得 */
export const getDateInProperty = async (pageId: string, propertyId: string) => {
  const response = await getProperty(pageId, propertyId);

  if (!response) return null;
  if (!('date' in response)) return null;
  if (!response.date) return null;

  return response.date.start;
};

/* ブログ一覧を取得 */
export const getBlogPosts = async (pageSize = 999): Promise<BlogPost> => {
  const databaseId = '9079e0cafd0643c58051b83e04c16ca4';
  const posts = await notion.databases.query({
    database_id: databaseId,
    page_size: pageSize,
    filter: {
      or: [
        {
          property: 'Status',
          select: {
            equals: 'PUBLISH',
          },
        },
        {
          property: 'Date',
          date: {
            is_not_empty: true,
          },
        },
      ],
    },
  });

  const responseWithProperties = await Promise.all(
    posts.results.map(async (post) => {
      if (!('properties' in post)) return null;
      const pageId = post.id;
      const titlePropertyId = post.properties.Title.id;
      const categoryPropertyId = post.properties.Category.id;
      const datePropertyId = post.properties.Date.id;
      const icon: string =
        !!post.icon && 'emoji' in post.icon ? post.icon.emoji : '📝';

      /* 必要となるPropertiesの取得 */
      const title = await getTitleInProperty(pageId, titlePropertyId);
      const category = await getCategoryInProperty(pageId, categoryPropertyId);
      const atDate = await getDateInProperty(pageId, datePropertyId);

      const postInfo = {
        id: pageId,
        title: title || '',
        icon,
        category: category || 'なし',
        atDate: atDate || '',
      };

      return postInfo;
    })
  );

  return responseWithProperties.filter((post) => post !== null) as BlogPost;
};
