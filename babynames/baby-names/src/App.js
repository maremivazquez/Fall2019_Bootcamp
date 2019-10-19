import React, {Component} from 'react';
import NamesList from './components/NamesList'
import Credit from './components/Credit'
import Search from './components/Search'
import ShortList from './components/ShortList'
//import './App.css';

class App extends Component{

	constructor(props){
		super(props)
		this.state = {
			filterText: 'Hello',
			favorites: []
		}
	}

	filterUpdate(value){
		this.setState({
			filterText: value
		})
	}

	addFavorite(id){
		const favList = this.state.favorites.concat([id])
		this.setState({
			favorites: favList
		})
	}

	render(){
		return (
			<div>
				<Search 
					filterText={this.state.filterText} 
					filterUpdate={this.filterUpdate.bind(this)}
				/>
				<main>
					<ShortList
						data={this.props.data}
						favorites={this.state.favorites}
					/>
					<NamesList 
					data={this.props.data}
					filterText={this.state.filterText}
					addFavorite={this.addFavorite.bind(this)}
					/>
					<Credit/>
				</main>
			</div>
		);
	}
}

export default App;
