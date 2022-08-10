import React from "react";
import Coffee from '../assets/coffee-svgrepo-com.svg'

const Header = () => {
	return (
		<>
			<header>
				<div className="flex items-center flex-col">
					<div className="flex flex-row mt-7">
						<img className="w-[5rem] h-[5rem]" src={Coffee} alt=""></img>
						<h1 className="text-5xl mt-4 text-black font-bold uppercase">
							rocket<span className="text-amber-800">coffee</span>
						</h1>
					</div>
					<p className="mb-3 mt-4 ml-11 text-gray-400">Aberto todos os dias (8h - 21h)</p>
				</div>
			</header>
		</>
	);
};

export default Header;
