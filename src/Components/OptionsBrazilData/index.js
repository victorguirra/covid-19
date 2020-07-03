import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Container, Button, Title, Option} from './styles';

export default function OptionsBrazilData(){
    const [apiData, setApiData] = useState([]);
    
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

            <Button onPress={() => console.log(apiData)}>

                <Title>Show Data</Title>

            </Button>
           
        </Container>
        
    )
}   