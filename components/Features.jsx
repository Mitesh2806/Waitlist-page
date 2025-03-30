import React from 'react';
import HeroButton from './HeroButton';

const Features = () => {
    const features = [
        {
            title: "AI Course Generation",
            description: "Create personalized learning paths with AI-generated course content tailored to individual learning styles and goals.",
            icon: (
                <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
            )
        },
        {
            title: "Smart Quiz Builder",
            description: "Generate adaptive quizzes that automatically adjust difficulty based on student performance and learning progress.",
            icon: (
                <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
            )
        },
        {
            title: "Dynamic Animations",
            description: "Create engaging educational animations and visual content using AI to illustrate complex concepts clearly.",
            icon: (
                <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
            )
        },
        {
            title: "Progress Analytics",
            description: "Track learning outcomes with detailed analytics and AI-powered insights on student engagement and performance.",
            icon: (
                <svg className="w-10 h-10 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
            )
        }
    ];

    return (
        <div id="features" className="py-20 px-6 md:px-12 border-t border-[#2a2a2a]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                AI-Powered Learning Platform that Adapts to You
            </h2>
            
            <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16">
                Create engaging courses, interactive quizzes, and dynamic animations with the power of artificial intelligence
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {features.map((feature, index) => {
                    const cardClass = index % 2 === 1
                        ? 'bg-gradient-to-b from-[#000000]/70 to-[#000000]/90'
                        : 'bg-gradient-to-b from-[#C19A6B]/80 to-[#C19A6B]/100';
                    return (
                        <div
                            key={index}
                            className={`${cardClass} p-8 rounded-xl text-white shadow-md shadow-black/45`}
                        >
                            <div className="mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-white">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
            
           
        </div>
    );
};

export default Features;
