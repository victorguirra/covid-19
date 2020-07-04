import React, {useState, useEffect} from 'react';

import {AntDesign} from '@expo/vector-icons';

import {Modal} from 'react-native';

import {Container, Wrapper, Option, VisibleInfo, TitleState, } from './styles';

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

                                <TitleState>{item.uf}</TitleState> 

                                </Modal>
                                                            
                            : null}

                        </Option>
                    ))}

                </Wrapper>
            ))}
           
        </Container>
        
    )
}   