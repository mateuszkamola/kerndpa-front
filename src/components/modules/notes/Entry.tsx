import React from "react"

export type EntryModel = {
	id: number,
	content: string,
	type: string,
	title: string,
    createdAt?: string
};

export class Entry extends React.Component<EntryModel, {} > {

	render() {
		return (
			<div className="entry-container">
				<h3>{this.props.title}</h3>
				<p><span>Type: {this.props.type}</span> | <span>Created at: {this.props.createdAt}</span></p>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

