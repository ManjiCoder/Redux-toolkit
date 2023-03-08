import React from 'react';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-styled-components';
import fakeUser from '../api';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';
import HrLine from './HrLine';

function UserDetails() {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log(name);
    dispatch(addUser(name));
  };
  return (
    <Wrapper>
      <UserListWrapper>
        <UserList>List of User Details</UserList>
        <AddNewUserButton onClick={() => addNewUser(fakeUser())}>Add New User</AddNewUserButton>
      </UserListWrapper>
      <HrLine />
      <DisplayUsers />
      <ClearUserButton>Clear All User</ClearUserButton>
    </Wrapper>
  );
}

export default UserDetails;

const Wrapper = tw.div`
lg:w-4/6 mx-auto px-11 py-4 flex flex-col
`;
const UserListWrapper = tw.div`
flex justify-between items-center`;

const UserList = tw.div`text-xl lg:text-2xl text-gray-500`;
const AddNewUserButton = tw.button`
w-36 bg-gradient-to-r from-indigo-700 to-blue-500 text-white py-2 rounded-md shadow-sm shadow-slate-500 focus:ring-4 transition-[focus:ring-4] duration-200 ring-blue-300 place-self-end
`;
const ClearUserButton = tw.button`
w-36 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 rounded-md shadow-sm shadow-slate-500 focus:ring-4 transition-[focus:ring-4] duration-200 ring-red-300 place-self-end
`;
