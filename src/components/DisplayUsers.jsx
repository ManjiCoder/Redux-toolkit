/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { MdDeleteForever } from 'react-icons/md';
import HrLine from './HrLine';
import { removeUser } from '../store/slices/UserSlice';

function DisplayUsers() {
  const data = useSelector((state) => state.users);
  console.log(data);
  return (
    <>
      {data.map((user, id) => (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            key={user}
            className="flex font-semibold text-gray-500 justify-between items-center text-xl"
          >
            {user}
            <button type="button" className="text-3xl text-red-600 cursor-pointer hover:scale-110 transition-[scale]" onClick={() => removeUser(id)}>
              <MdDeleteForever />
            </button>

          </motion.div>
          <HrLine />
        </>
      ))}
    </>
  );
}

export default DisplayUsers;
