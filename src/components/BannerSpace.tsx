

const BannerSpace = () => {
  return (
    <div className="mx-auto px-16 m-10">
      <section
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="max-w-xl text-center">
            <h1 className=" sm:text-5xl text-white">
              Let us find your dream place
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8">
              

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Start planning your trip
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSpace;
