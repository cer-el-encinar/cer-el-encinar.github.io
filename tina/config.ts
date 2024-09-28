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

const tocBlock: Template = {
  name: 'toc',
  label: 'TOC',
  fields: [{ type: 'string', name: 'id', label: 'ID' }],
  ui: {
    itemProps: (item) => ({ label: `TOC: ${item?.id}` }),
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

const spacingBlock: Template = {
  name: 'spacing',
  label: 'Spacing',
  fields: [
    {
      name: 'size',
      label: 'Size',
      type: 'string',
      options: [
        { value: 'h-2', label: 'Small' },
        { value: 'h-8', label: 'Medium' },
        { value: 'h-16', label: 'Big' },
      ],
    },
  ],
  ui: {
    itemProps: (item) => ({ label: `Spacing: ${item?.size}` }),
  },
};

const messageBox: Template = {
  name: 'messageBox',
  label: 'Message Box',
  fields: [
    {
      name: 'type',
      label: 'Type',
      type: 'string',
      options: [
        { value: 'info', label: 'Info' },
        { value: 'warning', label: 'Warning' },
        { value: 'danger', label: 'Danger' },
      ],
    },
    { name: 'text', label: 'Text', type: 'rich-text' },
  ],
  ui: {
    itemProps: (item) => ({ label: `Message Box: ${item?.type}` }),
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
        name: 'wiki',
        label: 'Wiki',
        path: 'content/wiki',
        format: 'mdx',
        ui: {
          router: (props) =>
            `/wiki/${props.document._sys.relativePath.substring(
              0,
              props.document._sys.relativePath.length - 4
            )}`,
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
            name: 'blocks',
            label: 'Blocks',
            type: 'object',
            list: true,
            templates: [
              tocBlock,
              heroBlock,
              donationsBlock,
              textBlock,
              latestPostsBlock,
              headingBlock,
              callToActionBlock,
              socialsBlock,
              spacingBlock,
            ],
          },
        ],
      },
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
              spacingBlock,
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
              spacingBlock,
              messageBox,
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
          {
            type: 'string',
            name: 'infoUrl',
            label: 'Info URL',
            required: false,
          },
        ],
      },
    ],
  },
});
