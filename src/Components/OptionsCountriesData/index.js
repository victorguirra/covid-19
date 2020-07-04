import React, {useState, useEffect} from 'react';

import {AntDesign} from '@expo/vector-icons';

import {Modal} from 'react-native';

import virus from '../../images/virus.png';
import deaths from '../../images/deaths.png';
import confirmed from '../../images/confirmed.png';
import recovered from '../../images/recovered.png';

import {Container,
        Wrapper,
        Option,
        VisibleInfo,
        TitleState,
        WrapperModal,
        WrapperScroll,
        ButtonCloseModal,
        TitleModal,
        ContainerModal,
        WrapperInfos,
        ImageInfos,
        TitleInfos
} from './styles';

export default function OptionsBrazilData(){
    const [apiData, setApiData] = useState({data: []});
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            const apiURL = 'https://covid19-brazil-api.now.sh/api/report/v1/countries';
            fetch(apiURL)
            .then((response) => response.json())
            .then((data) => setApiData(data));

        }
        fetchData();
    },[])

    function handleShowMoreInfo(item){
        setSelectedOption(item);
        setModalVisible(true);
    }

    function handleCloseModal(){
        setModalVisible(!modalVisible);
    }

    return(

        <Container>

            

            {[apiData].map(externItem => (
                <Wrapper key={Math.random()}>

                    {externItem.data.map(item => (
                        <Option key={String(item.country)} onPress={() => handleShowMoreInfo(item)}>

                            <VisibleInfo>

                                <TitleState>{item.country}</TitleState>

                                <AntDesign name="arrowright" size={30} color="#03142B" />

                            </VisibleInfo>

                            {item.country === selectedOption?.country ? 

                                <Modal
                                animationType="slide"
                                visible={modalVisible}
                                transparent={false}
                                >
                                
                                <WrapperModal>

                                    <WrapperScroll>

                                    <ButtonCloseModal onPress={() => handleCloseModal()}>
                                        <AntDesign name="closecircle" size={30} color="#15ed97" />
                                    </ButtonCloseModal>
                                    
                                    <TitleModal>{item.country}</TitleModal>

                                        <ContainerModal>

                                            <WrapperInfos>

                                                <ImageInfos source={virus} alt="Ícone Vírus" />

                                                <TitleInfos>{item.cases} Casos</TitleInfos>

                                            </WrapperInfos>

                                            <WrapperInfos>

                                                <TitleInfos>{item.deaths} Mortes</TitleInfos>

                                                <ImageInfos source={deaths} alt="Mortos" />

                                            </WrapperInfos>

                                            <WrapperInfos>

                                                <ImageInfos source={confirmed} alt="Suspeitos" />

                                                <TitleInfos>{item.confirmed} Confirmados</TitleInfos>

                                            </WrapperInfos>

                                            <WrapperInfos>

                                                <TitleInfos>{item.recovered} Recuperados</TitleInfos>

                                                <ImageInfos source={recovered} alt="Mortos" />

                                            </WrapperInfos>

                                        </ContainerModal>

                                    </WrapperScroll>

                                </WrapperModal> 

                                </Modal>
                                                            
                            : null}

                        </Option>
                    ))}

                </Wrapper>
            ))}
           
        </Container>
        
    )
}   