import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';

import {motion} from 'framer-motion';

import LineGradient from '../components/LineGradient';
import Globe from '../components/Globe';

function Skills() {
	return (
		<section id='skills' className='pt-10 mb-20 relative'>
			{/* Globe Background */}
			<div className='absolute w-full h-full'>
				<Canvas id='canvas'>
					<Suspense fallback={null}>
						<Globe />
					</Suspense>
				</Canvas>
			</div>

			{/* Header */}
			<div className='md:flex md:justify-between md:gap-16 mt-20 px-4'>
				{/* Text */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
					className='md:w-1/3'
				>
					<p className='font-playfair font-semibold text-4xl mb-5'>
						MY <span className='text-blue'>SKILLS</span>
					</p>

					<LineGradient width='w-1/3' />

					<p className='mt-10 mb-7'>
						Hello, I'm Oluwole Samson Olawumi, a passionate Fullstack web developer 
						with a keen eye for detail and a drive for innovation. With a solid foundation 
						in both front-end and back-end development, I thrive on bringing ideas to life through 
						elegant and efficient code. My journey in web development is fueled by a relentless 
						pursuit of excellence and a commitment to staying at the forefront of technological 
						advancements. Whether it's crafting intuitive user interfaces or architecting robust 
						server-side solutions, I am dedicated to delivering high-quality, scalable web applications 
						that make a difference. Let's build something remarkable together.
					</p>
				</motion.div>
			</div>
			{/* Skills */}
			<div className='md:flex md:justify-between mt-16 gap-32 px-4'>
				{/* Languages */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>01</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Languages</p>
						</div>
						<div className='w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
					My toolkit includes HTML, CSS, and JavaScript for crafting elegant and responsive user interfaces. 
					</p>
				</motion.div>

				{/* Frameworks & Libraries */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.2, duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>02</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Frameworks / Backend</p>
						</div>
						<div className='w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						I'm proficient in frameworks like React and Next.js for building dynamic and interactive web applications,
						while Node.js and Express.js power my server-side development. I leverage Firebase for seamless deployment 
						and real-time database capabilities, and MongoDB for scalable and flexible data storage solutions. 
						My passion lies in seamlessly blending creativity with functionality to deliver captivating web experiences. 
						Let's collaborate and turn your ideas into reality.
					</p>
				</motion.div>

				{/* Miscellaneous */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.4, duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>03</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>
								Miscellaneous
							</p>
						</div>
						<div className='w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Additional skills I have include a practical familiarity with
						MySQL, Vercel, Netlify, Git, GitHub, Figma,
						JSON, TailwindCSS, Bootstrap and WordPress.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default Skills;
