import React from 'react';
import Entry from './Entry.js';

class EntryList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount() {
		fetch("http://127.0.0.1:8080/entries/")
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result);
					this.setState({
						isLoaded: true,
						items: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Error while loading data! {error.message}</div>;
		} else if (!isLoaded){
			return <div>Loading...</div>;
		} else {
			return (
				<div class="entry-list-container">
					<h2>Entries</h2>
					<ul>
						{items.map(item => (
							<li key={item.id}>
								<Entry data={item}/>
							</li>
						))}	
					</ul>
				</div>
			)
		}
	}
}

export default EntryList;
