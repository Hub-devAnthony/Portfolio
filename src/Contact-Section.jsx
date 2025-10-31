import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Twitter, Github, Mail, Linkedin } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa'

function ContactSection () {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out', once: true });
  }, []);

  const [ message, setMessage ] = useState('')
  const phoneNumber = '2348136503239'

  const sendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div id="contact" data-aos="fade-up" data-aos-delay="600">
      <p className="mt-[120px] ml-4 text-2xl font-extrabold text-black">Hit Me Up!</p>
      <p className="mt-2 ml-4 pr-5 text-base font-medium text-gray-600">Every great story starts with a simple hello, if you've got a project, an idea, or just want to connect, I would love to hear from you. I believe collaborations sparks creativity and amazing things happen when passionate people share their visions. So don't hesitate to reach out. let's start a conversation that could turn inspiration into something truly memorable.</p>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="mx-auto block mt-6 w-[85vw] h-48 bg-gray-200 border border-gray-300 rounded-2xl shadow-lg font-medium text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none pt-5 pl-6" type="text" placeholder="Let's build something together!"/>
        <button onClick={sendMessage} className="mx-auto block mt-6 w-[85vw] h-16 rounded-lg bg-black text-white text-sm font-medium shadow-lg">Send Message</button>
        <div className="mx-auto mt-[200px] w-[85vw] border-b border-gray-300"></div>
        <footer className="mt-12 text-center font-medium text-base text-gray-600">Copyright  &copy; 2025 Anthony.</footer>

        <div className="h-16 w-full flex items-center justify-center space-x-6 text-lg text-gray-600">
          <a className='hover:text-black' href="mailto:isijolaayomikun04@gmail.com"><Mail /></a>
          <a className="text-xl hover:text-black" href="https://www.linkedin.com/in/ayomikun-i-399641352/"><FaLinkedin /></a>
          <a className='hover:text-black' href='https://github.com/Hub-devAnthony'><Github /></a>
          <a className='hover:text-black' href="https://x.com/_anthony_yk"><Twitter /></a>
          <a className='text-xl hover:text-black' href="https://medium.com/@anthony.yk"><FaMedium /></a>
        </div>
    </div>
  );
}

export default ContactSection;