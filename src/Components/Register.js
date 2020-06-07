import React, {useState} from 'react';
import {Form,  Button, Input, Card} from "antd";
import { Container } from '../styles/styled';
import firebase from '../config/firebase'

const Register = props => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


     const handleSubmit = e => {
         e.preventDefault();
         onRegister();
     };

     async function onRegister() {
         try{
             firebase.register(email, password, firstName, lastName);
             props.history.push('/dashboard');
            }catch(err){
             alert(err.message);
            }

     }

    return (
        <Container>
            <Card
            title = "My Register please enter"
            style = {{witdh:300, textAlign: "center"}}>
              <Form onSubmit= {handleSubmit}>
                   <Input 
                   placeholder= "First Name"
                   style = {{marginBottom: "10px"}}
                   onChange={ e =>{setFirstName(e.target.value)}}
                   autoComplete = "off" 
                   />

                   <Input 
                   placeholder= "Last Name"
                   style = {{marginBottom: "10px"}}
                   onChange={ e =>{setLastName(e.target.value)}}
                   autoComplete = "off" 
                   />

                   <Input 
                  
                    type= "email"
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
                      
                     Register  
                    </Button> 
                    or 
                                        
                    <Button 
                      type = "primary"
                      style = {{width: "100%", marginBottom: "10px"}}
                      onClick = {()=> { props.history.push('/login')}}
                      >
                        Login  
                      </Button>                
                  
                  
                  
                   </Form>
            </Card>
        </Container>
    )
}

export default Register;
