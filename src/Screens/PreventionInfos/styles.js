import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex:1;
    background-color:#03142B;
    align-items:center;
`;

export const ButtonIcon = styled.TouchableOpacity`
    width:100%;
    margin-left:10px;
    margin-top:10px;
`;

export const Title = styled.Text`
    color:#15ed97;
    font-weight:bold;
    font-size:20px;
    margin-top:50px;
`;

export const Container = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
}))``;

export const WrapperContainer = styled.View`
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const WrapperCard = styled.View`
    flex-direction:row;
`;

export const Card = styled.View`
    border:2.5px solid #15ed97;
    width:250px;
    justify-content:center;
    padding:10px;
    align-items:center;
    border-top-left-radius:25px;
    border-bottom-right-radius:25px;
    margin-left:15px;
    margin-right:15px;
`;

export const TitleCard = styled.Text`
    margin-bottom:45px;
    font-size:18px;
    font-weight:bold;
    color:#fff;
    flex-wrap:wrap;
`;

export const ImageCard = styled.Image`
    width:120px;
    height:120px;
`;

