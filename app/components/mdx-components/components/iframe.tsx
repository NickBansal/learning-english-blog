import { type IframeTypes } from '~/types/mdx-interface';

const IFrame = ({ children, ...rest }: IframeTypes) => {
  return (
    <iframe {...rest} className="max-w-full mx-auto my-10">
      {children}
    </iframe>
  );
};

export default IFrame;
