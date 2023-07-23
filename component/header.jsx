import { useState } from 'react';
import NavbarIcon from '../src/assets/navbar.svg';

function Header(){
	const [isOpen, setIsOpen] = useState(false);
	function toogle(){
		const ul = document.getElementById('navlist');
		if(isOpen){
			ul.classList.remove('hidden');
			ul.classList.add('block');
			setIsOpen(false);
		}
		else{
			ul.classList.remove('block');
			ul.classList.add('hidden');
			setIsOpen(true);
		}
	}
	return(
		<header className="border-b-2 border-black p-3 shadow-md shadow-gray-400 w-full">
			<div id="headerbox" className="flex flex-shrink items-center justify-between p-1">
				<span className="text-2xl">Eric</span>
				<nav id="navbar" className="flex gap-3 p-2 text-xl items-center">
				<ul id="navlist" className="hidden md:flex">
					<li className="p-2 hover:bg-gray-100 rounded-lg"><a href="#">Home</a></li>
					<li className="p-2 hover:bg-gray-100 rounded-lg"><a href="#aboutMe">About Me</a></li>
					<li className="p-2 hover:bg-gray-100 rounded-lg"><a href="#myskillBox">Skills</a></li>
					<li className="p-2 hover:bg-gray-100 rounded-lg"><a href="#myproject">Project</a></li>
					<li className="p-2 hover:bg-gray-100 rounded-lg"><a href="#">Contact</a></li>
				</ul>
				<button id="toogle" onClick={toogle} className="p-5 cursor-pointer hover:bg-gray-100 block md:hidden"><img src={NavbarIcon} width="35px" height="35px" alt='navbar-icon'/></button>
				</nav>
			</div>
		</header>
		);
}

export default Header;