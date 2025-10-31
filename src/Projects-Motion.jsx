import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Code, Megaphone } from 'lucide-react'

function Motion () {
  useEffect(() => {
      AOS.init({ duration: 800, easing: 'ease-out', once: true });
    }, []);

  return (
    <section data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-evenly mt-16 w-full h-[1300px] border-t border-b border-gray-300">
      <p className="text-2xl font-extrabold text-black">Just a Few Things I'm Good At.</p>
      <main className="flex flex-col h-[480px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="ml-6 mt-16 flex items-center gap-2">
          <div className="flex items-center justify-center h-12 w-12 bg-black rounded-lg"><Code className="text-white" /></div>
          <p className="text-lg font-bold text-black">Front-End Development</p>
        </div>
          <p className="mt-6 ml-6 mr-6 text-base font-medium text-gray-600">I love building clean, responsive, and user-focused web interfaces with an eye for detail and functionality.</p>
          <p className="mt-4 ml-6 mr-6 text-base font-medium text-gray-600">As a Software Engineering intern at <a href="https://www.linkedin.com/company/sphere4devs/" className="text-blue-600 underline">DevSphere,</a> I work with technologies like JavaScript, TailwindCSS, and React.js to bring ideas to life through modern design and smooth user experience.</p>
          <p className="mt-4 ml-6 mr-6 text-base font-medium text-gray-600">I'm continuously learning and expanding my skill set on my path towards Software Engineering to build solutions that are both intuitive and effective.</p>
      </main>

      <main className="flex flex-col h-[480px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="ml-6 mt-20 flex items-center gap-2">
          <div className="flex items-center justify-center h-12 w-12 bg-black rounded-lg"><Megaphone className="text-white" /></div>
          <p className="text-lg font-bold text-black">Brand Ambassadorship Opportunities</p>
        </div>
        <p className="mt-6 ml-6 mr-6 text-base font-medium text-gray-600">Beyond coding, I've been involved in a number of campus brand ambassadorship opportunities, including <a href="https://www.univad.org/" className="text-blue-600 underline">Univad</a> and <a href="https://cowrywise.com/" className="text-blue-600 underline">Cowrywise.</a></p>
        <p className="mt-6 ml-6 mr-6 text-base font-medium text-gray-600">I enjoy collaborating with brands that value creativity and community - helping them connect with students in ways that feel authentic and relatable.</p>
        <p className="mt-6 ml-6 mr-6 text-base font-medium text-gray-600">It's all about meaningfull engagement and representing ideas I believe in.</p>
      </main>
    </section>
  );
}

export default Motion;