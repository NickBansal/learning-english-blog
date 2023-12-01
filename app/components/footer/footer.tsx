import { Link } from '@remix-run/react';

export const Footer = () => {
  return (
    <div className="w-full shadow-2xl shadow-white p-8 text-center">
      <div className="grid grid-rows-[1fr_2fr_2fr] md:grid-rows-none md:grid-cols-3">
        <div>
          <h1 className="text-2xl font-medium border-b-2 border-red-400">
            English
            <span className="text-teal-600 dark:text-teal-500">Everyday</span>
          </h1>
        </div>
        <div>
          <h2 className="text-lg md:text-2xl mb-4 md:border-b-2 border-red-400">Find your way around: </h2>
          <ul>
            <li className="md:mb-4">
              <Link to="/about">About</Link>
            </li>
            <li className="md:mb-4">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="md:mb-4">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="md:mb-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg md:text-2xl mb-2 md:border-b-2 border-red-400 w-full">Follow us: </h2>
          <table className="w-full xs:w-1/2">
            <tr>
              <td className="text-right">
                <img src="/icons8-facebook-48.png" className="w-10 inline-block" />
              </td>
              <td className="text-left">
                <p className="inline-block ml-2">Facebook</p>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <img src="/icons8-instagram-48.png" className="w-10 inline-block" />
              </td>
              <td className="text-left">
                <p className="inline-block ml-2">Instagram</p>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <img src="/icons8-linkedin-48.png" className="w-10 inline-block" />
              </td>
              <td className="text-left">
                <p className="inline-block ml-2">Linkedin</p>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <img src="/icons8-twitterx-64.png" className="w-10 inline-block" />
              </td>
              <td className="text-left">
                <p className="inline-block ml-2">Twitter</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
