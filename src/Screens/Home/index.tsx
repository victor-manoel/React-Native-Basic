import React from 'react';
import { Container, EventDate, EventName, TextInput, Button, TextButton, Form } from './styles';

export function Home(){
    return(
        <Container>
           <EventName> Nome do Evento </EventName>
           <EventDate> sexta, 4 de novembro de 2022 </EventDate>

           <Form>

            <TextInput 
            placeholder="Nome do Participante"
            placeholderTextColor="#6B6B6B"
            />

            <Button 
            activeOpacity={0.7}>
                <TextButton> + </TextButton>
            </Button>
           </Form>
        </Container>
    )
} 