import React from 'react';
function About() {
  return (
    <div className="bg-black text-white py-16">
      <section className="relative mb-20">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-200">Who are We?</h2>
        <p className="text-lg mb-8 text-gray-500">
        Founded in 2017 at IET-DAVV, FeedBox College Clubs has grown into a dynamic force, extending its reach to over 20 colleges across Madhya Pradesh. With the mission to empower college students with the essential digital skills and industry connections needed to thrive in today's competitive world.
        <br />
        <br />
        Now proudly part of the VIT Bhopal campus, FeedBox Clubs continues to inspire students to push boundaries, embrace creativity, and drive meaningful change in both their academic and professional pursuits. Join us in shaping the next generation of visionaries!
            </p>
        <button className="bg-teal-400 hover:bg-teal-500 text-black font-medium py-2 px-6 rounded-md transition duration-300 cursor-pointer ">
              Learn More
            </button>
             </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-gradient-to-b from-teal-900/30 to-transparent w-full h-full"></div>
        </div>
      </section>

      {/* Digital Skill Development */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-200">Our Expertise</h2>
          <p className="text-lg mb-10 text-gray-200">We offer a wide range of services to meet your technology needs, including:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-teal-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
          <h3 className="text-xl font-semibold mb-2">Digital Skill Development</h3>
          <p className="text-gray-200">Hands-on training in areas like coding, design, digital marketing, and emerging technologies to build practical, industry-relevant skills.

</p>
            </div>

{/* Industry Collaboration */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-teal-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Collaboration</h3>
              <p className="text-gray-200">Real-world exposure through expert sessions, live projects, and mentorship from professionals, helping students connect classroom learning with industry practice.</p>
            </div>

            {/* Leadership & Innovation Programs */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-teal-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership & Innovation Programs</h3>
              <p className="text-gray-200">Workshops and events that encourage creative thinking, entrepreneurial mindset, and leadership growth in a collaborative environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-lg mb-10">
            Our team is composed of highly skilled and passionate individuals with diverse backgrounds
            and expertise. We foster a collaborative and innovative environment to deliver the best
            results for our clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Category 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700">
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="p-4">
                
                <h3 className="text-xl text-gray-900 font-semibold mb-2">Experienced Professionals</h3>
              </div>
            </div>

            {/* Team Category 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700">
              <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-gray-900 font-semibold mb-2">Diverse Skill Sets</h3>
              </div>
            </div>

            {/* Team Category 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700">
                <img src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              
              </div>
              <div className="p-4">
                <h3 className="text-xl text-gray-900 font-semibold mb-2">Collaborative Culture</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <p className="text-lg mb-10">We are guided by a set of core values that drive our work and interactions:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Growth Mindset */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-teal-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Mindset</h3>
              <p className="text-gray-300">We believe in continuous personal and professional development by embracing challenges and learning from every experience.</p>
            </div>

            {/* Collaboration */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-teal-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-300">A strong community begins with teamwork. We thrive on mutual respect, shared learning, and collective success.</p>
            </div>

            {/* Creative Thinking */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-teal-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Thinking</h3>
              <p className="text-gray-300">We encourage out-of-the-box ideas, original problem-solving, and innovation that drives meaningful impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="container mx-auto px-4 pt-10 border-t border-gray-800">
        <div className="text-center text-sm text-gray-500 mb-4">
          © 2025  Feedbox. All rights reserved.
        </div>
        <div className="flex justify-center gap-4 mb-0">
          <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
    </div>
    
  )
}

export default About
