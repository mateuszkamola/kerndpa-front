import React from 'react'

class Entry extends React.Component {

	render() {
		return (
			<div class="entry-container">
				<h3>{this.props.data.title}</h3>
				<p><span>Type: {this.props.data.type}</span> | <span>Created at: {this.props.data.createdAt}</span></p>
				<p>{this.props.data.content}</p>
			</div>
		)
	}
}

export default Entry;
