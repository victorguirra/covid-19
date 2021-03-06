import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    width:90%;
    margin-top:20px;
`;

export const Wrapper = styled.View`
    width:100%;
`;

export const Option = styled.TouchableOpacity`
    background-color:#15ed97;
    width:100%;
    height:50px;
    margin-top:20px;
    margin-bottom:10px
    border-radius:10px;
    justify-content:center;
    padding:0 15px;
`;

export const VisibleInfo = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

export const TitleState = styled.Text`
    color:#03142B;
    font-weight:bold;
    font-size:16px;
`;

export const WrapperModal = styled.View`
    flex:1;
    background-color:#03142B;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
    width:50px;
    padding:10px;
    align-items:center;
`;

export const TitleModal = styled.Text`
    color:#15ed97;
    text-align:center;
    font-size:20px;
    font-weight:bold;
`;

export const WrapperScroll = styled.ScrollView``;

export const ContainerModal = styled.View`
    align-items:center;
`;

export const WrapperInfos = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    width:85%;
    margin-top:40px;
    border:2px solid #15ed97;
    padding:15px;
    border-radius:10px;
`;

export const ImageInfos = styled.Image`
    width:90px;
    height:90px;
`;

export const TitleInfos = styled.Text`
    color:#fff;
    font-size:18px;
    font-weight:bold;
`;
