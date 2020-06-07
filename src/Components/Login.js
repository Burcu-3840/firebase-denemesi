import React, {useState} from 'react';
import {Form,  Button, Input, Card} from "antd";
import { Container } from '../styles/styled';
import firebase from '../config/firebase'
const Login = (props) => {

    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


     const handleSubmit = e => {
         e.preventDefault();
         firebase.login(email, password)
         .then(props.history.push("/dashboard"))
         .catch(err=>{alert(err);
        })
     }

    return (
        <Container>
            <Card
            title = "My Login please enter"
            style = {{witdh:300, textAlign: "center"}}>
              <Form onSubmit= {handleSubmit}>
                
                

                   <Input 
                  
                   type = "email"
                   placeholder= "Email"
                  
                   style = {{marginBottom: "10px"}}
                   onChange={ e =>{setEmail(e.target.value)}}
                   autoComplete = "off" 
                   />

                   <Input 
                   
                    type = "password"
                   placeholder= "Password"
                   style = {{marginBottom: "10px"}}
                   onChange={ e =>{setPassword(e.target.value)}}
                   autoComplete = "off" 
                   />


                   
                   <Button 
                     type = "primary"
                     htmlType = "submit"
                     className = "login-form-button"
                     style = {{width: "100%", marginBottom: "10px"}}
                     >
                      
                    Login 
                    </Button> 
                    or 
                                        
                    <Button 
                      type = "primary"
                      style = {{width: "100%", marginBottom: "10px"}}
                      onClick = {()=> { props.history.push('/register')}}
                      >
                        Register 
                      </Button>                
                  
                  
                  
                   </Form>
            </Card>
        </Container>
    )
}

export default Login;