import { History, Home, ReceiptText, Settings } from "lucide-react";
export const MENU_LIST = [
  {
    name: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Billing",
    icon: ReceiptText,
    path: "/dashboard/billing",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

export const TEMPLATE_LIST = [
  {
    name: "Blog Title",
    description:
      "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    prompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    formControls: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    description:
      "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    prompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    slug: "generate-blog-content",
    formControls: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter your blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    description:
      "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    prompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    slug: "generate-blog-topic-ideas",
    formControls: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    description:
      "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    prompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    slug: "generate-youtube-seo-title",
    formControls: [
      {
        label: "Enter your keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter your outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    description:
      "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    prompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    slug: "generate-youtube-description",
    formControls: [
      {
        label: "Enter your topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter your outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    description:
      "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    prompt:
      "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",
    slug: "generate-youtube-tags",
    formControls: [
      {
        label: "Enter your title",
        field: "input",
        name: "title",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    description:
      "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    prompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    slug: "generate-instagram-post",
    formControls: [
      {
        label: "Enter your keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    description:
      "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    prompt:
      "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
    slug: "generate-instagram-hash-tag",
    formControls: [
      {
        label: "Enter your keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    description:
      "An AI tool that generate New and trending instagram idea depends on your niche",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    prompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format.",
    slug: "generate-instagram-post-reel-idea",
    formControls: [
      {
        label: "Enter your niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
];
