import React, {useState, useEffect} from 'react';



import {Container, Wrapper, Option, TitleState,} from './styles';

export default function OptionsBrazilData(){
    const [apiData, setApiData] = useState({data: []});
    
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

            {[apiData].map(item => (
                <Wrapper key={Math.random()}>

                    {item.data.map(internItem => (
                        <Option key={internItem.uid}>

                            <TitleState>{internItem.state}</TitleState>

                        </Option>
                    ))}

                </Wrapper>
            ))}
           
        </Container>
        
    )
}   