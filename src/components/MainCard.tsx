

const MainCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 px-16">
        <article className="overflow-hidden bg-white ">
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <aside className="absolute top-4 left-4 flex flex-rol gap-2 text-white">
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                Lorem ipsum dolor
              </span>
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                ipsum dolor
              </span>
            </aside>
          </div>

          <div className="pt-4 sm:pt-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <div className="flex items-center mt-3">
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-10 h-10 rounded-full mr-2"
                alt="Rz Codes Logo"
              />
              <div className="flex items-center mt-3 gap-5">
                <div className="font-semibold mr-2">Rz Codes</div>
                <hr className="border border-gray-300 h-10 transform rotate-90 my-1" />
                <div className="text-xs ml-2">Web Developer</div>
                <span className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  1k shares
                </span>
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        <article className="overflow-hidden bg-white ">
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <aside className="absolute top-4 left-4 flex flex-rol gap-2 text-white">
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                Lorem ipsum dolor
              </span>
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                ipsum dolor
              </span>
            </aside>
          </div>

          <div className="pt-4 sm:pt-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <div className="flex items-center mt-3">
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-10 h-10 rounded-full mr-2"
                alt="Rz Codes Logo"
              />
              <div className="flex items-center mt-3 gap-5">
                <div className="font-semibold mr-2">Rz Codes</div>
                <hr className="border border-gray-300 h-10 transform rotate-90 my-1" />
                <div className="text-xs ml-2">Web Developer</div>
                <span className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  1k shares
                </span>
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        <article className="overflow-hidden bg-white ">
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <aside className="absolute top-4 left-4 flex flex-rol gap-2 text-white">
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                Lorem ipsum dolor
              </span>
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                ipsum dolor
              </span>
            </aside>
          </div>

          <div className="pt-4 sm:pt-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <div className="flex items-center mt-3">
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-10 h-10 rounded-full mr-2"
                alt="Rz Codes Logo"
              />
              <div className="flex items-center mt-3 gap-5">
                <div className="font-semibold mr-2">Rz Codes</div>
                <hr className="border border-gray-300 h-10 transform rotate-90 my-1" />
                <div className="text-xs ml-2">Web Developer</div>
                <span className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  1k shares
                </span>
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        <article className="overflow-hidden bg-white ">
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <aside className="absolute top-4 left-4 flex flex-rol gap-2 text-white">
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                Lorem ipsum dolor
              </span>
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                ipsum dolor
              </span>
            </aside>
          </div>

          <div className="pt-4 sm:pt-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <div className="flex items-center mt-3">
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-10 h-10 rounded-full mr-2"
                alt="Rz Codes Logo"
              />
              <div className="flex items-center mt-3 gap-5">
                <div className="font-semibold mr-2">Rz Codes</div>
                <hr className="border border-gray-300 h-10 transform rotate-90 my-1" />
                <div className="text-xs ml-2">Web Developer</div>
                <span className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  1k shares
                </span>
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        <article className="overflow-hidden bg-white ">
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <aside className="absolute top-4 left-4 flex flex-rol gap-2 text-white">
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                Lorem ipsum dolor
              </span>
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                ipsum dolor
              </span>
            </aside>
          </div>

          <div className="pt-4 sm:pt-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <div className="flex items-center mt-3">
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-10 h-10 rounded-full mr-2"
                alt="Rz Codes Logo"
              />
              <div className="flex items-center mt-3 gap-5">
                <div className="font-semibold mr-2">Rz Codes</div>
                <hr className="border border-gray-300 h-10 transform rotate-90 my-1" />
                <div className="text-xs ml-2">Web Developer</div>
                <span className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  1k shares
                </span>
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        <article className="overflow-hidden bg-white ">
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <aside className="absolute top-4 left-4 flex flex-rol gap-2 text-white">
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                Lorem ipsum dolor
              </span>
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                ipsum dolor
              </span>
            </aside>
          </div>

          <div className="pt-4 sm:pt-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <div className="flex items-center mt-3">
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-10 h-10 rounded-full mr-2"
                alt="Rz Codes Logo"
              />
              <div className="flex items-center mt-3 gap-5">
                <div className="font-semibold mr-2">Rz Codes</div>
                <hr className="border border-gray-300 h-10 transform rotate-90 my-1" />
                <div className="text-xs ml-2">Web Developer</div>
                <span className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  1k shares
                </span>
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        <article className="overflow-hidden bg-white ">
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <aside className="absolute top-4 left-4 flex flex-rol gap-2 text-white">
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                Lorem ipsum dolor
              </span>
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                ipsum dolor
              </span>
            </aside>
          </div>

          <div className="pt-4 sm:pt-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <div className="flex items-center mt-3">
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-10 h-10 rounded-full mr-2"
                alt="Rz Codes Logo"
              />
              <div className="flex items-center mt-3 gap-5">
                <div className="font-semibold mr-2">Rz Codes</div>
                <hr className="border border-gray-300 h-10 transform rotate-90 my-1" />
                <div className="text-xs ml-2">Web Developer</div>
                <span className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  1k shares
                </span>
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        <article className="overflow-hidden bg-white ">
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <aside className="absolute top-4 left-4 flex flex-rol gap-2 text-white">
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                Lorem ipsum dolor
              </span>
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                ipsum dolor
              </span>
            </aside>
          </div>

          <div className="pt-4 sm:pt-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <div className="flex items-center mt-3">
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-10 h-10 rounded-full mr-2"
                alt="Rz Codes Logo"
              />
              <div className="flex items-center mt-3 gap-5">
                <div className="font-semibold mr-2">Rz Codes</div>
                <hr className="border border-gray-300 h-10 transform rotate-90 my-1" />
                <div className="text-xs ml-2">Web Developer</div>
                <span className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  1k shares
                </span>
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        <article className="overflow-hidden bg-white ">
          <div
            className="relative h-72 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <aside className="absolute top-4 left-4 flex flex-rol gap-2 text-white">
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                Lorem ipsum dolor
              </span>
              <span className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-2">
                ipsum dolor
              </span>
            </aside>
          </div>

          <div className="pt-4 sm:pt-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <div className="flex items-center mt-3">
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-10 h-10 rounded-full mr-2"
                alt="Rz Codes Logo"
              />
              <div className="flex items-center mt-3 gap-5">
                <div className="font-semibold mr-2">Rz Codes</div>
                <hr className="border border-gray-300 h-10 transform rotate-90 my-1" />
                <div className="text-xs ml-2">Web Developer</div>
                <span className="text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  1k shares
                </span>
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
      </div>
      {/*load more btn*/}
      <div className="flex justify-center mt-10">
        <button className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
          <svg
            className="animate-spin hidden group-active:block mx-auto"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1792 0.129353C10.6088 0.646711 8.22715 1.74444 6.16886 3.36616C4.13416 4.96799 2.42959 7.14686 1.38865 9.48493C0.202866 12.1414 -0.241805 15.156 0.125386 18.0413C0.684593 22.4156 3.02922 26.3721 6.63375 29.0186C8.01155 30.0301 9.65549 30.8757 11.2725 31.3997C12.0405 31.6518 13.4857 32 13.7518 32H13.8361V30.7232V29.4464L13.762 29.4331C11.8485 29.0252 10.2787 28.3818 8.7493 27.3802C7.50961 26.5644 6.29688 25.4402 5.40416 24.2794C3.88824 22.3095 2.98206 20.0908 2.66203 17.5736C2.57781 16.8905 2.57781 15.1029 2.66203 14.4396C2.88773 12.7317 3.31556 11.3288 4.06678 9.863C5.88589 6.3045 9.23103 3.67791 13.1286 2.746C13.4352 2.67303 13.7182 2.60671 13.762 2.59676L13.8361 2.58349V1.29009C13.8361 0.577066 13.8327 -0.00330353 13.8293 1.33514e-05C13.8226 1.33514e-05 13.5329 0.0597076 13.1792 0.129353Z"
              fill="white"
            ></path>
            <path
              d="M19.563 1.38627V2.67967L19.7078 2.71615C20.8768 3.01463 21.7527 3.32968 22.6723 3.78071C24.8249 4.84528 26.6878 6.467 28.042 8.47011C29.248 10.251 29.9858 12.2375 30.2654 14.4562C30.3126 14.831 30.326 15.1792 30.326 16.0149C30.326 17.169 30.2923 17.5869 30.1205 18.5022C29.7365 20.575 28.8404 22.5681 27.5266 24.2761C26.8158 25.2014 25.8019 26.2029 24.862 26.9027C23.3056 28.0634 21.7324 28.7997 19.7078 29.3137L19.563 29.3502V30.6436V31.9403L19.691 31.9204C20.0616 31.8541 21.1362 31.5689 21.6516 31.4031C24.8216 30.365 27.6041 28.3951 29.6152 25.7652C30.2789 24.8996 30.7337 24.1667 31.2356 23.1618C31.8959 21.8419 32.3102 20.6479 32.5999 19.2318C33.4354 15.1394 32.6606 10.9441 30.417 7.40886C28.4126 4.24833 25.3067 1.8373 21.692 0.640079C21.1867 0.470943 20.038 0.169149 19.7078 0.112772L19.563 0.0895557V1.38627Z"
              fill="white"
            ></path>
          </svg>
          <span className="group-active:hidden">Load More</span>
        </button>
      </div>
    </div>
  );
};

export default MainCard;
