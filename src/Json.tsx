import React from 'react';
import Data from './data.json';

// rfでreact functional componentのテンプレートができる

type Props = {
    jsonData: typeof Data;
} 

/**
 * App.tsxから型を受け取るのにgenericsをつかう
 */
const Json = ({jsonData}:Props) => {
    return (
        <div>
            <h1>json</h1>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
    )
}

// Json.propTypes = propTypes;
// Json.defaultProps = defaultProps;
// #endregion

export default Json;