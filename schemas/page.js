export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sectionBase" }],
        },
      ],
    },
  ],
};
