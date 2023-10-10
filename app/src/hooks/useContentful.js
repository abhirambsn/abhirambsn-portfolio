import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    host: "cdn.contentful.com",
  });

  const getData = async (name, returnSingleObjectAsArray = false) => {
    try {
      const entries = await client.getEntries({
        content_type: name,
        select: "fields",
      });
      return entries.items.length === 1 && returnSingleObjectAsArray
        ? entries.items[0].fields
        : entries.items.map((item) => item.fields);
    } catch (error) {
      console.error(`Error fetching data about ${name}`, error);
      return null;
    }
  };

  const getImageURL = async ({ id }) => {
    try {
      const image = await client.getAsset(id);
      console.log(image);
    } catch (error) {
      console.error(`Error fetching image about ${id}`, error);
      return null;
    }
  };

  return { getData, getImageURL };
};

export default useContentful;
