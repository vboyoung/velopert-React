import React from 'react'
import PropTypes from 'prop-types';

const MyComponet =({name, children, favoriteNumber}) => {
    return (
        <>  
            <h3> 안녕하세요, 제이름은 {name} 입니다. </h3>
            <h3> children 값은 {children} 입니다.</h3>
            <br/>
            <h3>제가 좋아하는 숫자는 {favoriteNumber}</h3>
        </>
    )
}


MyComponet.defaultProps = {
    name: '기본 이름'
}

MyComponet.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}


export default MyComponet