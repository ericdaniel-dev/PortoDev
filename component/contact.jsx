function Contact(){
	return(
		<footer className="w-full h-auto shadow-xl p-3">
			<div id="Footerbox" className="flex flex-col md:flex-row">
				<div id="formcontact" className="flex flex-col justify-center items-center border-2 border-black w-full md:w-1/2">
					<div id="formBox" className="w-1/2 p-3">
					<h4>Form Contact</h4>
					<form action="" method="POST" className="flex flex-col gap-1 p-2">
						<label htmlFor="name">Name: </label>
						<input type="text" className="border-2 border-gray-400" name="name" autoComplete="off1" required/>
						<label htmlFor="email">Email: </label>
						<input type="text" className="border-2 border-gray-400" name="email" autoComplete="off2" required/>
						<label htmlFor="subject">Subject: </label>
						<input type="text" className="border-2 border-gray-400" name="subject" autoComplete="off3" required/>
						<label htmlFor="message">Message: </label>
						<input type="text" className="border-2 border-gray-400" name="message" autoComplete="off4" required/>
						<button type="submit" className="border-2 border-black bg-gray-400">Send</button>
					</form>	
					</div>
				</div>
				<div id="socialmedia" className="w-full md:w-1/2">
				</div>
			</div>
		</footer>
		);
}

export default Contact;