//libraries
import Link from "next/link";

//components
import Section from "@/components/ui/Section";
import Button from "@/components/button/Button";


export default function CallToAction() {
	return (
		<Section>
			<div className="relative flex flex-col items-center justify-center gap-8 py-20 min-h-[60vh] z-10">
				<div className="absolute z-[-1]">
					<img
						className="inset-0 transparent-fade pb-40 w-[400px]"
						src="/logos/transparent/gwologo.png"
					/>
				</div>
				<h1 className="z-10 text-[20vw] text-center h0 md:text-6xl lg:text-7xl xl:text-8xl font-bold">
					Join
					<span>
						<span className="px-2 text-glow">Organization.</span>
					</span>
				</h1>

				<p className="z-10 sm:text-sm md:text-md lg:text-lg xl:text-2xl w-full max-w-6xl text-center bg-white/60 bg-clip-text text-transparent">
					Begin the next step in your writing adventure!
				</p>

				<Button children={<Link href="/" className="btn btn-wide btn-primary">
					Get Started
				</Link>} type={""} />

			</div>
		</Section>
	);
}
