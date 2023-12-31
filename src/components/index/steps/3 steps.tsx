//components
import Section from "@/components/ui/Section";
import Write from "./write";
import Impact from "./impact";
import Learn from "./learn";


export default function ThreeSections() {
	return (
		<Section>
			<div className="max-w-[1400px] w-[90%] mx-auto flex gap-10">
				<div className="w-full">
					<h2 className="text-left text-glow text-lg uppercase tracking-[0.2em] font-semibold">
						Why GWO Org?
					</h2>
					<h1 className="h0 mt-3 font-semibold">
						It's as simple as...
					</h1>
					<div className="flex flex-col gap-5 mt-14">
						<Learn />
						<Write />
						<Impact />
					</div>
				</div>
			</div>
		</Section>
	);
}
