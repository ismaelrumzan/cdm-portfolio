import { cache } from "react";
import Airtable from "airtable";

export const getPortfolioItems = cache(async () => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
    process.env.AIRTABLE_BASE!
  );
  const records = await base("Items")
    .select({
      view: "Grid view",
    })
    .all();
  return records;
});
