export interface HeadingTypes {
  id: string;
  children: React.ReactNode;
  level?: string;
}

export interface IframeTypes {
  children: React.ReactNode;
  width: string;
  height: string;
  src: string;
  allow: string;
  allowFullScreen: boolean;
  frameBorder: string;
  title: string;
}

export interface ChildrenNodes {
  children: React.ReactNode;
}

export interface AnchorTypes {
  children: React.ReactNode;
  href: string;
}

export type ObjectOfStrings = Record<string, string>;
