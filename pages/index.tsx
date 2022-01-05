import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';

const Home: NextPage = () => (
  <div className="container p-8 mx-auto">
    <h1 className="text-3xl font-thin text-gray-800 dark:text-white">About</h1>
    <div className="p-4 flex flex-wrap">
      <div className="w-full lg:w-2/3">
        Hello! My name is Abhijit Gupta, and I am a{' '}
        <strong>junior at Yale University</strong>, majoring in Computer Science
        with a certificate in Statistics and Data Science. At Yale, I have
        conducted research with the{' '}
        <a
          href="https://interactive-machines.gitlab.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Interactive Machines Group
        </a>
        , and previously lead the Tech Team for{' '}
        <a
          href="https://yhack.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          YHack
        </a>{' '}
        and contributed to the{' '}
        <a
          href="https://www.facebook.com/yalecompsociety/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Yale Computer Society
        </a>{' '}
        and{' '}
        <a
          href="https://www.yesatyale.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Yale Entrepreneurial Society
        </a>
        . I have previously interned with Jane Street, Sentry.io, Gatherly, and
        RTI International. I will be interning with Jane Street in Summer 2022
        and joining full-time in Summer 2023. In my free time, I work on side
        projects including{' '}
        <a
          href="https://www.githubtrends.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          GitHub Trends
        </a>{' '}
        and{' '}
        <a
          href="https://www.statbotics.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Statbotics.io
        </a>
        . Please feel free to reach out!
        <div className="hidden md:flex w-full my-8 items-center justify-center">
          {[
            {
              link: 'https://www.linkedin.com/in/avgupta456',
              icon: <FaLinkedin className="w-6 h-6 mr-1" />,
              text: 'LinkedIn',
            },
            {
              link: 'https://www.github.com/avgupta456',
              icon: <FaGithub className="w-6 h-6 mr-1" />,
              text: 'GitHub',
            },
            {
              link: 'mailto:avgupta456@gmail.com',
              icon: <MdEmail className="w-6 h-6 mr-1" />,
              text: 'Email',
            },
            {
              link: 'https://www.abhijitgupta.io/resume.pdf',
              icon: <HiDocumentText className="w-6 h-6 mr-1" />,
              text: 'Resume',
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mx-2 p-2 rounded bg-blue-500 text-white flex">
                {item.icon}
                {item.text}
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 py-4 lg:py-0 lg:px-4 flex items-center justify-center">
        <Image
          src="/profile.jpg"
          alt="Abhijit Gupta"
          width={300}
          height={300}
          className="rounded"
        />
      </div>
    </div>
    <h1 className="text-3xl font-thin text-gray-800 dark:text-white">
      Experiences
    </h1>

    <h1 className="text-3xl font-thin text-gray-800 dark:text-white">
      Education
    </h1>

    <h1 className="text-3xl font-thin text-gray-800 dark:text-white">
      Projects
    </h1>

    <h1 className="text-3xl font-thin text-gray-800 dark:text-white">Skills</h1>

    <h1 className="text-3xl font-thin text-gray-800 dark:text-white">Awards</h1>

    <h1 className="text-3xl font-thin text-gray-800 dark:text-white">
      Contact
    </h1>
  </div>
);

export default Home;
