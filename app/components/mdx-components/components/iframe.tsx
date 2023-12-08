import classNames from 'classnames';

import { type IframeTypes } from '~/types/mdx-interface';

const IFrame = ({ children, title, ...rest }: IframeTypes) => {
  return (
    <iframe
      {...rest}
      title={title}
      className={classNames(`max-w-full mx-auto my-10 shadow-[0px_1px_16px_4px_#939292]`, {
        'h-[950px]': title.toLowerCase().includes('instagram')
      })}
    >
      {children}
    </iframe>
  );
};

export default IFrame;
