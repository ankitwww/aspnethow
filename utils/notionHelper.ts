import { Client } from "@notionhq/client";
import { Entry } from "../types/Entry";
const NotionClient = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  export const getEntries = async () => {
    let facts: Entry[] = [];
    if (typeof process.env.NOTION_DOTNETDB === "string") {
      const pages = await NotionClient.databases.query({
        database_id: process.env.NOTION_DOTNETDB,
      });
      pages?.results.forEach((entry: any) => {
        if (entry.properties) {
         console.log(entry.properties);
          const properties = entry.properties;
          console.log(JSON.stringify(properties["Title"]));
          facts.push({
            text: properties["Text"]?.rich_text[0]?.plain_text || null,
            displayOrder: properties["DisplayOrder"]?.title[0]?.plain_text || null,
            type: properties["Type"]?.select?.name || null,
            link: properties["Link"]?.rich_text[0]?.plain_text || null,
            tags: properties["Tags"]?.multi_select.map((ms: any) => ms.name) || null,
            optionA: properties["OptionA"]?.rich_text[0]?.plain_text || null,
            optionB: properties["OptionB"]?.rich_text[0]?.plain_text || null,
            optionC: properties["OptionC"]?.rich_text[0]?.plain_text || null,
          });
        }
      });
    }
    console.log(facts);
    return facts.sort((a,b) => a.displayOrder - b.displayOrder);
  };