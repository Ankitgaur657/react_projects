//context is a provider 
//initialised by method can be stord in variable

import React from "react";

const UserContext =React.createContext();

export default UserContext;

//act like a global varibla in this case 

/*
<UserContext>
<Login/>
<Card/>
now we can access useercontext in any component by provider
<UserContext/>
*/

