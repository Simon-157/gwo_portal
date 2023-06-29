import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function HomeLayout({
	children,
}: {
	children?: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col relative w-full">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
