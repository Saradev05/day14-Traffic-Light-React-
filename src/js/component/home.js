import React, { useState } from "react";
import "../../styles/home.scss";

//create your first component
export function Home() {
	const [selectedLight, setSelectedLight] = useState("red-light");
	return (
		<div className="container col-4  mt-1">
			<div className="traffic-light   col-4 ">
				<div className="lights-box ">
					<div
						onClick={() => setSelectedLight("red-light")}
						className={
							"light red-light" +
							(selectedLight === "red-light" ? " glow" : "")
						}></div>

					<div
						onClick={() => setSelectedLight("yellow-light")}
						className={
							"light yellow-light" +
							(selectedLight === "yellow-light" ? " glow" : "")
						}></div>
					<div
						onClick={() => setSelectedLight("green-light")}
						className={
							"light green-light" +
							(selectedLight === "green-light" ? " glow" : "")
						}></div>
				</div>
				<div className="stick "></div>
			</div>
			<p className="footer">
				Made by <a className="">Sara Cantón</a>
			</p>
		</div>
	);
}
