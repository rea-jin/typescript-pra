import React from 'react';
// rfでreact functional componentのテンプレートができる

// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

interface Props {
    text: string
}
// #region component
const propTypes = {};

const defaultProps = {};

/**
 * App.tsxから型を受け取るのにgenericsをつかう
 */
const Json: React.FC<Props>= (props) => {
    // 受け取ったpropsの属性を表示
    return <div><h1>{props.text}</h1></div>;
}

// Json.propTypes = propTypes;
// Json.defaultProps = defaultProps;
// #endregion

export default Json;