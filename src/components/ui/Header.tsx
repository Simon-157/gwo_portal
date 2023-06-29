import Link from "next/link";
import Section from "./Section";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { headerLinks } from "@/utils/constants";
import NavLink from "./NavLink";


 const Header = () => {
	// const { status } = useSession({ required: false });
	// const router = useRouter();
	return (
		<Section className="bg-base-100/75 backdrop-blur sticky top-0 shadow-[0_5px_200px_-30px_hsl(var(--p))] py-2 z-[100]">
			<header aria-label="Site Header">
				<div className="flex h-16 items-center justify-between">
					<div className="flex-1 md:flex md:items-center md:gap-12">
						<Link className="flex items-center gap-4" href="/">
							<span className="sr-only">Home</span>
							<img
								src="/logos/transparent/gwologo.png"
								className="max-w-[3em]"
								alt="arafa tech's logo"
							/>
							<h1 className="hidden text-xl md:block font-semibold tracking-widest uppercase pr-20">
								Generational Writers
							</h1>
						</Link>
					</div>
					<div className="md:flex md:items-center md:gap-12">
						<nav aria-label="Site Nav" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								{headerLinks.map((link) => (
									<NavLink key={link.href} href={link.href}>
										{link.name}
									</NavLink>
								))}
							</ul>
						</nav>
						<div className="flex items-center gap-4">
						
							<div className="block md:hidden">
								<button className="btn btn-primary btn-square transition">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<FontAwesomeIcon icon={faBars} />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</Section>
	);
}


export default Header;