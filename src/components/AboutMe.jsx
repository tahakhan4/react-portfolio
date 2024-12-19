import AboutPic from '../assets/AboutPic.jpg'
import { motion } from 'framer-motion'
const AboutMe = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>About
        <span className='text-neutral-500'> Me</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial= {{ x: -100, opacity:0 }}
        transition={{duration: 0.5}}
        className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex item-center justify-center '>
            <img className='w-80 rounded-md' src={AboutPic} alt="AboutPic" />
          </div>
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial= {{ x: 100, opacity:0 }}
        transition={{duration: 0.5}}
        className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-center'>
            <p className="my-2 mx-w-xl py-6 font-light tracking-tighter">
              I am a highly motivated and results-oriented individual with a strong foundation in computer science. Having successfully completed my Intermediate (ICS) from the Board of Intermediate and Secondary Education (BISE) Lahore, I am currently pursuing my undergraduate degree at [BSIT] at the (GICCL), affiliated with the Punjab University (PU). Driven by a deep passion for the ever-evolving field of computer science, I am eager to contribute to innovative advancements and contribute to the growth of the tech industry I also have a great interest in Software Development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMe
