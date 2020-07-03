import React, {useState, useEffect} from 'react';

import {AntDesign} from '@expo/vector-icons';

import {Container, Wrapper, Option, VisibleInfo, TitleState, InvisibleInfo, View} from './styles';

export default function OptionsBrazilData(){
    const [apiData, setApiData] = useState({data: []});
    const [moreInfo, setMoreInfo] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            const apiURL = 'https://covid19-brazil-api.now.sh/api/report/v1';
            fetch(apiURL)
            .then((response) => response.json())
            .then((data) => setApiData(data));

        }
        fetchData();
    },[])

    return(

        <Container>

            {[apiData].map(externItem => (
                <Wrapper key={Math.random()}>

                    {externItem.data.map(item => (
                        <Option key={item.uid}>

                            <VisibleInfo>

                                <TitleState>{item.state}</TitleState>

                                <AntDesign name="arrowright" size={30} color="#03142B" />

                            </VisibleInfo>

                        </Option>
                    ))}

                </Wrapper>
            ))}
           
        </Container>
        
    )
}   