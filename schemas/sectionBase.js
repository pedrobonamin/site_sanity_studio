export default {
  title: "Section Base",
  name: "sectionBase",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "backgroundColor",
      title: "Section Background Color",
      type: "string",
    },
    {
      title: "Content",
      name: "contentBlock",
      type: "reference",
      to: { type: "contentBlock" },
    },
  ],
};
