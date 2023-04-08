import React,{useContext} from 'react'
import { AppBar,Toolbar,styled,Box } from '@mui/material'
 import LoginDialog from './Account/LoginDialog'
 import ChatDialog from './Chat/ChatDialog'
 import { AccountContext } from './Context/AccountProvider'
const Header = styled(AppBar)`
height : 125px;
background-color : #00A884;
box-shadow : none;
`
const Box1=styled(Box )`
height: 100vh;
background: #DCDCDC;`
const LoginHeader =styled(AppBar)`
height : 200px;
background-color : #00bfa5;
box-shadow : none;
`
function Messenger() {

    const {account}=useContext(AccountContext);
  return (
    <Box1>
        {account? <><Header>
            <Toolbar></Toolbar>
        </Header>
        <ChatDialog/></>
         :<>
        <LoginHeader>
        <Toolbar></Toolbar>
     </LoginHeader>

     <LoginDialog/></> }
     
          </Box1>
  )
}

export default Messenger
