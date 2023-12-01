import { SiteMap } from './site-map';
import { SocialMedia } from './social-media';

export const Footer = () => {
  return (
    <div className="w-full shadow-2xl shadow-gray-500 dark:shadow-white  p-8 text-center">
      <table className="hidden md:inline-table max-w-6xl mx-auto px-8 w-full">
        <tbody>
          <tr className="border-b-2 border-red-400">
            <th className="w-1/3">
              <h2 className="text-2xl font-medium">
                English
                <span className="text-teal-600 dark:text-teal-500">Everyday</span>
              </h2>
            </th>
            <th className="w-1/3">
              <h2 className="text-xl lg:text-2xl font-semibold">Find your way around: </h2>
            </th>
            <th className="w-1/3">
              <h2 className="text-xl lg:text-2xl font-semibold w-full">Follow us: </h2>
            </th>
          </tr>
          <tr>
            <td />
            <td>
              <SiteMap />
            </td>
            <td>
              <SocialMedia />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="grid grid-rows-[0fr_2fr_2fr] md:hidden">
        <div>
          <h2 className="text-2xl font-medium border-b-2 border-red-400 mb-12">
            English
            <span className="text-teal-600 dark:text-teal-500">Everyday</span>
          </h2>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">Find your way around: </h2>
          <SiteMap />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl w-full font-semibold mb-4">Follow us: </h2>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
