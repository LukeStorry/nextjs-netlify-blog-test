/// <reference types="next" />
/// <reference types="next/types/global" />

interface Attributes {
    thumbnail:string,
    title:string,
//   [key: string]: string | string[] | {}[];
}
interface PostProps {
  blogpost: { attributes: Attributes; content: React.FC<Attributes> };
}

declare module '*.md' {
  const attributes: Attributes;
  const react: React.FC<Attributes>;
  export { attributes, react as content };
}
