import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getEntries = async (contentType) => {
  try {
    const entries = await client.getEntries({ content_type: contentType });
    return entries.items;
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return [];
  }
};
