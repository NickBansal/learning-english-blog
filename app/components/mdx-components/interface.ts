export interface AnchorTypes {
  internal: boolean;
  children: React.ReactNode;
  href: string;
}

export interface HeadingTypes {
  id: string;
  children: React.ReactNode;
  level?: string;
}

export interface ChildrenNodes {
  children: React.ReactNode;
}

export interface ChildrenString {
  children: string;
}
