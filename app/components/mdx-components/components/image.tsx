import { type ObjectOfStrings } from '../../../types/mdx-interface';

function Image({ src, ...rest }: ObjectOfStrings) {
  return <img {...rest} className="my-8 sm:my-12" src={src} />;
}

export default Image;
