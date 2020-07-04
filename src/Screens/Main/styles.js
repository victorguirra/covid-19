import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex:1;
    background-color:#03142B;
    align-items:center;
    justify-content:center;
`;

export const Container = styled.View`
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    margin-top:130px;
    margin-bottom:150px;
`;

export const Title = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:25px;
`;

export const ImgVirus = styled.Image`
    width:140px;
    height:140px;
    margin-top:50px;
`;

export const SubTitle = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:20px;
    text-align:center;
    margin-top:50px;
`

export const ButtonInit = styled.TouchableOpacity`
    background-color:#15ed97;
    height:45px;
    width:90%;
    border-radius:10px;
    align-items:center;
    justify-content:center;
`;

export const TitleButtonInit = styled.Text`
    color:#03142B;
    font-size:15px;
`;