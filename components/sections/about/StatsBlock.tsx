import React from 'react';

const StatsBlock = () => (
  <div className="w-full border-t-accentColor py-5 border-b-accentColor border-t-[0.01px] border-b-[0.01px] flex items-center gap-6 md:gap-6 lg:gap-20">
    {/* Experience Count */}
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-medium dark:text-white">
        <span className="experience-count">0</span>{' '}
        <span className="text-accentColor">+</span>
      </div>
      <div className="dark:text-white text-sm text-center">Years of Experience</div>
    </div>
    {/* Projects Completed */}
    <div className="flex flex-col font-medium items-center">
      <div className="text-3xl md:text-4xl dark:text-white">
        <span className="project-count">0</span>{' '}
        <span className="text-accentColor">+</span>
      </div>
      <div className="dark:text-white text-sm text-center">Projects Completed</div>
    </div>
    {/* Contributions */}
    <div className="flex flex-col font-medium items-center">
      <div className="text-3xl md:text-4xl dark:text-white">
        <span className="user-count">0</span> <span className="text-accentColor">+</span>
      </div>
      <div className="dark:text-white text-sm text-center">Significant Contributions</div>
    </div>
  </div>
);

export default StatsBlock; 