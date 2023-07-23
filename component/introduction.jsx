import ProfileImage from '../src/assets/Profile Images.jpg';

function Introduction(){
	return(
		<div id="introduction" className="p-2 w-full shadow-sm shadow-black h-auto">
			<div id="introBox" className="flex flex-col md:flex-row justify-around items-center h-[400px] overflow-hidden">
				<div id="greetings" className="shadow-gray-400 shadow-lg h-full w-full md:w-1/2 flex flex-col justify-center items-center">
					<h2 className="text-3xl">Hello i'm Eric</h2>
					<p className="text-xl p-2">UI/UX Junior Developer.</p>
				</div>
				<div id="profileImage" className="h-[800px] md:h-full w-full md:w-1/2 object-cover overflow-hidden flex flex-col justify-center items-center">
					<img src={ProfileImage} className="w-3/4 h-3/4 overflow-hidden transform scale-x-[-1]" alt="Profile Image"/>
				</div>
			</div>
		</div>
		);
}

export default Introduction;