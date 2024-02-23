export interface HeadingTypes {
  id: string;
  children: React.ReactNode;
  level?: string;
}

export interface IframeTypes {
  children: React.ReactNode;
  title: string;
}

export interface ChildrenNodes {
  children: React.ReactNode;
}

export interface HeaderTypes extends ChildrenNodes {
  className?: string;
}

export interface AnchorTypes {
  children: React.ReactNode;
  href: string;
}

export type ObjectOfStrings = Record<string, string>;
