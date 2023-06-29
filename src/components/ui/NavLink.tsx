import Link from "next/link";

const NavLink  = ({
	children,
	href,
}: {
	children?: React.ReactNode;
	href: string;
}) =>{
	return (
		<li>
			<Link
				className="transition text-transparent bg-white hover:bg-gradient-to-r bg-clip-text from-primary to-secondary font-semibold uppercase tracking-widest"
				href={href}
			>
				{children}
			</Link>
		</li>
	);
}


export default NavLink;