import { useState } from 'react';

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
		<header class="border-2 border-black p-3 w-full">
			<div id="headerbox" class="flex flex-shrink items-center justify-between p-1">
				<span class="text-2xl">John Doe</span>
				<nav id="navbar" class="flex gap-3 p-2 text-xl items-center">
				<ul id="navlist" class="hidden md:flex">
					<li class="p-2 hover:bg-gray-100 rounded-lg"><a href="#">Home</a></li>
					<li class="p-2 hover:bg-gray-100 rounded-lg"><a href="#aboutMe">About Me</a></li>
					<li class="p-2 hover:bg-gray-100 rounded-lg"><a href="#">Skills</a></li>
					<li class="p-2 hover:bg-gray-100 rounded-lg"><a href="#">Contact</a></li>
				</ul>
				<button id="toogle" onClick={toogle} class="p-5 cursor-pointer hover:bg-gray-100 block md:hidden">X</button>
				</nav>
			</div>
		</header>
		);
}

export default Header;