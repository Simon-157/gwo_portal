import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";

//components
import Section from "../ui/Section";


export default function Banner() {
	const [show, setShow] = useState(true);
	return (
		<div>
			{show && (
				<Section className="bg-primary bg-opacity-80 text-center text-neutral py-2">
					Remember to sign up for our mentorship program!
					<a href="">
						<FontAwesomeIcon
							icon={faArrowRight}
							className="ml-2 h-4 w-4"
						/>
					</a>
					<button
						onClick={() => setShow(false)}
						className="float-right hidden md:block"
					>
						<FontAwesomeIcon icon={faX} />
					</button>
				</Section>
			)}
		</div>
	);
}
