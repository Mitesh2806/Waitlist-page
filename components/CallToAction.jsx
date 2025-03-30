import React from 'react';

const CallToAction = () => {
    return (
        <div className="py-20 px-6 md:px-12 text-center border-t border-[#2a2a2a]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gray-400">Instant</span> Course Creation with <span className="text-[#FFD700]">AI</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                Generate professional courses, engaging quizzes, and stunning animations in minutes.
            </p>
            
            <button className="bg-[#FFD700] text-black font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 text-lg">
                Start Creating
            </button>
        </div>
    );
};

export default CallToAction;