import React from 'react'
import PropType from 'prop-types'
import { StyledSpinner } from './styles'



export default function Spinner({ size }) {
	return <StyledSpinner size={size}/>
}


Spinner.propTypes = {
	size: PropType.number
}

Spinner.defaultProps = {
	size: 16
}
