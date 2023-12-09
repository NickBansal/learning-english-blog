import type { ButtonGroupsTypes } from '~/types/buttons-interface';

export function ButtonsGroup({ children, className = '' }: ButtonGroupsTypes) {
  return (
    <div className={`flex flex-col md:flex-row space-y-2 md:space-y-0 w-full md:space-x-2 ${className}`}>
      {children}
    </div>
  );
}
