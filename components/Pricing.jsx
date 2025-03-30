import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Educator Basic",
      features: [
        "AI-powered course generation",
        "Basic quiz templates",
        "Simple animations",
        "Up to 50 assessments/month",
        "Email support",
        "Export to PDF/PPTX",
      ],
    },
    {
      name: "Educator Pro",
      features: [
        "Everything in Basic",
        "Advanced quiz customization",
        "Interactive animations",
        "Unlimited assessments",
        "Custom templates",
        "Priority support",
        "Analytics dashboard",
      ],
    },
  ];

  return (
    <div id="pricing" className="py-20 px-6 md:px-12 border-t border-lightgray">
      <h2 className="text-3xl font-bold text-center mb-16">PRICING</h2>

      <div className="grid text-white md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-neutral-950/90 to-neutral-800 p-8 rounded-xl border border-lightgray"
          >
            <h3 className="text-2xl text-white font-bold mb-8">{plan.name}</h3>

            {/* <button className="w-full bg-[#FFD700] text-black font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 mb-8">Try Demo</button> */}

            <div className="mb-8"></div>
            <h4 className="text-lg font-semibold mb-4">FEATURES</h4>
            <ul className="space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#FFD700] mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
