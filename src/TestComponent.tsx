import React from 'react';

interface Props {
    text : string
}

/**
 * App.tsxから型を受け取るのにgenericsをつかう
 */
 const Json: React.FC<Props>= (props) => {
    // 受け取ったpropsの属性を表示
    return <div><h1>{props.text}</h1></div>;
}

export default TestComponent;