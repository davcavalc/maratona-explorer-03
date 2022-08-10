import React from "react";
import Qrcode from "../assets/qr-code (1).png";
const QrCode = () => {
	return (
		<>
			<div className="neumorph mx-40 mr-[82rem] mb-7">
                <img className="p-6 h-40 w-40" src={Qrcode} alt="" />
                <span className="p-6 ml-[20px] text-black font-bold">Scan Me!</span>
            </div>
		</>
	);
};

export default QrCode;
