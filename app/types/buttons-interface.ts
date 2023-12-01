export interface ButtonTypes {
  outline?: boolean;
  children: React.ReactNode;
}

export interface InternalLinkTypes extends ButtonTypes {
  to: string;
}

export interface LinkButtonTypes extends ButtonTypes {
  href: string;
}

export interface ButtonGroupsTypes {
  children: React.ReactNode;
  className?: string;
}
