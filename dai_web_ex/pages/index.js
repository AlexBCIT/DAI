import { Button, Loader } from 'semantic-ui-react'
import LoginForm from '../comps/Loginform';

//the router and states are mostly used in the page for data/info state managements
import {useRouter} from 'next/router'; 
import {useState} from 'react'; 

export default function Home() {

const r = useRouter();
//before, during, after
const [loginState, setLoginstate] = useState("before")


// const HandleButton = () =>{
//   if(loginState === "before"){
//     setLoginstate("during");
//   }
//   if(loginState === "during"){
//     setLoginstate("after");
//   }
//   if(loginState === "after"){
//     r.push("/dashboard")
//   }
// }

const Login = async () => {
  setLoginstate("during");

  // gonna take some time
  // mock of time passing -> code is useless
  await new Promise(resolve=>setTimeout(resolve, 2000));

  setLoginstate("after");

  // gonna stall for 1-2 sec
  // mock of time passing -> code is useless
  await new Promise(resolve=>setTimeout(resolve, 2000));

  r.push("/dashboard"); 
}

  return (
    <div>
      {/* <Button color={c} onClick={()=>Login()}>
      {btn_txt}
      {loginState === "during" && <Loader active/>}
      </Button> */}
      <LoginForm 
        loginState={loginState} 
        OnLoginClick={()=>Login()}
      />
    </div>
  )
}
