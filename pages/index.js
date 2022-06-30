import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { _Transition_Page } from '../components/_Animations';
import Head from 'next/head';
import {
  AiOutlineArrowDown,
  AiOutlineInfoCircle,
  AiOutlineLink,
  AiOutlineEye,
} from 'react-icons/ai';
import Link from 'next/link';
import { usePrefetcherContext } from '../components/Prefetcher';

const Home = (e) => {
  const [isVisible, setIsVisible] = useState(true);
  const { capstonePosts } = usePrefetcherContext();

  useEffect(() => {
    window.scrollTo(0, 0);

    console.log(capstonePosts);

    window.addEventListener('scroll', (e) => {
      if (window.scrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      return (e) => {
        window.removeEventListener('scroll', e);
      };
    });
  }, []);

  return (
    <>
      {/* glow gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        exit={{ opacity: 0 }}
        style={{
          background:
            'radial-gradient(circle, #1EAC75 0%,rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)',
        }}
        className="absolute w-[800px] h-[800px] top-[100px] -left-[50vw] z-0 opacity-25"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        exit={{ opacity: 0 }}
        style={{
          background:
            'radial-gradient(circle, #7A1EAC 0%,rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)',
        }}
        className="absolute w-[800px] h-[800px] -top-[200px] left-[40vw] z-0 opacity-25"
      />
      {/* solar system */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          animate={{
            opacity: isVisible ? 1 : 0,
            translateY: isVisible ? 0 : -100,
            transition: { duration: 0.2, ease: 'easeInOut' },
          }}
          className="fixed -z-10 right-0 w-[500px] h-[500px]"
        >
          <img src={'/solar_System.png'} />
        </motion.div>
      </motion.div>

      <Head>
        <title>Home | Ingo</title>
      </Head>
      <motion.section
        variants={_Transition_Page}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative"
      >
        {/* landing */}
        <div className="flex flex-col gap-2 justify-center mt-16 text-center min-h-screen">
          <p className="text-6xl font-semibold mb-10">
            <motion.span>Ingo</motion.span>
          </p>
          <p className="text-lg font-semibold text-gray-500">
            Your CS <span className="text-pink-600 font-bold">In</span>formation
            Board on the <span className="text-pink-600 font-bold">Go</span>
          </p>
          <p className="text-lg font-semibold text-gray-500">
            See and learn what is happening in the CS Department
          </p>

          <Link href={'/bulletin'}>
            <motion.div
              animate={{
                backgroundPosition: [
                  '0% 0%',
                  '100% 0%',
                  '100% 100%',
                  '0% 100%',
                  '0% 0%',
                ],
              }}
              transition={{
                duration: 5,
                ease: 'linear',
                loop: Infinity,
              }}
              style={{
                backgroundSize: '200%',
              }}
              className="btn btn-primary bg-transparent bg-[url('/meshgradient2.jpg')] text-primary-content w-fit px-10 mt-16 self-center border-0"
            >
              See what&apos;s new on the board
            </motion.div>
          </Link>

          {/* arrow down */}
          <motion.div
            className="self-center"
            animate={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            <motion.div
              animate={{
                opacity: [0, 1, 0],
                translateY: [0, 10, 10],
                transition: {
                  duration: 1,
                  ease: 'easeInOut',
                  repeat: Infinity,
                },
              }}
              className="self-center mt-16"
            >
              <AiOutlineArrowDown size={30} />
            </motion.div>
          </motion.div>
        </div>

        {/* offers */}
        <div className="flex flex-col gap-2 justify-center mt-32 text-center">
          <p className="text-3xl font-semibold mb-10">
            See what Ingo has to offer
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full place-items-center ap-3 ">
            <div className="flex flex-col max-w-sm self-center">
              <div className="flex flex-col gap-2 p-2">
                <figure className="self-center">
                  <AiOutlineInfoCircle size={100} />
                </figure>
                <p className="card-title text-lg font-bold text-primary self-center">
                  Online Public Information Board
                </p>
                <p className="font-light">
                  See what is happening in the CS department and learn more
                  about the people who are working there
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm self-center">
              <div className="flex flex-col gap-2 p-2">
                <figure className="self-center">
                  <AiOutlineEye size={100} />
                </figure>
                <p className="card-title text-lg font-bold text-primary self-center">
                  Showcase what the seniors are doing
                </p>
                <p>
                  See what the seniors are doing in the CS department and learn
                  from them too while building their own CAPSTONE project
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm self-center">
              <div className="flex flex-col gap-2 p-2">
                <figure className="self-center">
                  <AiOutlineLink size={100} />
                </figure>
                <p className="card-title text-lg font-bold text-primary self-center">
                  Connect with other students
                </p>
                <p>
                  Connect with other students in the CS department and get to
                  know them better
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
