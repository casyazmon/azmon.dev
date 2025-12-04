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
    <section id="about" className="flex flex-col items-center justify-center py-24 px-6 md:px-16 lg:px-24 w-full bg-stone-50 dark:bg-stone-950">
      <div className="max-w-5xl text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-light mb-12 leading-tight text-stone-900 dark:text-stone-100 tracking-tight">
          Who I Am
        </h2>

        {/* Introduction Paragraphs */}
        <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-stone-600 dark:text-stone-400 font-light leading-relaxed">
          <p>
            Hello! I'm a passionate Software Developer with a knack for crafting intuitive
            user experiences and robust backend systems. Based in [Your City/Country],
            I thrive on solving complex problems and bringing ideas to life through code.
          </p>
          <p>
            My journey in software development began with a curiosity for how things work,
            and it has evolved into a dedication to building efficient, scalable, and
            beautiful applications. I'm always eager to learn new technologies and
            contribute to impactful projects.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-20 mb-16">
          <h3 className="text-2xl md:text-3xl font-light mb-10 text-stone-800 dark:text-stone-200">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Frontend Skills */}
            <div className="bg-stone-50 dark:bg-stone-800/50 p-8 rounded-2xl border border-stone-100 dark:border-stone-800 hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-medium mb-6 text-stone-900 dark:text-stone-100">Frontend</h4>
              <ul className="space-y-3">
                {skills.frontend.map(skill => (
                  <li key={skill} className="cursor-pointer text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-2" onClick={() => handleSkillClick(skill)}>
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="bg-stone-50 dark:bg-stone-800/50 p-8 rounded-2xl border border-stone-100 dark:border-stone-800 hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-medium mb-6 text-stone-900 dark:text-stone-100">Backend</h4>
              <ul className="space-y-3">
                {skills.backend.map(skill => (
                  <li key={skill} className="cursor-pointer text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-2" onClick={() => handleSkillClick(skill)}>
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Databases & Tools */}
            <div className="bg-stone-50 dark:bg-stone-800/50 p-8 rounded-2xl border border-stone-100 dark:border-stone-800 hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-medium mb-6 text-stone-900 dark:text-stone-100">Databases & Tools</h4>
              <ul className="space-y-3">
                {skills.databasesTools.map(skill => (
                  <li key={skill} className="cursor-pointer text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-2" onClick={() => handleSkillClick(skill)}>
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Skill Explanation Area */}
        {(isLoading || skillExplanation || error) && (
          <div className="mt-12 p-8 bg-stone-50 dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 text-left max-w-2xl mx-auto shadow-sm">
            {isLoading ? (
              <div className="flex items-center justify-center text-stone-600 dark:text-stone-400">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-stone-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating explanation for {selectedSkill}...
              </div>
            ) : error ? (
              <p className="text-red-500 font-medium">{error}</p>
            ) : (
              <>
                <h4 className="text-lg font-semibold mb-3 text-stone-900 dark:text-stone-100">What is {selectedSkill}?</h4>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed font-light">{skillExplanation}</p>
              </>
            )}
          </div>
        )}

        {/* Call to Action */}
        <button className="mt-16 group flex items-center text-lg font-medium px-8 py-4 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-full self-center hover:bg-stone-800 dark:hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mx-auto">
          Download My Resume
          <span className="ml-3 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
            &darr;
          </span>
        </button>
      </div>
    </section>
  );
};

export default About;
