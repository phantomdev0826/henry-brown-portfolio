import React from 'react';

const EducationBlock = () => (
  <div className="flex flex-col items-start gap-4">
    <div className="overflow-hidden">
      <div className="dark:text-white text-animation">
        I possess a comprehensive educational background spanning six years, establishing
        a solid theoretical foundation in my discipline. Over an additional eight years, I
        have accumulated extensive practical experience in software development,
        demonstrating a consistent capacity to deliver high-quality solutions. The
        combination of academic knowledge and professional experience enables me to
        address complex challenges with diligence and expertise.
      </div>
    </div>
    <div className="overflow-hidden">
      <div className="dark:text-white text-animation">My Educational Background:</div>
    </div>
    {/* Educational Qualifications */}
    <div className="flex gap-4 flex-col items-start">
      {/* Bachelor's Degree */}
      <div className="flex gap-2 flex-col items-start">
        <div className="text-accentColor font-semibold text-xl">Bachelor&apos;s Degree</div>
        <div className="overflow-hidden">
          <div className="dark:text-white text-animation">
            <div>Institution: Greenwood University</div>
            <div>Duration: 4 Years</div>
            <div className="font-semibold mt-2">Highlights:</div>
            <ul className="list-disc list-inside mt-1">
              <li>Developed a comprehensive understanding of Computer Engineering fundamentals.</li>
              <li>Enhanced critical thinking and problem-solving capabilities through rigorous coursework.</li>
              <li>Participated in various projects and extracurricular activities that enriched practical skills.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Master's Degree */}
      <div className="flex gap-2 flex-col items-start">
        <div className="text-accentColor font-semibold text-xl">Master&apos;s Degree</div>
        <div className="overflow-hidden">
          <div className="dark:text-white text-animation">
            <div>Institution: Horizon Institute</div>
            <div>Duration: 2 Years</div>
            <div className="font-semibold mt-2">Highlights:</div>
            <ul className="list-disc list-inside mt-1">
              <li>Specialized in Cloud Computing, building upon foundational knowledge.</li>
              <li>Conducted research and engaged in advanced coursework to deepen expertise.</li>
              <li>Successfully completed a thesis/project focused on Cloud Computing applications.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EducationBlock; 