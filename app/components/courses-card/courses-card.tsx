import format from 'date-fns/format';

interface CourseTypes {
  title: string;
  overview: string;
  date: string;
  image: {
    url: string;
  };
  price: number;
}

export const CoursesCard = ({ title, overview, date, price, image }: CourseTypes) => {
  return (
    <a href="#">
      <div className="flex flex-col border-2 border-gray-300 h-full rounded-md overflow-hidden hover:border-gray-400 dark:hover:border-gray-100 transition-colors duration-300 group">
        <img src={image.url} alt="" />
        <div className="h-full flex flex-col justify-between p-4 font-semibold before:ease relative group-hover:transition-all before:absolute before:right-0 before:top-0 before:h-[500px] before:w-full before:-translate-x-[100%] dark:before:bg-white before:bg-gray-500 before:opacity-10 before:duration-500 group-hover:before:-translate-x-0">
          <div className="text-center ">
            <h2 className="border-b-[1px] text-base">{title}</h2>
            <p className="text-sm font-normal italic py-4">{overview}</p>
          </div>
          <div className="text-center text-sm">
            <p className="font-light">
              <strong>Date:</strong> {format(new Date(date), 'dd/MM/yyyy')}
            </p>
            <p className="font-light">
              <strong>Price:</strong> £{String(price)}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
