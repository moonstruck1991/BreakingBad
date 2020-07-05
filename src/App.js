import React from 'react';
import axios from 'axios'
import Header from './components/ui/header'
import Search from './components/ui/search'

import CharacterGrid from './components/characters/characterGrid'
import './App.css';

function App() {
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	const [query, setQuery] = React.useState('')
	
	
	React.useEffect(function(){
		const fetchItems = async function(){
			const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
			setItems(result.data)
			setIsLoading(false)
		}
		
		
			fetchItems()
			
		
	}, [query])
	
  return (
    <div className="container">
      < Header />
	  < Search getQuery={function(q){setQuery(q)}}/>
	  < CharacterGrid isLoading = {isLoading} items = {items} />
    </div>
  );
}

export default App;
