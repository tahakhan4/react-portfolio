import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div
    whileInView={{ opacity: 1, x: 0}}
    initial={{ opacity: 0, x: -100}}
    transition={{ duration: 1}}
    className="border-b border-neutral-800 pb-20">
      <h2 className="my-10 text-4xl text-center ">Get in touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">Badami Bagh, Data Nagar, Lahore, Pakistan.</p>
        <p className="my-4">+92 3174201399</p>
        <a href="#" className="border-b">sajjadtaha988@gmail.com</a>
      </div>
    </motion.div>
  )
}

export default Contact
