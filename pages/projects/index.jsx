import React from "react";
import Title from "../../components/title";
import {
	NextjsIcon,
	TailwindIcon,
	FirebaseIcon,
	MuiIcon,
} from '../../components/icons'

export default function Projects() {
	return (<>
		<Title description="18 year old web developer. based in Lombok, Indonesia. currently studying at Udayana University.">
			Abdurrazik | Projects
		</Title>

		<div className="min-h-screen overflow-hidden text-[#282828] flex flex-col">
			<nav className="p-4">
				<div className="container mx-auto max-w-6xl flex items-center justify-center">
					<a
						href="/"
						className="flex items-center justify-center space-x-2"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" /><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" /></svg>
					</a>
				</div>
			</nav>

			<div className="flex-1 py-5 md:py-0 flex flex-col items-center justify-center space-y-10 max-w-xs md:max-w-6xl container mx-auto">
				<h1 className="font-medium text-4xl md:text-6xl">Projects</h1>
				<div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
					<a href="https://wannabecreative.id/" className="overflow-hidden flex flex-col rounded-xl border border-[#282828] hover:scale-90 transition-all md:max-w-xs">
						<img src="/wannabe-snapshot.png" alt="Wannabe Creative" className="border-b border-[#282828]" />
						<div className="flex flex-col justify-center p-3">
							<div className="flex">
								<h2 className="font-medium text-xl hover:underline">Wannabe Company Profile</h2>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" /></svg>
							</div>
							<div className="flex space-x-1">
								<NextjsIcon className="w-6 h-6" />
								<TailwindIcon className="w-6 h-6" />
							</div>
						</div>
					</a>
					<a href="https://radiosmanger.web.app/" className="overflow-hidden flex flex-col rounded-xl border border-[#282828] hover:scale-90 transition-all md:max-w-xs">
						<img src="/radiosmanger-snapshot.png" alt="Wannabe Creative" className="border-b border-[#282828]" />
						<div className="flex flex-col justify-center p-3">
							<div className="flex">
								<h2 className="font-medium text-xl hover:underline">Radio SMANGER</h2>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" /></svg>
							</div>
							<div className="flex space-x-1">
								<NextjsIcon className="w-6 h-6" />
								<MuiIcon className="w-6 h-6" />
								<FirebaseIcon className="w-6 h-6" />
							</div>
						</div>
					</a>
					<a href="https://sptfy.tech/" className="overflow-hidden flex flex-col rounded-xl border border-[#282828] hover:scale-90 transition-all md:max-w-xs">
						<img src="/sptfy-snapshot.png" alt="Wannabe Creative" className="border-b border-[#282828]" />
						<div className="flex flex-col justify-center p-3">
							<div className="flex">
								<h2 className="font-medium text-xl hover:underline">sptfy.tech</h2>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" /></svg>
							</div>
							<div className="flex space-x-1">
								<NextjsIcon className="w-6 h-6" />
								<TailwindIcon className="w-6 h-6" />
								<FirebaseIcon className="w-6 h-6" />
							</div>
						</div>
					</a>
				</div>
			</div>

			<footer className="p-4">
				<div className="container mx-auto max-w-6xl flex items-center justify-between">
					<span className="flex items-center justify-center">
						<span className="text-xs md:text-lg">
							&copy; 2023 - All Rights Reserved
						</span>
					</span>
					<ul className="flex items-center justify-center space-x-2 text-xs md:text-base">
						<li>
							<a href="https://www.linkedin.com/in/razikdontcare" className="hover:text-black transition-all">
								Linked In
							</a>
						</li>
						<span className="font-bold">/</span>
						<li>
							<a href="https://www.instagram.com/razikdontcare" className="hover:text-black transition-all">
								Instagram
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	</>)
}