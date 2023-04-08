import React,{useEffect,useState,useContext} from 'react'
import { getUsers } from '../../../Service/api.js'
import  {Box,styled,Divider} from '@mui/material'
import Conversatio from './Conversatio.jsx';
import { AccountContext } from '../../Context/AccountProvider';

const Component= styled(Box)`
height: 81vh;
overflow: overlay `

const StyleDivider = styled(Divider)`
margin : 0 0 0 70px;
background-color:#e9edef ;
opacity : .8;
`

function Conversation({text}) {
  const [users,setUsers] =useState([]);
   
  const {account,socket,setActiveUsers} =useContext(AccountContext );

    useEffect(()=>{
        const fetchData =async()=>{
            let response =await getUsers();
            const filteredData= response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData);
        }
        fetchData();
    },[text])

    useEffect(()=>{
      socket.current.emit('addUser',account);
      socket.current.on("getUsers",users=>{
        setActiveUsers(users)
      },[account])
    })
  return (
    
      <Component>
        {
           
          users.map(user => (
             user.sub !== account.sub &&
             <>
             <Conversatio user={user} />

             <StyleDivider />
             </>
            
          ))
        }
      </Component>
    
  )
}

export default Conversation
