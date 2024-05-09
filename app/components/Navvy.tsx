import { useEffect, useState } from "react";

const Navvy = () => {
  const [state, setState] = useState(false);
  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Movies", path: "/movies" },
    { title: "TV Shows", path: "/tv" },
    // { title: "Music", path: "javascript:void(0)" },
    // { title: "Food", path: "javascript:void(0)" }
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as HTMLElement; // Type assertion
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`pb-5 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a href="/">
            <h1
              style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}
            >
              flux
            </h1>
          </a>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-300 hover:text-gray-200">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-1.5 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
              </div>
            </form>
            <a href="/auth" className="block text-white hover:text-gray-900">
              Log in
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
            >
              Sign in
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navvy;
