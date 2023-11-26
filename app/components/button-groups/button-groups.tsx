interface ButtonGroupsTypes {
  children: React.ReactNode;
  className?: string;
}

export function ButtonsGroup({ children, className = '' }: ButtonGroupsTypes) {
  return <div className={`inline-flex space-x-4 ${className}`}>{children}</div>;
}
