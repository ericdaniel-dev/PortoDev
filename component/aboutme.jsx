import SelfImage from '../src/assets/Self image.jpg';


function Aboutme(){
	return(
		<div id="aboutmeBox" className="w-full h-auto shadow-sm shadow-black p-2">
			<div id="aboutMe" className="flex items-center justify-center flex-col md:flex-row w-full h-auto p-3">
				<div id="selfimage" className="w-full md:w-1/4 h-auto mx-auto md:mx-0">
					<img src={SelfImage} className="object-cover w-full h-full rounded-full transform scale-[0.7]" alt="self image"/>
				</div>
				<div id="aboutmyself" className="border-2 border-gray-400 rounded-lg w-full md:w-1/2 p-8 h-auto">
					<h2 className="text-xl font-semibold">About Me</h2>
					<p className="p-2">
						  My name is Eric, and I am a junior developer
						with a passion for programming and creating innovative
						solutions. I am also a UI/UX developer, specializing in
						designing user-friendly interfaces that provide seamless user
						experiences. With my combined expertise in development and UI/UX,
						I aim to create visually appealing and highly functional digital
						products.
					</p>					
				</div>
			</div>
		</div>
		);
}

export default Aboutme;