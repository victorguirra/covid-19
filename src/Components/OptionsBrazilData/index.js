import React, {useState, useEffect} from 'react';

import {AntDesign} from '@expo/vector-icons';

import {Modal} from 'react-native';

import virus from '../../images/virus.png';
import deaths from '../../images/deaths.png';
import suspects from '../../images/suspects.png';
import refuse from '../../images/refuse.png';

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
            const apiURL = 'https://covid19-brazil-api.now.sh/api/report/v1';
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
                        <Option key={String(item.uid)} onPress={() => handleShowMoreInfo(item)}>

                            <VisibleInfo>

                                <TitleState>{item.state}</TitleState>

                                <AntDesign name="arrowright" size={30} color="#03142B" />

                            </VisibleInfo>

                            {item.uid === selectedOption?.uid ? 

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
                                    
                                    <TitleModal>{item.state} - {item.uf}</TitleModal>

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

                                                <ImageInfos source={suspects} alt="Suspeitos" />

                                                <TitleInfos>{item.suspects} Suspeitos</TitleInfos>

                                            </WrapperInfos>

                                            <WrapperInfos>

                                                <TitleInfos>{item.refuses} Recusas</TitleInfos>

                                                <ImageInfos source={refuse} alt="Mortos" />

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