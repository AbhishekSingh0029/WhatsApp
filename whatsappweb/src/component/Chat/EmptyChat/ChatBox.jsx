import React,{useContext,useEffect,useState} from 'react'
import { Box } from '@mui/material'
import ChatHeader from './ChatHeader'
import Message from './Message'
import { AccountContext } from '../../Context/AccountProvider'
import { getConversation } from '../../../Service/api.js'
function ChatBox() {
     const {person,account}=useContext(AccountContext);
     const [conversation,setConversation]=useState({})
     useEffect(()=>{
      const getConversationDetails = async ()=>{
        let data=  await getConversation({senderId: account.sub, receiverId : person.sub});
        console.log('Data : ' + JSON.stringify(data));
        setConversation(data);
      }
      getConversationDetails();
     },[person.sub]);

  return (
    <Box>
      <ChatHeader person={person} />
      <Message person={person} conversation={conversation}/>
    </Box>
  )
}

export default ChatBox

