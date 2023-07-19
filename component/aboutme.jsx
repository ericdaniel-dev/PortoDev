function Aboutme(){
	return(
		<div id="aboutmeBox" class="border-2 border-black h-auto">
			<div id="aboutMe" class="flex items-center justify-center flex-col md:flex-row w-full h-auto p-3">
				<div id="selfimage" class="border-2 border-black w-full md:w-1/4 h-auto mx-auto md:mx-0">
					<img src="./src/assets/Self image.jpg" class="object-cover w-[400px] h-[400px] rounded-full transform scale-[0.7]" alt="self image"/>
				</div>
				<div id="aboutmyself" class="border-2 border-black w-full md:w-1/2 p-8 h-auto">
					<p>
						  My name is John Doe, and I am a junior developer
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