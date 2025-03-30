import { Check, X } from "lucide-react"

const ComparisonSection = () => {
  return (
    <div className="py-20 px-6 md:px-12 border-t border-[#2a2a2a]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Transform Your Course Creation Experience</h2>

      <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16">
        Traditional course creation methods are time-consuming and lack engagement features
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-b from-[#C19A6B]/80 to-[#C19A6B]/100 p-8 rounded-xl text-white shadow-md shadow-black/45">
          <h3 className="text-2xl font-bold mb-6">With AI Course Creator</h3>
          <p className="text-lg mb-8">Create engaging quizzes and animations instantly with AI-powered tools</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-black/10 rounded-full p-1 mr-2">
                <Check className="w-5 h-5" />
              </div>
              <span>Generate quizzes in seconds with AI</span>
            </li>
            <li className="flex items-start">
              <div className="bg-black/10 rounded-full p-1 mr-2">
                <Check className="w-5 h-5" />
              </div>
              <span>Create custom animations automatically</span>
            </li>
            <li className="flex items-start">
              <div className="bg-black/10 rounded-full p-1 mr-2">
                <Check className="w-5 h-5" />
              </div>
              <span>Interactive and engaging learning content</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-b from-[#000000]/70 to-[#000000]/90 p-8 rounded-xl text-white opacity-90 shadow-md shadow-black/45">
            <div className="">
            <h3 className="text-2xl font-bold mb-6">Traditional Method</h3>
          <p className="text-lg mb-8">Manual creation of quizzes and basic static content</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-white/10 rounded-full p-1 mr-2">
                <X className="w-5 h-5" />
              </div>
              <span>Hours spent writing quiz questions</span>
            </li>
            <li className="flex items-start">
              <div className="bg-white/10 rounded-full p-1 mr-2">
                <X className="w-5 h-5" />
              </div>
              <span>Limited to static images and text</span>
            </li>
            <li className="flex items-start">
              <div className="bg-white/10 rounded-full p-1 mr-2">
                <X className="w-5 h-5" />
              </div>
              <span>Basic, non-interactive content</span>
            </li>
          </ul>
            </div>
         
        </div>
      </div>
    </div>
  )
}

export default ComparisonSection

