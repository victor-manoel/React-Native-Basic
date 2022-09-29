import styled from 'styled-components/native';

export const Container = styled.View`
        flex: 1;
        background-color: #131016;
        padding: 24px;
`;

export const EventName = styled.Text`
        color: #FFF;
        font-size: 24px;
        margin-top: 48px;
        font-weight: bold;
`;

export const EventDate = styled.Text`
        font-size: 16px;
        color: #6b6b6b;
`;

export const TextInput = styled.TextInput`
        flex: 1px;
        border-radius: 5px;
        height: 56px;
        background-color: #1F1E25;
        color: #fff;
        padding: 16px;
        font-size: 16px;
        margin-right: 12px;
`;

export const Button = styled.TouchableOpacity`
        border-radius: 5px;
        height: 56px;
        width: 56px;
        background-color: #31CF67;
        align-items: center;
        justify-content: center;
`;

export const TextButton = styled.Text`
        color: #fff;
        font-size: 24px;
`;
export const Form = styled.View`
        width: 100%;
        flex-direction: row;
        margin-top: 36px;
        margin-bottom: 42px;
`;
