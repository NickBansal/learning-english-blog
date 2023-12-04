import classNames from 'classnames';

import { type IframeTypes } from '~/types/mdx-interface';

const IFrame = ({ children, title, ...rest }: IframeTypes) => {
  return (
    <iframe
      {...rest}
      title={title}
      className={classNames(
        `max-w-full mx-auto my-10 dark:shadow-[0px_1px_8px_4px_white] shadow-[0px_1px_16px_4px_black]`,
        {
          'h-[950px]': title.toLowerCase().includes('instagram')
        }
      )}
    >
      {children}
    </iframe>
  );
};

export default IFrame;
