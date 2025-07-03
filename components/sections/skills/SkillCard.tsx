import React from 'react';
import type { Skill } from '@/types/skill';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <div
    className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300 hover:bg-opacity-20 skill-card"
  >
    {/* Icon */}
    <div className="flex justify-center mb-4">
      <img src={skill.icon} alt={`${skill.name} icon`} className="w-16 h-16" />
    </div>
    {/* Skill Name */}
    <h3 className="text-xl font-semibold text-center uppercase tracking-wide mb-2">
      {skill.name}
    </h3>
    {/* Progress Bar */}
    <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-2">
      <div
        className="bg-green-400 h-3 rounded-full transition-all duration-1000"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
    {/* Percentage Text */}
    <p className="text-center text-gray-300 text-sm">{skill.level}% proficiency</p>
  </div>
);

export default SkillCard; 