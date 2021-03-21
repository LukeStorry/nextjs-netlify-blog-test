/// <reference types="next" />
/// <reference types="next/types/global" />

interface Attributes {
  title: string;
  description: string;
  thumbnail: string;
  prep_time: int;
  cook_time: string;
  ingredients: string;

  html: string; // unusure
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
