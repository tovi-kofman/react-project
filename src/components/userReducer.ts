import { createContext, Dispatch } from "react";

export type User={
    firstName:string,
    lastName:string;
    email:string,
    address:string,
    phone:string;
    password:string;
    id?:number;
}
export type Action={
    type:'UPDATE_USER',
    data:User
}|{
    type:'DELETE',
}|{
    type:'ADD_USER',
   data: Partial<User> & { email:string,password:string }
}
export const UserContext = createContext<{ user: User; userDispatch: Dispatch<Action> }>({
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      phone: ''
    },
    userDispatch: () => null
  });
export default(state:User,action:Action):User=>
{
    switch(action.type){
        case 'UPDATE_USER':
            return {...state,...action.data}
        case 'ADD_USER':
            return action.data as User
            case 'DELETE':
                return state
        default:
            return state
    }   
}
