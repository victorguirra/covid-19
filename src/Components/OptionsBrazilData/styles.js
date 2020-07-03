import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    width:90%;
    padding:10px 0;
`;

export const Wrapper = styled.View`
    width:100%;
`;

export const Option = styled.TouchableOpacity`
    background-color:#17B978;
    width:100%;
    height:50px;
    margin-top:20px;
    margin-bottom:10px
    border-radius:10px;
    flex-direction:row;
    align-items:center;
    padding:0 15px;
    justify-content:space-between;
`;

export const TitleState = styled.Text`
    color:#03142B;
    font-weight:bold;
    font-size:16px;
`;