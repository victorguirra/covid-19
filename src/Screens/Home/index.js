import React from 'react';

import brazilMap from '../../images/brazilMap.png';
import Countries from '../../images/countries.png';
import Prevention from '../../images/prevention.png';
import Pray from '../../images/pray.png';

import {Wrapper,
        ContainerOptions,
        BrazilData,
        ImageIcon,
        WrapperTitle,
        TitleOption,
        CountriesData,
        PreventionInfos,
        ContainerPass,
        TitlePass,
        ImagePass,
} from './styles';

export default function Home({navigation}){
    return(
        <Wrapper>

            <ContainerOptions>

                <BrazilData onPress={() => navigation.navigate('BrazilData')}>
                
                    <ImageIcon source={brazilMap} alt="Mapa do Brasil" />

                    <WrapperTitle>

                    <TitleOption>Dados por Estado</TitleOption>
                    <TitleOption>Brasileiro</TitleOption>

                    </WrapperTitle>

                </BrazilData>

                <CountriesData onPress={() => navigation.navigate('CountriesData')}>

                    <ImageIcon source={Countries} alt="Países" />

                    <TitleOption>Dados por Países</TitleOption>

                </CountriesData>

                <PreventionInfos onPress={() => navigation.navigate('PreventionInfos')}>

                    <ImageIcon source={Prevention} alt="Prevenção" />

                    <TitleOption>Como se Prevenir</TitleOption>

                </PreventionInfos>

            </ContainerOptions>

            <ContainerPass>

                <TitlePass>#VaiPassar</TitlePass>

                <ImagePass source={Pray} alt="Hands" />
            </ContainerPass>

        </Wrapper>
    )
}