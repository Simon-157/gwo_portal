//components
import StepLayout from "../steps/layout";


const Values = () => {
	return (
		<StepLayout title="Core Values" number={3}>
			<div className="flex flex-1 items-center flex-col lg:flex-row pb-8">
				<h2 className="h3 lowercase text-white">

					<ul className="text-glow list-disc list-inside space-y-2">
						<li className="py-1">Commitment</li>
						<li className="py-1">Integrity</li>
						<li className="py-1">Sacrifice</li>
						<li className="py-1">Tolerance</li>
						<li className="py-1">Hardwork</li>
					</ul>

				</h2>
			</div>
		</StepLayout>
	);
};

export default Values;
