interface Props {
  isActive: boolean;
}

export const headerLinksDesktop = ({ isActive }: Props) =>
  isActive
    ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-2 pt-1 border-b-2 text-md font-medium'
    : 'border-transparent text-gray-500 dark:text-white inline-flex items-center px-2 pt-1 border-b-2 text-md font-medium';

export const headerLinksMobile = ({ isActive }: Props) =>
  isActive
    ? 'bg-teal-50 border-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-600'
    : 'border-transparent text-gray-500 hover:bg-gray-200 hover:border-gray-300 hover:text-black block pl-3 pr-4 py-2 bl-4 text-base font-medium dark:text-white dark:hover:text-gray-300 dark:hover:bg-gray-600';
