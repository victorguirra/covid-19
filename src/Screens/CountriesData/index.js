import React from 'react';

import {AntDesign} from '@expo/vector-icons';

import {Wrapper, ButtonIcon, Container, Title} from './styles';

import OptionsCountriesData from '../../Components/OptionsCountriesData';

export default function BrazilData({navigation}){
    return(
        <Wrapper>

            <ButtonIcon onPress={() => navigation.navigate('Home')}>

                <AntDesign name="doubleleft" size={30} color="#fff" />

            </ButtonIcon>

            <Container>

                <Title>Dados por Países</Title>

                <OptionsCountriesData />

            </Container>

        </Wrapper>
    )
}
