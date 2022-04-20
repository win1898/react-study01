import React from 'react';

function Potato(props){
    console.log(props);
    console.log(props.fav);
    console.log(props.something);
    console.log(props.papapa);
    console.log(props.aaa);
    return <h3>I iove Potato</h3>
}

function SweetPatato(props){
    console.log(props);
   {data}=props;
    return <h3>I love {props.data}</h3>
}

let name='감자';

//export {Patato} from Potato;
export{Potato};
export{name};