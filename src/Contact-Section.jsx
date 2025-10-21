import { Twitter, Github, Mail, Linkedin } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa';

function ContactSection () {
  return (
    <>
      <p className="mt-12 ml-4 text-2xl font-extrabold text-black">Let's Connect!</p>
      <p className="mt-2 ml-4 text-base font-medium text-gray-600">Every great story starts with a simple hello, if you've got a project, an idea, or just want to connect, i would love to hear from you. I believe collaborations sparks creativity and amazing things happen when passionate people share their visions. So don't hesitate to reach out; let's start a conversation that could turn inspiration into something truly memorable.</p>
        <textarea className="mx-auto block mt-6 w-[85vw] h-56 border border-gray-300 rounded-2xl shadow-lg font-medium text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none pt-4 pl-4" type="text" placeholder="Let's build something amazing together!"/>
        <button className="mx-auto block mt-4 w-[85vw] h-16 rounded-lg bg-black text-white text-sm font-medium shadow-lg">Send Message</button>
        <div className="mt-[200px] w-[85vw] border-b border-gray-300"></div>
        <footer className="mt-12 text-center font-medium text-base text-gray-600">Copyright  &copy; 2025 Anthony.</footer>

        <div className="h-16 w-full flex items-center justify-center space-x-6 text-lg text-gray-600">
          <a className='hover:text-black' href="to"><Mail /></a>
          <a className="text-xl hover:text-black" href="to"><FaLinkedin /></a>
          <a className='hover:text-black' href='to'><Github /></a>
          <a className='hover:text-black' href="to"><Twitter /></a>
        </div>
    </>
  );
}

export default ContactSection;