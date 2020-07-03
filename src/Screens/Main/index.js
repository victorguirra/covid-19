import React from 'react';
import {Text} from 'react-native';

import Virus from '../../images/virus.png';

import {Wrapper,
        Container,
        Title,
        ImgVirus,
        SubTitle,
        ButtonInit,
        TitleButtonInit,
} from './styles';

export default function Main({navigation}){
    return(

        <Wrapper>

            <Container>

                <Title>Covid-19</Title>

                <ImgVirus source={Virus} alt="Corona Vírus" />

                <SubTitle>Estatísticas sobre o Corona Vírus</SubTitle>

            </Container>

            <ButtonInit onPress={() => navigation.navigate('Home')}>

                <TitleButtonInit>Iniciar</TitleButtonInit>

            </ButtonInit>

        </Wrapper>
    )
}