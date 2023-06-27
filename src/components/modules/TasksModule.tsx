import React from "react";
import {Box} from "@mui/material"

export class TasksModule extends React.Component<{},{}> {
	constructor(props: any) {
		super(props);
		console.log("Called constructor of todomodule");
	}

	componentDidMount(){
	}

	render() {
		return (
			<Box>TODO LIST!</Box>
		)
	}
}

