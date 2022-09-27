import { Button, Loader, Input  } from 'semantic-ui-react'

export default function LoginForm({

    loginState="before",
    OnLoginClick=()=>{}
}){

    var c = "blue";
    var btn_txt= "click me";

    if(loginState === "before"){
    c = "blue"; 
    btn_txt = "Login"
    }

    if (loginState === "during"){
    c = "green";
    btn_txt = "Logging In..."
    }

    if (loginState === "after"){
    c = "grey";
    btn_txt = "Success!"
    }


    return <div>
        <h3>Login Form</h3>
        <Input 
            disabled={loginState !== "before"}
            placeholder="email"
        />
        <Input 
            disabled={loginState !== "before"}
            placeholder="password"
        />
        <hr />
        <Button color={c} onClick={OnLoginClick}>
        {btn_txt}
        {loginState === "during" && <Loader active/>}
        </Button>
    </div>
}