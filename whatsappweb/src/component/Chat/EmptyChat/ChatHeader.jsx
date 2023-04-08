 import React,{useContext} from 'react'
 import { Box,Typography,styled } from '@mui/material';
 import { Search,MoreVert } from '@mui/icons-material';
 import { defaultProfilePicture } from '../../Constant/data';
 import { AccountContext } from '../../Context/AccountProvider';
 const Image=styled('img')({
    height: 40,
    width :40,
    objectFit:'cover',
    borderRadius:'50%',

 })

 const Header1 =styled(Box)`
 height:44px;
 background: #ededed;
 padding:8px 16px;
 display:flex;
 align-items : center;`

const Name= styled(Typography)`
margin-left: 12px !important;
 `

const Status= styled(Typography)`
margin-left: 12px !important; 
font-size:12px;
color: rgb(0,0,0,0.6);  
 `
 const  RightContainer =styled(Box)`
 margin-left:auto;
 & > svg {
    padding: 8px;
    font-size: 22px;
    color: #000;
}`

 function ChatHeader({person}) {
  const url = person.picture || defaultProfilePicture;
   const {activeUsers} = useContext(AccountContext);



   return (
     <Header1>
        <Image src={url} alt="dp" />
        <Box>
            <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
        </Box>
        <RightContainer>
            <Search/>
            <MoreVert/>
        </RightContainer>
     </Header1>
   )
 }
 
 export default ChatHeader
 