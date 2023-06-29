//components
import StepLayout from "../steps/layout";

const Mission = () => {
	return (
		<StepLayout title="Mission" number={1}>
			<div className="flex flex-1 items-center flex-col lg:flex-row pb-8">
				<h2 className="h3 lowercase text-white">
					Mission.
					<span className="text-glow">
						Generational Writers organization is aimed at equipping
						people especially the youth with the deterity of writing
						with prerequisite skills, networking tools and knowledge
						on writing to positively affect, transform and impact
						the world religiously, socially, morally and culturally.
					</span>
				</h2>
			</div>
		</StepLayout>
	);
};

export default Mission;
