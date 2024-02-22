export interface ButtonTypes {
  outline?: boolean;
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export interface InternalLinkTypes extends ButtonTypes {
  to: string;
  fullWidth?: boolean;
}

export interface LinkButtonTypes extends ButtonTypes {
  href: string;
}

export interface ButtonGroupsTypes {
  children: React.ReactNode;
  className?: string;
}

export interface SubmitButtonTypes {
  children: React.ReactNode;
  fullWidth?: boolean;
  value?: string;
}
