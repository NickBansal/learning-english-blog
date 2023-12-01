import { type ObjectOfStrings } from '../../types/mdx-interface';

export const SocialMedia = () => {
  const mediaLinks: ObjectOfStrings[] = [
    { src: '/icons8-facebook-48.png', name: 'Facebook' },
    { src: '/icons8-instagram-48.png', name: 'Instagram' },
    { src: '/icons8-linkedin-48.png', name: 'Linkedin' },
    { src: '/icons8-twitterx-64.png', name: 'Twitter' }
  ];
  return (
    <div className="flex flex-col items-center">
      <table className="w-full">
        <tbody>
          {mediaLinks.map(({ src, name }) => (
            <tr key={src}>
              <td className="text-right">
                <img src={src} className="w-10 inline-block" />
              </td>
              <td className="text-left">
                <p className="inline-block ml-2">{name}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
