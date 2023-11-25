/* eslint-disable react/no-unstable-nested-components */
import Markdown from 'markdown-to-jsx';

import Anchor from './components/anchor';
import BlockQuote from './components/blockquote';
import Heading from './components/heading';
import OL from './components/ol';
import Text from './components/text';
import UL from './components/ul';
import { type ChildrenString } from './interface';

function JSMarkdown({ children, ...rest }: ChildrenString) {
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
          a: Anchor,
          p: Text,
          blockquote: BlockQuote
        }
      }}
      {...rest}
    >
      {children}
    </Markdown>
  );
}

export default JSMarkdown;
