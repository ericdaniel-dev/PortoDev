import ProjectImage from '../src/assets/Profile Images.jpg';

function Project(){
	return(
		<div id="ProjectBox" className="w-auto h-auto border-2 border-black shadow-sm shadow-black p-2">
			<h2 className="text-xl font-semibold">My Project</h2>
			<div id="myproject" className="w-full h-auto gap-2 p-3 grid grid-cols-1 lg:grid-cols-2">
				<div id="projectcards" className="flex flex-row gap-5 w-full h-[200px] overflow-ellipsis border-2 border-black">
					<div id="projectthumb" className="w-1/3 h-full">
						<img src={ProjectImage} className="w-full h-full object-cover" alt='Projects Image'/>
					</div>
					<div id="projectdesc" className="flex flex-col w-3/4 h-full gap-1">
						<h4 className="text-xl h-1/6">Lorem ipsum</h4>
						<p className="text-sm h-3/5 line-clamp-6 overflow-hidden">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<span id="techused" className="h-1/5 text-lg">Tailwindcss</span>
					</div>
				</div>
				<div id="projectcards" className="flex flex-row gap-5 w-full h-[200px] overflow-ellipsis border-2 border-black">
					<div id="projectthumb" className="w-1/3 h-full">
						<img src={ProjectImage} className="w-full h-full object-cover" alt='Projects Image'/>
					</div>
					<div id="projectdesc" className="flex flex-col w-3/4 h-full gap-1">
						<h4 className="text-xl h-1/6">Lorem ipsum</h4>
						<p className="text-sm h-3/5 line-clamp-6 overflow-hidden">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<span id="techused" className="h-1/5 text-lg">Tailwindcss</span>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Project;