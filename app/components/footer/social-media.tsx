import { type ObjectOfStrings } from '../../types/mdx-interface';

export const SocialMedia = () => {
  const mediaLinks: ObjectOfStrings[] = [
    {
      src: '/icons8-facebook-48.png',
      name: 'Facebook',
      alt: 'Facebook icon link',
      href: 'https://en-gb.facebook.com/'
    },
    {
      src: '/icons8-instagram-48.png',
      name: 'Instagram',
      alt: 'Instagram icon link',
      href: 'https://www.instagram.com/'
    },
    {
      src: '/icons8-linkedin-48.png',
      name: 'Linkedin',
      alt: 'Linkedin icon link',
      href: 'https://uk.linkedin.com/'
    },
    {
      src: '/icons8-twitterx-64.png',
      name: 'Twitter',
      alt: 'Twitter icon link',
      href: 'https://twitter.com/'
    }
  ];
  return (
    <div className="flex flex-col items-center">
      <table>
        <tbody>
          {mediaLinks.map(({ src, name, alt, href }) => (
            <tr key={src}>
              <a href={href} key={src} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <td className="w-1/3">
                  <img src={src} className="w-10" alt={alt} />
                </td>

                <td className="w-1/2 ml-2 text-left">
                  <p>{name}</p>
                </td>
              </a>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
