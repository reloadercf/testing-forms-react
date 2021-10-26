import { useState } from 'react';
import Welcome from './components/Welcome';
import Form from './components/Form'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  
  const handleLogin = () => setIsLogin(isLogin === false ? true : false)

  return (
    <div>
      {isLogin? <Welcome handleLogin= {handleLogin} /> : <Form handleLogin= {handleLogin} /> }
    </div>
  );
}

export default App;
