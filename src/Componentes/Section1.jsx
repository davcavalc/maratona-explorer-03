import React from "react";

const Section1 = () => {
	return (
		<>
			<h2 className="text-3xl uppercase mt-3 text-center bg-orange-400 mx-72 text-black font-bold">
				brunch
			</h2>
			<section className="border-box border-4 mt-3 mx-72">
				<div className="mx-3 my-3">
					<div className="flex justify-between font-bold uppercase">
						<h2>waffle doce</h2>
						<span>R$ 37,70</span>
					</div>
					<details className="mt-3 bg-orange-200 mx-3">
						<summary className="font-bold">Descrição</summary>
						<p className="text-justify">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum neque tempore esse ipsam
							culpa eos labore dolore iste magnam, facilis reprehenderit nostrum sit impedit facere numquam
							aliquam mollitia porro dolores accusamus quos, cum dolorem? Omnis, recusandae expedita
							tempora nemo velit quo odit doloribus ea, reprehenderit, amet saepe! Fugiat, at dolorum?
						</p>
					</details>
				</div>
				<div className="mx-3 my-3">
					<div className="flex justify-between font-bold uppercase">
						<h2>arroz doce</h2>
						<span>R$ 37,70</span>
					</div>
					<p className="text-justify">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum neque tempore esse ipsam culpa
						eos labore dolore iste magnam, facilis reprehenderit nostrum sit impedit facere numquam
						aliquam mollitia porro dolores accusamus quos, cum dolorem? Omnis, recusandae expedita tempora
						nemo velit quo odit doloribus ea, reprehenderit, amet saepe! Fugiat, at dolorum?
					</p>
				</div>
				<div className="mx-3 my-3">
					<div className="flex justify-between font-bold uppercase">
						<h2>maçã doce</h2>
						<span>R$ 37,70</span>
					</div>
					<p className="text-justify">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum neque tempore esse ipsam culpa
						eos labore dolore iste magnam, facilis reprehenderit nostrum sit impedit facere numquam
						aliquam mollitia porro dolores accusamus quos, cum dolorem? Omnis, recusandae expedita tempora
						nemo velit quo odit doloribus ea, reprehenderit, amet saepe! Fugiat, at dolorum?
					</p>
				</div>
			</section>
		</>
	);
};

export default Section1;
