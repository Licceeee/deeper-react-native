import React, { createContext, useState, useMemo } from "react";


const UserContext = createContext({
  user: {
    id: 1,
    firstName: "Alicia",
    lastName: "Schonefeld",
    email: "schonefeld.dev@gmail.com",
    profilePicture: "user/1.png",
    lastLogin: "2021-11-08T17:12:02.479131+00:00",
    dateJoined: "2021-02-22T20:55:49.855615+00:00",
    isActive: true,
    isStaff: true,
    token: null,
    test: "babaa",
  },
  setUser: () => {},
});

// const UserProvider = ({ children }) => {


//   return (
//     <UserContext.Provider value={value} I>
//       {children}
//     </UserContext.Provider>
//   );
// };

export { UserContext };
