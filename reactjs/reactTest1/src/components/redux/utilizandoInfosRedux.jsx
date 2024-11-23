import React from 'react'
import { selectorCount } from './index'
import { useSelector } from 'react-redux'
// import { connect } from "react-redux"
// import { mapStateToProps } from "./index"


export function InfosRedux() {
 const count = useSelector(selectorCount)
    return (
        <>
            <h1>Valor do Counter com redux</h1>
            <p>redux: {count}</p>
        </>
    )
}

// export default connect(mapStateToProps)(InfosRedux)