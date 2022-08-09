import React from "react";
import Header from "./Componentes/Header";
import QrCode from "./Componentes/QrCode";
import Section1 from "./Componentes/Section1";
import Section2 from "./Componentes/Section2";

import "./index.css";

function App() {
	return (
		<React.Fragment>
			<Header />
			<QrCode />
			<Section1 />
			<Section2 />
		</React.Fragment>
	);
}

export default App;
