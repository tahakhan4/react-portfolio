import ProfilePic from '../assets/ProfilePic.jpeg'
import { delay, motion } from 'framer-motion'

const container =(delay) => ({
  hidden: { x: -100, opacity: 0},
  visible: {
    x:0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap"> 
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:items-center">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Taha Khan</motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Frontend Developer</motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 mx-w-xl py-6 font-light tracking-tighter">
              I am a passionate frontend developer with a keen eye for creating seamless and intuitive user experiences. With expertise in modern frameworks like React and styling solutions like Tailwind CSS, I bring designs to life with pixel-perfect precision. My focus lies in building responsive, accessible, and performant web applications that make a real impact. I stay current with the latest web technologies and best practices to deliver cutting-edge solutions. Whether it's crafting smooth animations or optimizing for core web vitals, I take pride in writing clean, maintainable code. I'm always excited to tackle new challenges and create delightful digital experiences that users love.
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center '>
            <motion.img
            initial={{ x: 100, opacity: 0}}
            animate={{ x:0, opacity: 1}}
            transition={{ duration: 1, delay: 1}}
            className='w-96 rounded-md' src={ProfilePic} alt="ProfilePic" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
