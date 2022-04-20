import React from "react";

import {Patato} from './potato';
import {name} from './potato';

function App2(){
    console.log(name);
return(
    <div>
        <h1>App2 파일생성</h1>
        <h2>추가로 한번 만들어 봄..</h2>
         <Patato
          fav="kimchi" 
         something={1} 
         papapa={['hello',1,2,3,4,true]}
         aaa={{age: 20, name: '홍길동' }}
         booltype={true}
         /> 
         
         <SweetPotato data="사과"/>
         <SweetPotato data="배"/>
         <SweetPotato data="수박"/>
         <SweetPotato data="딸기"/>
         <SweetPotato data="복숭아"/>
    </div>
    );
}
export default App2;