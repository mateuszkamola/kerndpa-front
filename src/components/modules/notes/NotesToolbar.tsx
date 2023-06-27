import React from 'react';
import {Grid} from '@mui/material';
import EntryEditForm from './EntryEditForm';


interface NotesToolbarProps {
	onEntryAdded: (entry: any) => void
};

export class NotesToolbar extends React.Component<NotesToolbarProps, {} > {
	constructor(props: NotesToolbarProps) {
		super(props);
	}

	render() {
		return (
			<Grid container>
				<Grid item sm={4}><EntryEditForm onEntryAdded={this.props.onEntryAdded}></EntryEditForm></Grid>
				<Grid item sm={8}><input type="text" placeholder="Search..."/></Grid>
			</Grid>
		)
	}
}

