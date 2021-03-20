/// <reference types="next" />
/// <reference types="next/types/global" />

interface Attributes {
  title: string;
  date: string;
  thumbnail: string;
  // html: string; // unused but there automatically
}
interface RecipeProps {
  attributes: Attributes;
  content: React.FC<Attributes>;
}

declare module '*.md' {
  const attributes: Attributes;
  const react: React.FC<Attributes>;
  export { attributes, react as content };
}
