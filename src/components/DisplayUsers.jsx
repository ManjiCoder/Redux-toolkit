import React from 'react';
import { useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';
import HrLine from './HrLine';

function DisplayUsers() {
  const data = useSelector((state) => state.users);
  console.log(data);
  return (
    <>
      {data.map((user) => (
        <>
          <UserInfo key={user}>{user}</UserInfo>
          <HrLine />
        </>
      ))}
    </>
  );
}
const UserInfo = tw.div`

`;
export default DisplayUsers;
