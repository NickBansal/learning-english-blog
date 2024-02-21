import { SOCIAL_MEDIA_LINKS } from '~/constants/FOOTER_DATA';

export const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center">
      <table>
        <tbody>
          {SOCIAL_MEDIA_LINKS.map(({ src, name, alt, href }) => (
            <tr key={src}>
              <td className="w-1/3">
                <a
                  href={href}
                  key={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img src={src} className="w-10" alt={alt} />
                </a>
              </td>

              <td className="w-1/2 ml-2 text-left">
                <a
                  href={href}
                  key={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <p>{name}</p>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
