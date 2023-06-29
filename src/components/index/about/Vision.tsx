//components
import StepLayout from "../steps/layout";

const Vission = () => {
	return (
		<StepLayout title="Vission" number={2}>
			<div className="flex flex-1 items-center flex-col lg:flex-row pb-8">
				<h2 className="h3 lowercase text-white">
					Vission.
					<span className="text-glow">
						Generational Writers' organization hopes to raise well
						endowed and talented young people especially the youth
						with the unique dexterity of writing and then utimatley
						become the biggest writing and influencing organization
						in the world
					</span>
				</h2>
			</div>
		</StepLayout>
	);
};

export default Vission;
