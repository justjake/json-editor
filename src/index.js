import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function App(props) {
	const [json, setJson] = React.useState({})

	// Fetch the JSON from:
	// https://gist.githubusercontent.com/justjake/159eb833b505ed6091454addf4edc73a/raw/1c7196697d3e733e5defdd7fde446d120aaf2284/block.json

	return (
		<code style={{ whiteSpace: "pre" }}>
			{JSON.stringify(json, undefined, 2)}
		</code>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
