import React, {useState} from 'react'

const Search = function({getQuery}){
	
	const [text, setText] = useState('')
	const onChange = function(q){
		setText(q)
		getQuery(q)
		
	}
	
	return(
	<section className = "search">
		<form>
			<input type="text" 
				className="form-control"
				placeholder="Search characters"
				value = {text}
				onChange = {function(event){
					onChange(event.target.value)
				}}
				autofocus/>
		</form>
	</section>
	)
}

export default Search