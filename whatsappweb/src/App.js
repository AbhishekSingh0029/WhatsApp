
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './component/Context/AccountProvider';
import Messenger from './component/Messenger';
function App() {
const  clientId ='646074390542-43uk3ml3dri9caqn0ogsn57dt417m03o.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
       <AccountProvider>
        <Messenger></Messenger>
        </AccountProvider>
       
      
    </GoogleOAuthProvider>
  );
}

export default App;
