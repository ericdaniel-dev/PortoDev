import React from 'react';

function SkillComponent(){
	const exp = {
		techstack: {
			Html: 5, Css: 5,
			Javascript: 3, NodeJs: 1,
			ReactJs: 1, TailwindCSS: 1,
		}
	};
	const skills = Object.entries(exp.techstack);
	return(
		<ul className="flex flex-col gap-2">
			{skills.map(([language, expy]) => (
				<li className="border-2 border-b-black p-2 flex justify-between" key={language}>
					<span>{`${language} `}</span>
					<span>{`${expy} years experience`}</span>
				</li>
				))}
		</ul>
		);
}

function SoftskillComponent(){
	const softskills = [
		["Figma", "I have experience using figma tools for creating website design and mobile app design."],
		["Problem Solving", "As a programmer, I possess excellent problem-solving skills that have been honed through practical experience and continuous learning."],
		["UI/UX", "As an experienced UI/UX designer, I possess a diverse skill set that empowers me to create visually stunning and highly functional digital experiences for users."],
		["SEO", "As developer, i have experience in Search Engine Optimization and knowledge how to make website faster."],
	];
	return(
		<div id="softskillbar" className="w-full grid gap-x-2 gap-y-2 grid-cols-1 md:grid-cols-2">
			{softskills.map((item, index) =>(
				<div id="SkillCard" className="flex flex-col justify-center items-center w-full h-52 border-2 border-black" key={item}>
					<h4 className="text-xl text-center p-3">{item[0]}</h4>
					<p className="p-3">{item[1]}</p>
				</div>
				))}
		</div>
		);
}


function MySkills(){
	return(
		<div id="myskillBox" className="w-full p-3 shadow-sm shadow-black">
			<h2 className="text-xl font-semibold">Skills</h2>
			<div id="skills" className="p-3 flex justify-around h-auto gap-2 flex-col md:flex-row">
				<div id="techstack" className="flex-1 rounded-xl h-auto w-full md:w-1/3 p-3 flex flex-col">
					<h3 className="text-2xl">Tech Stack</h3>
					<SkillComponent/>
				</div>
				<div id="softskills" className="border-2 border-black rounded-xl h-auto w-full md:w-3/5 p-3 flex flex-col">
					<h3 className="text-2xl">Soft Skill</h3>
					<div id="SoftskillBox">
						<SoftskillComponent/>
					</div>
				</div>
			</div>
		</div>
		);	
}

export default MySkills;