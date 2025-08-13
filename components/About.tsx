'use client';
import React, { useState } from 'react';

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [skillExplanation, setSkillExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to call the Gemini API for skill explanation
  const handleSkillClick = async (skillName: string) => {
    setSelectedSkill(skillName);
    setSkillExplanation(''); // Clear previous explanation
    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const prompt = `Explain "${skillName}" in the context of software development for a professional portfolio. Keep it concise, around 2-3 sentences, focusing on its purpose and benefit.`;
      
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });

      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will automatically provide the API key at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API error: ${response.status} - ${errorData.error.message || 'Unknown error'}`);
      }

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setSkillExplanation(text);
      } else {
        setSkillExplanation('Could not generate an explanation for this skill.');
      }
    } catch (err) {
      console.error("Error calling Gemini API:", err);
      let errorMessage = 'Unknown error';
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'object' && err !== null && 'message' in err && typeof (err as any).message === 'string') {
        errorMessage = (err as any).message;
      }
      setError(`Failed to load explanation: ${errorMessage}. Please try again.`);
      setSkillExplanation('');
    } finally {
      setIsLoading(false);
    }
  };

  const skills = {
    frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 & CSS3'],
    backend: ['Node.js & Express.js', 'Python & Django/Flask', 'RESTful APIs', 'GraphQL'],
    databasesTools: ['MongoDB', 'PostgreSQL', 'Git & GitHub', 'Docker', 'VS Code']
  };

  return (
    <section id="about" className="flex flex-col items-center justify-center py-20 px-8 md:px-16 lg:px-24 w-full">
      <div className="max-w-4xl text-center">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 leading-tight">
          Who I Am
        </h2>

        {/* Introduction Paragraphs */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Hello! I'm a passionate Software Developer with a knack for crafting intuitive
          user experiences and robust backend systems. Based in [Your City/Country],
          I thrive on solving complex problems and bringing ideas to life through code.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
          My journey in software development began with a curiosity for how things work,
          and it has evolved into a dedication to building efficient, scalable, and
          beautiful applications. I'm always eager to learn new technologies and
          contribute to impactful projects.
        </p>

        {/* Skills Section */}
        <div className="mt-16 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">My Skills ✨</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Frontend Skills */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">Frontend</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {skills.frontend.map(skill => (
                  <li key={skill} className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSkillClick(skill)}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">Backend</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {skills.backend.map(skill => (
                  <li key={skill} className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSkillClick(skill)}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Databases & Tools */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">Databases & Tools</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {skills.databasesTools.map(skill => (
                  <li key={skill} className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => handleSkillClick(skill)}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Skill Explanation Area */}
        {(isLoading || skillExplanation || error) && (
          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-inner text-left">
            {isLoading ? (
              <div className="flex items-center justify-center text-gray-600">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating explanation for {selectedSkill}...
              </div>
            ) : error ? (
              <p className="text-red-600 font-medium">{error}</p>
            ) : (
              <>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">What is {selectedSkill}?</h4>
                <p className="text-gray-700 leading-relaxed">{skillExplanation}</p>
              </>
            )}
          </div>
        )}

        {/* Call to Action */}
        <button className="mt-12 flex items-center text-lg md:text-xl font-medium px-8 py-4 border-2 border-black rounded-full self-center hover:bg-black hover:text-white transition-colors duration-300">
          Download My Resume
          <span className="ml-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
            &darr;
          </span>
        </button>
      </div>
    </section>
  );
};

export default About;
