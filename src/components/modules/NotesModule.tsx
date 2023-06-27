import React from "react";
import {Entry, EntryModel} from "./notes/Entry";
import { Grid, Typography } from "@mui/material";
import { NotesToolbar } from './notes/NotesToolbar';


export class NotesModule extends React.Component<{}, {error: Error | null, isLoaded: boolean, items:EntryModel[]}> {
	constructor(props: any) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
		this.addEntry = this.addEntry.bind(this);
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

	addEntry(entry: EntryModel) {
		this.state.items.push(entry);
		this.setState({items: this.state.items});
		console.log("Added new entry ", this.state.items);
	}

	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Error while loading data! {error.message}</div>;
		} else if (!isLoaded){
			return <div>Loading...</div>;
		} else {
			return (
				<Grid container spacing={1} >
						<Grid item lg={12}>
							<Typography variant="h2" gutterBottom>
								Notes
							</Typography>
						</Grid>
						<Grid item lg={12}>
							<NotesToolbar onEntryAdded={this.addEntry}></NotesToolbar>
						</Grid>
						{items.map(item => (
							<Grid item md={4} key={item.id}>
								<Entry {...item}/>
							</Grid>
						))}	
					</Grid>
			)
		}
	}
}

