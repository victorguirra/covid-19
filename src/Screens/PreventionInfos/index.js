import React from 'react';

import {AntDesign} from '@expo/vector-icons';

import WashHands from '../../images/prevention.png';
import Mask from '../../images/mask.png';
import Distance from '../../images/distance.png';
import DoNotTouch from '../../images/doNotTouch.png';
import House from '../../images/house.png';

import {Wrapper,
        ButtonIcon,
        Title,
        Container,
        WrapperContainer,
        WrapperDragToTheSide,
        TitleDragToTheSide,
        WrapperCard,
        Card,
        TitleCard,
        ImageCard,
} from './styles';

export default function PreventionInfos({navigation}){
    return(
        <Wrapper>

            <ButtonIcon onPress={() => navigation.navigate('Home')}>

                <AntDesign name="doubleleft" size={30} color="#fff" />

            </ButtonIcon>
            
            <Title>Como se Previnir</Title>

            <Container>
                
                <WrapperContainer>
                    
                    <WrapperCard>

                        <Card>

                            <TitleCard>Lave suas mãos com frequência</TitleCard>

                            <ImageCard source={WashHands} alt="Lavar as Mãos" />

                        </Card>

                        <Card>

                            <TitleCard>Sempre use máscara ao sair de casa</TitleCard>

                            <ImageCard source={Mask} alt="Sempre use Máscara" />

                        </Card>

                        <Card>

                            <TitleCard>Mantenha uma distância segura de qualquer pessoa</TitleCard>

                            <ImageCard source={Distance} alt="Distância Segura" />

                        </Card>

                        <Card>

                            <TitleCard>Não toque nos olhos, no nariz ou na boca</TitleCard>

                            <ImageCard source={DoNotTouch} alt="Não Toque" />

                        </Card>

                        <Card>

                            <TitleCard>Fique em casa sempre que possível</TitleCard>

                            <ImageCard source={House} alt="Lavar as Mãos" />

                        </Card>

                    </WrapperCard>
                    
                </WrapperContainer>

            </Container>

        </Wrapper>
    )
}
