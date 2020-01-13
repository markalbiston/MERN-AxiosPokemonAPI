import React, {useState,useEffect} from 'react';
import axios from 'axios';

const PokemonListCopy = () => {
    let [responseData, setResponseData] = useState([]);
    let [clicked, setClicked] = useState(false);

    console.log(`before button is clicked: clicked= ${clicked}`)

    const onClickHandler = event => {
        // event.preventDefault();
        
        setClicked(clicked = !clicked);
        console.log(`after button is clicked: clicked= ${clicked}`)
    }

    useEffect(() => {
    if(clicked === true){
        console.log(clicked);
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => {
            console.log(response);
            console.log(response.data.results);
            responseData = response.data.results;
            console.log(`state: ${responseData}`);
            setResponseData([...responseData]);
            console.log(`state: ${responseData}`);
        });
        
        console.log(`state data = ${responseData}`);
        // setResponseData([...responseData.data]);
        // console.log(response)
        // setResponseData([...responseData.data]);
        // console.log(responseData)
        
    }
 
    },[clicked])
    // responseData.isFetched
    
    return(
    <div>
        <button className="btn btn-large btn-primary mt-2" onClick={onClickHandler}>Fetch Pokemon!</button>
        <ul className="list-group mt-4">
            {responseData.map((pokemon, index) => 
            <div key={index}>
                <li className="list-group-item">{pokemon.name}</li>
            </div>
            )}
        </ul>
    </div>
    )
}


export default PokemonListCopy;