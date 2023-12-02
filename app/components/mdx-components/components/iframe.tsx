import classNames from 'classnames';

import { type IframeTypes } from '~/types/mdx-interface';

const IFrame = ({ children, title, ...rest }: IframeTypes) => {
  return (
    <iframe
      {...rest}
      title={title}
      className={classNames(`max-w-full mx-auto my-10`, { 'h-[950px]': title.toLowerCase().includes('instagram') })}
    >
      {children}
    </iframe>
  );
};

export default IFrame;
