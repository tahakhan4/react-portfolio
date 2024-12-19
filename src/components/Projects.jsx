import Project4 from '../assets/project4.webp'
import Project1 from '../assets/project-1.jpeg'
import Project2 from '../assets/project-2.avif'
import Project3 from '../assets/project-3.jpeg'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 0.5}}
      className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 0.5}}
        className='w-full lg:w-1/4'>
          <img 
          src={Project4}
          width={150}
          height={150} 
          className='rounded mb-6' alt="E-commerce" />
        </motion.div>
        <motion.div
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: -100}}
         transition={{ duration: 1}}
        className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>E-Commerce Website</h6>
          <p className='text-neutral-600 mb-4'>A fully functional e-commerce website with features like product listing, shopping cart, user authentication.
          </p>
          <div className='flex felx-wrap'>
          <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Tailwind</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>REACT</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Framer</div>
          </div>
           
        </motion.div>
      </div>
      <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: -100}}
         transition={{ duration: 0.5}}
        className='w-full lg:w-1/4'>
          <img 
          src={Project1}
          width={150}
          height={150} 
          className='rounded mb-6' alt="ToDo List App" />
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1}}
        className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>ToDo List App</h6>
          <p className='text-neutral-600 mb-4'>An application for managing tasks and projects with features like task creating, assignment, progress record etc.
          </p>
          <div className='flex felx-wrap'>
          <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Tailwind</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>REACT</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Framer</div>
          </div>
           
        </motion.div>
      </div>
      <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: -100}}
         transition={{ duration: 0.5}}
        className='w-full lg:w-1/4'>
          <img 
          src={Project3}
          width={150}
          height={150} 
          className='rounded mb-6' alt="Landing Page" />
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1}}
        className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>Landing Page</h6>
          <p className='text-neutral-600 mb-4'>Introducing a landing page of every bussiness websites or any other with a lots of features and framer motion.
          </p>
          <div className='flex felx-wrap'>
          <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Tailwind</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>REACT</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Framer</div>
          </div>
           
        </motion.div>
      </div>
      <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: -100}}
         transition={{ duration: 0.5}}
        className='w-full lg:w-1/4'>
          <img 
          src={Project2}
          width={150}
          height={150} 
          className='rounded mb-6' alt="Portfolio" />
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1}}
        className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>Portfolio</h6>
          <p className='text-neutral-600 mb-4'>A personal portfolio website showcasing skills, information and contact.
          </p>
          <div className='flex felx-wrap'>
          <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>HTML</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>CSS</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Tailwind</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>REACT</div>
            <div className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Framer</div>
          </div>
           
        </motion.div>
      </div>
      </div>
    
  )
}

export default Projects
