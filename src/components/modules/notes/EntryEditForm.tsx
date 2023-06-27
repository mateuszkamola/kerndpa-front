import React from "react";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import { Box, TextField, Button, Dialog, DialogActions, DialogContent,
	DialogContentText, DialogTitle} from "@mui/material";


type EntryEditFormState = {
	type: string,
	title: string,
	content: string,
	formOpened: boolean
};

type EntryEditFormProps = {
	onEntryAdded: (entry: any) => void
};

class EntryEditForm extends React.Component<EntryEditFormProps, EntryEditFormState> {
	constructor(props: EntryEditFormProps) {
		super(props);

		this.state = {type: "", title: "", content: "", formOpened: false};
		
		this.handleChange = this.handleChange.bind(this);
		this.createEntry = this.createEntry.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
	}

	handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.handleChange(event.target.name, event.target.value);
	}

	handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		this.handleChange(event.target.name, event.target.value);
	}

	handleChange(key: string, value: string) {
		let obj = {...this.state};
		switch (key) {
			case "type":
				obj.type = value;
				break;
			case "title":
				obj.title = value;
				break;
			case "content":
				obj.content = value;
				break;

		}
		this.setState(obj);
	}

						
	createEntry(event: React.MouseEvent) {
		let form = this;
		axios.post("http://127.0.0.1:8080/entries", this.state)
			.then(function(response) {
				if (response.status == 200) {
					form.props.onEntryAdded(response.data);
				}
			});

		event.preventDefault();
	}

	render() {
		return (
			<div>
				<Button variant="outlined" onClick={() => this.setState({formOpened: true})}>
					<AddIcon></AddIcon> Create
				</Button>
				<Dialog open={this.state.formOpened} onClose={() => this.setState({formOpened: false})}>
					<DialogTitle>Create new note</DialogTitle>
					<DialogContent>
						<Box>
							<TextField margin="normal" label="Type" name="type" type="text" value={this.state.type} onChange={this.handleInputChange} />
						</Box>
						<Box>
							<TextField margin="normal" label="Title" name="title" value={this.state.title} onChange={this.handleInputChange} />
						</Box>
						<Box>
							<TextField margin="normal" label="Write your note here" name="content" value={this.state.content} onChange={this.handleInputChange} multiline={true} />
						</Box>
					</DialogContent>
					<DialogActions>
						<Button variant="contained" onClick={(e) => {this.createEntry(e); this.setState({formOpened:false})}}>Save</Button>
						<Button onClick={() => this.setState({formOpened:false})}>Cancel</Button>
					</DialogActions>
				</Dialog>

			</div>	
		)
	}
}

export default EntryEditForm;
