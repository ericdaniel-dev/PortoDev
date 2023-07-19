function Introduction(){
	return(
		<div id="introduction" class="border-2 border-black p-3 w-full h-auto">
			<div id="introBox" class="flex flex-col md:flex-row justify-around items-center h-[400px] overflow-hidden">
				<div id="greetings" class="border-2 border-black h-full w-full md:w-1/2 flex flex-col justify-center items-center">
					<h3 class="text-3xl">Hello i'm John Doe</h3>
					<p>Junior Developer with UI/UX experienced</p>
				</div>
				<div id="profileImage" class="h-full w-full md:w-1/2 object-cover overflow-hidden flex flex-col justify-center items-center">
					<img src="./src/assets/Profile Images.jpg" class="w-3/4 h-3/4 overflow-hidden transform scale-x-[-1]" alt="Profile Image"/>
				</div>
			</div>
		</div>
		);
}

export default Introduction;