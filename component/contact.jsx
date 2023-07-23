import FacebookIcon from '../src/assets/facebook.svg';
import TwitterIcon from '../src/assets/twitter.svg';
import InstagramIcon from '../src/assets/instagram.svg';
import GithubIcon from '../src/assets/github.svg';

function SocMedComponent(){
	const socialmedia = {
		facebook: [FacebookIcon, "https://facebook.com"],
		twitter: [TwitterIcon, "https://twitter.com"],
		instagram: [InstagramIcon, "https://instagram.com"],
		github: [GithubIcon, "https://github.com"]
	};
	const socmedOBJ = Object.entries(socialmedia);
	return(
		<ul className="flex flex-row gap-2">
			{socmedOBJ.map(([social, src]) =>(
				<li key={social}>
					<a href={src[1]} alt="social media account">
						<img src={src[0]} alt="social media svg icon" width="35px" height="35px"/>
					</a>
				</li>
				))}
		</ul>
		);
}

function Contact(){
	const SocialComponent = SocMedComponent();
	return(
		<footer className="border-2 border-black shadow-xl shadow-black w-full h-auto shadow-xl p-3">
			<div id="Footerbox" className="flex flex-col justify-between gap-2 md:flex-row">
				<div id="formcontact" className="flex flex-col justify-center items-center w-full md:w-1/2">
					<div id="formBox" className="w-3/4 p-3">
					<h4 className="text-xl font-semibold">Form Contact</h4>
					<form action="" method="POST" className="flex flex-col gap-1 p-2">
						<label htmlFor="name">Name: </label>
						<input type="text" className="border-2 border-gray-400" id="name" name="name" autoComplete="off" required/>
						<label htmlFor="email">Email: </label>
						<input type="text" className="border-2 border-gray-400" id="email" name="email" autoComplete="off" required/>
						<label htmlFor="subject">Subject: </label>
						<input type="text" className="border-2 border-gray-400" id="subject" name="subject" autoComplete="off" required/>
						<label htmlFor="message">Message: </label>
						<input type="text" className="border-2 border-gray-400" id="message" name="message" autoComplete="off" required/>
						<button type="submit" className="bg-gray-400">Send</button>
					</form>	
					</div>
				</div>
				<div id="mycontact" className="shadow-lg shadow-gray-500 w-full md:w-1/2 flex flex-col gap-2 p-3 m-auto">
					<h4 className="text-xl font-semibold">My Contact</h4>
					<div id="contactinfo" className="flex flex-col">
						<span>Email: examples@email.com</span>
						<span>Telegram: t.me/@examples</span>
					</div>
					<div id="socialmedia">
						{SocialComponent}
					</div>
				</div>
			</div>
		</footer>
		);
}

export default Contact;