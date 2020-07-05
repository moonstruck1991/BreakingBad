import React from 'react'
import CharacterItem from './characterItem.js'
import Spinner from '../ui/spinner'
const CharacterGrid = function({items, isLoading}){
	return isLoading ? <Spinner/>  : <section className = "cards">
		{items.map(item => (
			<CharacterItem key={item.char_id} item={item}></CharacterItem>
		))}
	</section>
}

export default CharacterGrid