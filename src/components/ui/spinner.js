import React from 'react'
import spinner from '../../img/spinner.gif'
const Spinner = function(){
	return(
	<img src = {spinner} 
		style={{width: '200px', margin: 'auto', display: 'block'}}
		alt = 'loading'/>
	)
}

export default Spinner