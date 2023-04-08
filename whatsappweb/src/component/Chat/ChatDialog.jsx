import React,{useContext} from 'react'
import { Dialog ,Box,styled} from '@mui/material'
import Menu from './Menu/Menu'
import EmptyChat from './EmptyChat/EmptyChat'
import ChatBox from './EmptyChat/ChatBox'
import { AccountContext } from '../Context/AccountProvider'
const dialogstyle={
    height: '95%',
    margin:'20px',
    width :'100%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow: 'none',
    overflow :  'hidden',
}

const Component =styled(Box)`
display :flex;
`
const LeftComponent =styled(Box)`
min-width: 450px;
`
const RightComponent = styled(Box)`
min-width: 300px;
height:100%;
width:73%;
border-left :1px solid rgba(0,0,0,0.14);
`
function ChatDialog() {
   const {person} =useContext(AccountContext)
  return (
    <Dialog open={true}  PaperProps ={{sx: dialogstyle}}
    hideBackdrop={true}
    maxWidth={'md'}>
         <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            <RightComponent>
               
            
              {Object.keys(person).length ? <ChatBox/>:<EmptyChat/>}
            </RightComponent>
         </Component>
    </Dialog>
  )
}

export default ChatDialog
