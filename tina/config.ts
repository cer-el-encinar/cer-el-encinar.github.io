import { defineConfig, type Template } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master';

const heroBlock: Template = {
  name: 'hero',
  label: 'Hero',
  fields: [
    { name: 'text', label: 'Text', type: 'rich-text' },
    { name: 'imgSrc', label: 'Image', type: 'image' },
    { name: 'url', label: 'URL', type: 'string' },
    { name: 'button', label: 'Button', type: 'string' },
    { name: 'id', label: 'ID', type: 'string' },
  ],
  ui: {
    itemProps: (item) => ({ label: `Hero: ${item?.id}` }),
  },
};

const donationsBlock: Template = {
  name: 'donations',
  label: 'Donations',
  fields: [{ type: 'string', name: 'id', label: 'ID' }],
  ui: {
    itemProps: (item) => ({ label: `Donations: ${item?.id}` }),
  },
};

const latestPostsBlock: Template = {
  name: 'latestPosts',
  label: 'Latest Posts',
  fields: [{ type: 'string', name: 'id', label: 'ID' }],
  ui: {
    itemProps: (item) => ({ label: `Latest Posts: ${item?.id}` }),
  },
};

const textBlock: Template = {
  name: 'text',
  label: 'Text',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'rich-text',
    },
    {
      name: 'id',
      label: 'ID',
      type: 'string',
    },
  ],
  ui: {
    itemProps: (item) => ({ label: `Text: ${item?.id}` }),
  },
};

const headingBlock: Template = {
  name: 'heading',
  label: 'Heading',
  fields: [
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
    },
  ],
  ui: {
    itemProps: (item) => ({ label: `Heading: ${item?.heading}` }),
  },
};

const callToActionBlock: Template = {
  name: 'cta',
  label: 'Call To Action',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'rich-text',
    },
    {
      name: 'id',
      label: 'ID',
      type: 'string',
    },
  ],
  ui: {
    itemProps: (item) => ({ label: `CTA: ${item?.id}` }),
  },
};

const socialsBlock: Template = {
  name: 'socials',
  label: 'Socials',
  fields: [
    {
      name: 'id',
      label: 'ID',
      type: 'string',
    },
  ],
  ui: {
    itemProps: (item) => ({ label: `Socials: ${item?.id}` }),
  },
};

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        format: 'mdx',
        ui: {
          router: (props) =>
            `/noticias/${props.document._sys.filename.toLowerCase()}`,
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          { type: 'string', name: 'slug', label: 'Slug', required: true },
          { type: 'image', name: 'cover', label: 'Cover' },
          { type: 'datetime', name: 'date', label: 'Date', required: true },
          {
            name: 'blocks',
            label: 'Blocks',
            type: 'object',
            list: true,
            templates: [
              heroBlock,
              donationsBlock,
              textBlock,
              latestPostsBlock,
              headingBlock,
              callToActionBlock,
              socialsBlock,
            ],
          },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        ui: {
          router: (props) => `/${props.document._sys.filename.toLowerCase()}`,
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            required: true,
          },
          {
            name: 'blocks',
            label: 'Blocks',
            type: 'object',
            list: true,
            templates: [
              heroBlock,
              donationsBlock,
              textBlock,
              latestPostsBlock,
              headingBlock,
              callToActionBlock,
              socialsBlock,
            ],
          },
        ],
      },
      {
        name: 'social',
        label: 'Social',
        path: 'content/social',
        format: 'toml',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'url',
            label: 'URL',
            required: true,
          },
          {
            type: 'string',
            name: 'icon',
            label: 'Icon',
            required: true,
            options: ['FaFacebook', 'FaInstagram', 'FaEnvelope'],
          },
        ],
      },
      {
        name: 'donation',
        label: 'Donations',
        path: 'content/donations',
        format: 'toml',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true,
          },
          {
            type: 'string',
            name: 'url',
            label: 'URL',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Image',
            required: true,
          },
        ],
      },
    ],
  },
});
