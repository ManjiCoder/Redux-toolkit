import React from 'react';

function UserDetails() {
  return (
    <div className="lg:w-4/6 mx-auto px-11 py-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="text-xl lg:text-2xl text-gray-500">List of User Details</div>
        <button type="button" className="w-36 bg-gradient-to-r from-indigo-700 to-blue-500 text-white py-2 rounded-md  focus:ring-4 transition-[focus:ring-4] duration-200 ease-in-out shadow-sm shadow-slate-500">Add New User</button>
      </div>
      <hr className="h-1 my-5" />
      <button type="button" className="w-36 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 rounded-md shadow-sm shadow-slate-500 focus:ring-4 transition-[focus:ring-4] duration-200 ring-red-300 place-self-end">Clear All User</button>
    </div>
  );
}

export default UserDetails;
