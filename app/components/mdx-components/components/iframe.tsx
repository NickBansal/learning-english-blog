import { type IframeTypes } from '~/types/mdx-interface';

const IFrame = ({ children, ...rest }: IframeTypes) => {
  return (
    <div className="w-full mx-auto my-10">
      <center>
        <iframe {...rest}>{children}</iframe>
      </center>
    </div>
  );
};

export default IFrame;
