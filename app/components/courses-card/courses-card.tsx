export const CoursesCard = () => (
  <a href="#">
    <div className="flex flex-col border-2 border-gray-300 rounded-md overflow-hidden">
      <div className="bg-[url('/about.jpg')] h-[250px] bg-center bg-cover"></div>
      <div className="h-[250px] p-4 font-semibold before:ease relative transition-all before:absolute before:right-0 before:top-0 before:h-[500px] before:w-full before:-translate-x-[100%] dark:before:bg-white before:bg-gray-500 before:opacity-10 before:duration-500 hover:before:-translate-x-0">
        <h2 className="text-center border-b-[1px] text-base">Some title about the courses</h2>
        <p className="text-sm font-thin text-center italic">Heres a brief description to what the course is about</p>
      </div>
    </div>
  </a>
);
