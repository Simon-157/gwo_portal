export type Blog = {
	title: string;
	tags: string[];
	avatar: string;
	background: string;
	type: string;
	author: string;
	link: string;
	date: number; // unix
	slug?: string;
    content?:string
};


export type AdminProp = {
	adminId: string,
	adminName: string,
	adminProfileUrl: string,
	adminProfession: string,
}