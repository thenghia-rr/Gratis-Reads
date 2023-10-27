// import  from '';

const PageIntro = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-300 dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 ring-0 mb-4 mt-[60px] h-[100vh]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-30 dark:opacity-5"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-200 dark:bg-gray-900  dark:ring-gray-700 shadow-xl  ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="block text-5xl font-bold text-center h-12 text-sky-500">GratisReads</h1>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-gray-200 sm:text-2xl max-sm:text-xl max-sm:font-[400] sm:leading-9">
              <p>
                “Discover a world of free reads at GratisReads. Dive into
                captivating books across genres, where reading is not just a
                hobby, but an accessible delight for everyone”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-[100px] w-[100px] hover:dark:brightness-125 hover:dark:scale-110 dark:transition-all hover:brightness-125 hover:scale-110 transition-all select-none custom-clip-path"
                src="/image/book.png"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900 dark:text-sky-500 " >
                  TheNghia DevOps
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width="7"
                  height="7"
                  aria-hidden="true"
                  className="fill-gray-900 dark:fill-slate-400"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600 dark:text-slate-300">CEO of GratisReads</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default PageIntro;
