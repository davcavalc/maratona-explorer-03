import React from "react";

const Header = () => {
	return (
		<>
			<header className="flex items-center mt-4 flex-col">
				<h1 className="text-5xl font-bold uppercase">rocket<span className="text-amber-800">coffe</span></h1>
				<p>Aberto todos os dias (8h - 21h)</p>
			</header>
		</>
	);
};

export default Header;
