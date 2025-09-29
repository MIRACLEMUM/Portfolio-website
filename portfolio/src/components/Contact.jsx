import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-gray-200 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Get in Touch</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <motion.div
        className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Contact Form */}
        <motion.form
          className="flex flex-col gap-4 flex-1"
          variants={itemVariants}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded-lg text-black focus:outline-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-lg text-black focus:outline-green-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="px-4 py-2 rounded-lg text-black focus:outline-green-500"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="px-4 py-2 rounded-lg text-black focus:outline-green-500"
          />
          <motion.button
            type="submit"
            className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div className="flex flex-col gap-6 flex-1" variants={itemVariants}>
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="w-6 h-6 text-green-500" />
            <p className="text-gray-400">sundayfridaymiracle@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-6 h-6 text-green-500" />
            <p className="text-gray-400">+234 7064400428</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPinIcon className="w-6 h-6 text-green-500" />
            <p className="text-gray-400">Akwa Ibom, Nigeria</p>
          </div>

          <motion.div
            className="flex gap-4 mt-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <a
              href="https://www.linkedin.com/in/miracle-sunday-b1a377373/"
              className="text-green-500 hover:text-green-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MIRACLEMUM"
              className="text-green-500 hover:text-green-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://x.com/TechGoddess0"
              className="text-green-500 hover:text-green-400 transition"
            >
              Twitter
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
