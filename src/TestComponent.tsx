import React, { useState } from 'react';

interface Props {
    text : string
}
interface UserData {
    id:number;
    name: string;
}
/**
 * App.tsxから型を受け取るのにgenericsをつかう
 */
 const TestComponent: React.FC<Props>= (props) => {
    // functional componentの中でstateを更新
     const [count, setCount] = useState(0); // 初期値を数値にするだけで数値型になる

    const [user,setUser] = useState({id:1,name:"tarou"}); // 受け付けるのはオブジェクトのみ
    //  const [count, setCount] = useState<number | null>(null); // nullも受け付けたい場合、genericsをつかう
     setCount(1);
     // 受け取ったpropsの属性を表示
    return(
        <div>
            <h1>{props.text}</h1>
            <h2>{count}</h2>
            <h3>{user.name}</h3>
        </div>

    ) 
}

export default TestComponent;