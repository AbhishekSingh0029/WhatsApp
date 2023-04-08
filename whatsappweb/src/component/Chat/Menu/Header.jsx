import React,{useContext,useState} from 'react'
import { AccountContext } from '../../Context/AccountProvider';
import { Chat as MeesageIcon } from '@mui/icons-material';
import { Box,styled } from '@mui/material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../Drawer/InfoDrawer';
const Component =styled(Box)`
height:44px;
background : #ededed;
display: flex;
align-item: center;
padding: 8px 16px;`

const Wrapper =styled(Box)`
display : flex;
margin-left: 30px;
`


const Image=styled('img')({
    height :40,
    width: 40,
    borderRadius :'50%',

})
function Header() {

    const [openDrawer,setOpenDrawer] =useState(false);


const {account} =useContext(AccountContext );

const toggleDrawer=()=>{
    setOpenDrawer(true);
}

  return (
    <div>
      <Component>
        <Image src={account.picture} onClick={()=>toggleDrawer()} alt='dp'/>
        <Wrapper>
           <MeesageIcon/>
           <HeaderMenu setOpenDrawer={setOpenDrawer}/>
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer}  setOpen={setOpenDrawer}/>
    </div>
  )
}

export default Header
