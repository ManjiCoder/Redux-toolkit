import React, { useEffect, useRef } from 'react';

const li = ['Home', 'About', 'Projects', 'Code', 'Contact'];
function Navbar() {
  const zoomIn = useRef('');
  useEffect(() => {
    setTimeout(() => {
      zoomIn.current.classList.add('scale-110');
    }, 300);

    return () => {
      zoomIn.current.classList.remove('scale-110');
    };
  }, []);

  return (
    <header className="p-4 text-center text-gray-400">
      <h6>Weclome to redux-toolkit</h6>
      <h1 ref={zoomIn} className="text-4xl lg:text-6xl font-bold uppercase my-8 transition-transform duration-500 ease-in-out">
        Admin table
      </h1>
      <h6>One Destination for complete Web Development</h6>
      <nav>
        <ul className="mt-5 flex lg:text-xl font-semibold space-x-3 justify-between bg-slate-100 lg:w-4/6 mx-auto px-5 rounded-md shadow-md">
          {li.map((item) => (
            <li key={item} className="py-3 uppercase cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
