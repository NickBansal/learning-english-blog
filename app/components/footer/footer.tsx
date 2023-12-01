import { SiteMap } from './site-map';
import { SocialMedia } from './social-media';

export const Footer = () => {
  return (
    <div className="w-full shadow-2xl shadow-gray-500 dark:shadow-white  p-8 text-center">
      <div className="max-w-6xl grid grid-rows-[1fr_2fr_2fr] md:grid-rows-none md:grid-cols-3 mx-auto px-8">
        <div>
          <h1 className="text-2xl font-medium border-b-2 border-red-400">
            English
            <span className="text-teal-600 dark:text-teal-500">Everyday</span>
          </h1>
        </div>
        <SiteMap />
        <SocialMedia />
      </div>
    </div>
  );
};
