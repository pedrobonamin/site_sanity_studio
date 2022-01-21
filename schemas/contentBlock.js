export default {
  title: "Content",
  name: "contentBlock",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "List",
      name: "list",
      type: "array",
      of: [{ type: "contentItemHeading" }, { type: "contentItemButton" }, { type: "contentItemText" }],
    },
    {
      title: "Order",
      name: "order",
      type: "array",
      of: [{ type: "number" }],
    },
  ],
};
