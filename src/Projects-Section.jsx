function ProjectsSection () {

  return (
    <div id="project">
      <p className="mt-6 ml-4 text-2xl font-extrabold text-black">Here are my Innovations & Experiments.</p>

      <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-2xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="second.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">A Directory of Nigerian Universities</p>
        <p className="ml-6 text-base font-medium text-gray-600">Building a Nigerian Universities Respository with an interactive interface for users to explore and search university data.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="flex flex-col justify-evenly mt-6 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="rounded-xl mx-auto border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="third.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">GreenLab</p>
        <p className="ml-6 text-base font-medium text-gray-600">Building a mobile web app that allows users to identify households chemicals, understand safe usage and promotes eco-friendly alternatives.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="fourth.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">ChemQuest</p>
        <p className="ml-6 text-base font-medium text-gray-600">An interactive quiz game that helps users learn about different chemicals, their use, and their effects on the environment.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="first.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">An E-commerce Website</p>
        <p className="ml-6 text-base font-medium text-gray-600">Working on a responsive e-commerce website with React.js and Tailwind CSS, with ongoing work to make it fully interactive.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="flex flex-col justify-evenly mt-10 mx-auto h-[500px] w-[85vw] border-gray-300 border rounded-2xl shadow-lg">
        <div className="mx-auto rounded-2xl border-gray-300 border w-5/6 h-2/5 overflow-hidden">
          <img className="w-full h-full object-cover" src="second.png" />
        </div>
        <p className="ml-6 text-xl font-bold text-black">A ChatBot</p>
        <p className="ml-6 text-base font-medium text-gray-600">Built a simple chatbot with React.js that answers user questions in real time, working on adding more data to it.</p>
        <button className="ml-6 h-[48px] w-48 bg-gray-400 rounded-xl font-medium text-base">View Project</button>
      </div>

      <div className="mx-auto mt-4 flex flex-col items-center justify-evenly h-56 w-48">
        <button className="px-5 py-3 bg-black text-white rounded-lg shadow-sm font-medium text-base">View All</button>

        <button className="px-3 py-3.5 bg-black text-white rounded-lg shadow-sm font-medium text-base">Read My Articles</button>

        <div className="w-[85vw] border-b border-gray-300"></div>
      </div>
    </div>
  );
}

export default ProjectsSection;