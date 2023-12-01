/* eslint-disable react/no-unstable-nested-components */
import Markdown from 'markdown-to-jsx';

import { type ObjectOfStrings } from '../../types/mdx-interface';

import Anchor from './components/anchor';
import BlockQuote from './components/blockquote';
import Heading from './components/heading';
import Image from './components/image';
import LI from './components/li';
import OL from './components/ol';
import Text from './components/text';
import UL from './components/ul';

function JSMarkdown({ children, ...rest }: ObjectOfStrings) {
  return (
    <Markdown
      options={{
        overrides: {
          h1: (props) => <Heading {...props} level="h1" />,
          h2: (props) => <Heading {...props} level="h2" />,
          h3: (props) => <Heading {...props} level="h3" />,
          h4: (props) => <Heading {...props} level="h4" />,
          h5: (props) => <Heading {...props} level="h5" />,
          ul: UL,
          ol: OL,
          li: LI,
          a: Anchor,
          p: Text,
          blockquote: BlockQuote,
          img: Image
        }
      }}
      {...rest}
    >
      {children}
    </Markdown>
  );
}

export default JSMarkdown;
