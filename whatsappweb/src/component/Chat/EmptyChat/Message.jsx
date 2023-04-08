import React,{useContext,useState,useEffect,useRef} from 'react'
import { Box ,styled} from '@mui/material'
import Footer from './Footer'
import Messages from './Messages';
import { AccountContext } from '../../Context/AccountProvider';
import { newMessage,getMessages } from '../../../Service/api';
import {io} from 'socket.io-client'
const Wrapper =styled(Box)`
background-image:url(${'https://cdn.pixabay.com/photo/2017/02/15/11/05/texture-2068283_960_720.jpg'});
background-size:50%;
`

const Component= styled(Box)`
height:80vh;
overflow:scroll;
`
const Container=styled(Box)`
padding : 1px 80px;
`
function Message({person,conversation}) {
  const [value,setValue]=useState('');
   const [messages ,setMessages] = useState([]);
 
   const {account,socket,newMessageFlag,setNewMessageFlag}=useContext(AccountContext);
   const [file,setFile]=useState();
   const [image,setImage]= useState('');
   const [incomingMessage, setIncomingMessage] = useState(null);
   const scrollRef = useRef();

   useEffect(() => {
    socket.current.on('getMessage', data => {
        setIncomingMessage({
            ...data,
            createdAt: Date.now()
        })
    })
}, []);
    useEffect(()=>{
      const getMessageDetails =async()=>{
           let data =await getMessages(conversation._id);
           console.log(data);
           setMessages(data);
      }
      conversation._id && getMessageDetails();
    },[person._id,conversation._id,newMessageFlag])
    useEffect(() => {
      scrollRef.current?.scrollIntoView({ transition: "smooth" })
  }, [messages]);
    useEffect(() => {
      incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
          setMessages((prev) => [...prev, incomingMessage]);
      
  }, [incomingMessage, conversation]);


  const sendText= async(e)=>{
     console.log(e);
    const code=e.keyCode || e.which;
    if(code === 13){
      let message ={};
      if(!file){
         message ={senderId :account.sub,
        receiverId : person.sub,
        conversationId :conversation._id,
        type:'text',
        text:value

      } 
      } else{
        
           message ={senderId :account.sub,
          receiverId : person.sub,
          conversationId :conversation._id,
          type:'file',
          text: image
  
        } 
        
      }

      socket.current.emit('sendMessage', message);

      console.log('Message :: '+ JSON.stringify(message));
       await newMessage(message);
       setValue('');
       setFile('');
       setImage('');
       setNewMessageFlag(prev => !prev)

      }
    }
  



  return (
    <Wrapper>
      <Component>
        {
          messages && messages.map(message=>(
            <Container>
              <Messages message={message}/>
              </Container>
            
          )
            
          )
        }
      </Component>
      <Footer 
      sendText={sendText} 
      setValue={setValue}
      value={value}
      file={file}
      setFile={setFile}
      setImage={setImage}
      />
    </Wrapper>
  )
}

export default Message
