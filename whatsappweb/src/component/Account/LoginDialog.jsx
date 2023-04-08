import React,{useContext} from 'react'
import { Dialog,Typography,List, ListItem } from '@mui/material'
import { Box, styled} from '@mui/system'
import { qrCodeImage } from '../Constant/data'
import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { AccountContext } from '../Context/AccountProvider'
import { addUser } from '../../Service/api'

const Component =styled(Box)`
display: flex;
`
const QRCode =styled('img')({
    height : 264,
    width: 264,
    margin : '50px 0 0 50px'
})
const Container =styled(Box)`
padding: 56px 0 56px 56px`
const dialogstyle={
    height: '96%',
    marginTop:'12%',
    width :'60%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow: 'none',
    overflow :  'hidden',
}
const Title= styled(Typography)`
font-size: 26px;
color:#525252;
font-weight: 300;
font-family: inherit;
margin-bottom: 25px`
const ListStyled =styled(List)`
& > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a,
}
`

function LoginDialog() {

const {setAccount}=useContext(AccountContext);

 const onLoginSuccess=async(res)=>{
   const decode =jwtDecode(res.credential);
   console.log(decode);
   setAccount(decode);
   await addUser(decode)
 }
 const onLoginError =()=>{
    console.log("error failed")
 }


  return (
    <Dialog open={true}  PaperProps ={{sx: dialogstyle}}
    hideBackdrop={true}>
        <Component>
            <Container>
              <Title>
               To use WhatsApp on your computer:
              </Title>
              <ListStyled>
                <ListItem>1. Open WhatsApp on your phone</ListItem>
                <ListItem>2. Tap Menu Settings and select WhatsApp Web </ListItem>
                <ListItem>3. Point your phone to this screen to capture the code</ListItem>
              </ListStyled>
            </Container>
            <Box style={{position :'relative'}}>
                 <QRCode src={qrCodeImage} alt="qr code"/> 
                 <Box style={{position : 'absolute', top: '50% ',transform:'translatex(25%)'}}>
                    <GoogleLogin
                     onSuccess={onLoginSuccess}
                     onError={onLoginError}/>
                    </Box>   
            </Box>
        </Component>
        
        </Dialog>
  )
}

export default LoginDialog
