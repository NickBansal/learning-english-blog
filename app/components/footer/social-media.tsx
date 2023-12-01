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
      <h2 className="text-xl md:text-2xl mb-2 md:border-b-2 border-red-400 w-full">Follow us: </h2>
      <table className="w-full xs:w-1/2">
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
