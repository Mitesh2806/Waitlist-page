import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroButton from "@/components/HeroButton";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDE8E4] text-black">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Join Our Waitlist
          </h1>
          <p className="text-center text-lg mb-8">
            ✨ Join the waitlist today to get early access to our AI-powered
            grading tool for educators.
          </p>

          <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="school"
                className="block text-sm font-medium mb-2"
              >
                School/University Name
              </label>
              <input
                type="text"
                id="school"
                name="school"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your role</option>
                <option value="educator">Educator</option>
                <option value="administrator">Administrator</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium mb-2"
              >
                Additional Information (Optional)
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your grading needs..."
              ></textarea>
            </div>
            <HeroButton
              label="Join Waitlist"
              href=""
              bgColor="bg-black"
              spanBgColor="bg-[#C19A6B]"
              textColor="text-white"
            />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
