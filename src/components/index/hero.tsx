import Link from "next/link";
import Section from "../ui/Section";

export default function Hero() {
	return (
		<Section>
			<div className="relative flex flex-col items-center justify-center gap-8 py-20 min-h-[60vh] z-10">
				<div className="absolute z-[-1]">
					<img
						className="inset-0 transparent-fade pb-40"
						src="/logos/transparent/gwologo.png"
					/>
				</div>
				<h1 className="z-10 text-[20vw] text-center md:text-6xl lg:text-7xl xl:text-8xl leading-none select-none font-bold flex flex-col md:flex-row ">
					<span
						data-content="Learn."
						className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:bg-white/25 before:bg-clip-text before:text-transparent before:animate-gradient-background-1 "
					>
						<span className="z-10 px-2 text-transparent text-gradient animate-gradient-foreground-1 text-shadow-sm leading-none">
							Learn.
						</span>
					</span>
					<span
						data-content="Write."
						className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:bg-white/25 before:bg-clip-text before:text-transparent before:animate-gradient-background-2"
					>
						<span className="px-2 text-transparent text-gradient animate-gradient-foreground-2 text-shadow-sm leading-none">
							Write.
						</span>
					</span>
					<span
						data-content="Impact"
						className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:bg-white/25 before:bg-clip-text before:text-transparent before:animate-gradient-background-3"
					>
						<span className="px-2 text-transparent text-gradient animate-gradient-foreground-3 text-shadow-sm leading-none">
							Impact
						</span>
					</span>
				</h1>

				<p className="z-10 sm:text-sm md:text-md lg:text-lg xl:text-2xl w-full max-w-6xl text-center bg-white/60 bg-clip-text text-transparent">
					Generational Writers' Organization (GWO) is a non-profit organization based in Accra, Ghana. 
					It was founded in 2017 by a group of writers who wanted to create a space for young writers to learn, grow, and connect with each other. 
				</p>
				<Link
					href="/discord"
					className="btn btn-wide btn-primary"
					onClick={() => {

					}}
				>
					Get Started
				</Link>
			</div>
		</Section>
	);
}
