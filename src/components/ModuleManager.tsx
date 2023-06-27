import React from "react";
import { Grid, List, ListItemButton } from "@mui/material"

export class ModuleManager extends React.Component<{modules: JSX.Element[], labels: string[]}, {selectedIndex: number}> {

	constructor(props: any) {
		super(props);
		this.state = {
			selectedIndex: 0
		};
		this.handleModuleClicked = this.handleModuleClicked.bind(this);
	}

	handleModuleClicked(event: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number){
		this.setState({selectedIndex: idx});
	}

	renderActiveModule() {
		return this.props.modules[this.state.selectedIndex];
	}

	render() {
		return (
			<Grid container spacing={1}>
				<Grid item sm={2}>
					<List component="nav">
						{this.props.modules.map((el, index) => (
							<ListItemButton key={index} selected={this.state.selectedIndex==index} onClick={(event) => this.handleModuleClicked(event, index)}>
								{this.props.labels[index]}
							</ListItemButton>
						))}
					</List>
				</Grid>
				<Grid item lg={10}>
					{this.renderActiveModule()}
				</Grid>
			</Grid>
		)
	}
}
