import React from 'react';
import { Container, TextContainer, Button, TextButton } from './styles';

type Props = {
    name: string;
    onRemove: () => void;
} 

export function Participant({name, onRemove}: Props){
    return (
        <Container>
            <TextContainer> {name} </TextContainer>

            <Button 
            onPress={onRemove}
            activeOpacity={0.7}>
                <TextButton> - </TextButton>
            </Button>
        </Container>
    )
}