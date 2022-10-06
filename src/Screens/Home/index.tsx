import React, {useState} from 'react';
import { Container, EventDate, EventName, TextInput, Button, TextButton, Form } from './styles';
import {Participant} from '../../components/Participant';
import { Alert, FlatList } from 'react-native';

export function Home(){

    const [participants, setParticipants] = useState<string[]>([]);
    const [newParticipant, setNewParticipant] = useState('');

    function handleAddParticipant(){
        if(participants.includes(newParticipant)){
            return Alert.alert('Participante já existe', `Participante ${newParticipant} já existe`)
        } 

        setParticipants([...participants, newParticipant]);

        setNewParticipant('');
        
    }

    function handleRemoveParticipant(name: string){

        Alert.alert('Remover', `Você deseja remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevstate => prevstate.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return(
        <Container>
           <EventName> Nome do Evento </EventName>
           <EventDate> sexta, 4 de novembro de 2022 </EventDate>

           <Form>

            <TextInput 
            placeholder="Nome do Participante"
            placeholderTextColor="#6B6B6B"
            onChangeText={setNewParticipant}
            value={newParticipant}
            />

            <Button 
            onPress={handleAddParticipant}
            activeOpacity={0.7}>
                <TextButton> + </TextButton>
            </Button>
           </Form>

           <FlatList
            data={participants}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
                 <Participant name={item} onRemove={() => handleRemoveParticipant(item)} />
            )}
           />

        </Container>
    )
} 