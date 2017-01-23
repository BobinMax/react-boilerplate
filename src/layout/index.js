import React, { Component } from 'react'

// main styles
import 'assets/styles/main.scss'

class initApp extends Component {
	render() {
		return (
			<main>
				{this.props.children}
			</main>
		)
	}
}
export default initApp;