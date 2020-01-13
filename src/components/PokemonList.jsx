////////////////////////////////////
///////this page is not used///////
////////////////////////////////////

import React, {useState,useEffect} from 'react';
import axios from 'axios';

const PokemonList = () => {
    let [responseData, setResponseData] = useState({
        data: [],
        isFetched: false
    });

    // console.log(`before button is clicked: isFetched= ${responseData.isFetched}`)

    const onClickHandler = event => {
        event.preventDefault();
        responseData.isFetched = !responseData.isFetched;
        setResponseData([...responseData.data]);
        // console.log(`after button is clicked: isFetched= ${responseData.isFetched}`)
    }

    useEffect(() => {
    // if(responseData.isFetched === true){
        console.log(responseData.isFetched);
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => {
            console.log(response);
            console.log(response.data.results);
            setResponseData(
                console.log(`state: ${responseData.data}`),
                {
                    ...responseData,
                    data: response.data.results
                })
                console.log(`state: ${responseData.data}`)

            // setResponseData([...responseData.data]);
        });
        
        console.log(`state data = ${responseData.data}`);
        // setResponseData([...responseData.data]);
        
        
        
        // console.log(response)
        // setResponseData([...responseData.data]);
        // console.log(responseData)
        
    // }
    
        
    },[])
    // responseData.isFetched
    
    return(
    <div>
        <button className="btn btn-large btn-primary mt-2" onClick={onClickHandler}>Fetch Pokemon!</button>
        <ul className="list-group mt-4">
            {responseData.data.map((pokemon, index) => 
            <div key={index}>
                <li className="list-group-item">{pokemon.name}</li>
            </div>
            )}
        </ul>
    </div>
    )
}


export default PokemonList;