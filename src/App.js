
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Routing from './clientSide/routing/Routing';
import AuthContextProvider from './clientSide/context/AuthContext';
import UserIdContextProvider from './clientSide/context/UserIdContext';
import AdminAuthContextProvider from './context/AdminAuthContext';
import ClientAuthContextProvider from './context/ClientAuthContext';
import PostIdContextProvider from './context/PostIdContext';
//import AdminAuthContextProvider from './clientSide/context/AdminAuthContext';
//import AdminAuthContextProvider from './adminSide/context/AdminAuthContext';

function App() {
  return (
 <>
 <PostIdContextProvider>
 <ClientAuthContextProvider>
 <AuthContextProvider>
  <UserIdContextProvider>
<AdminAuthContextProvider>
    
 <Routing/>
 
 </AdminAuthContextProvider>
 </UserIdContextProvider>
 </AuthContextProvider>
 </ClientAuthContextProvider>
 </PostIdContextProvider>
 </>
  );
}

export default App;
