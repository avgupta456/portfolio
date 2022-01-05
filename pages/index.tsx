import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';

const Home: NextPage = () => (
  <div className="container p-8 mx-auto">
    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
      About
    </h1>
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
      <div className="w-full lg:w-1/3 py-4 lg:py-0 lg:pl-8 flex justify-center lg:justify-end">
        <Image
          src="/profile.jpg"
          alt="Abhijit Gupta"
          width={300}
          height={300}
          className="rounded"
        />
      </div>
    </div>
    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
      Experiences
    </h1>
    <div className="p-4">
      During my time at Yale, I have taken two gap semesters to work in industry
      and further my software skills. In total, I have completed four
      internships with one upcoming in Summer 2022. I have also published two
      research papers while at Yale.
      <ul className="list-disc pl-8">
        <li className="p-2">
          <strong>Quant Trading @ Jane Street (NYC, Summer 2022)</strong>:
          Upcoming Internship
        </li>
        <li className="p-2">
          <strong>Software Engineering @ Sentry.io (Remote, Fall 2021)</strong>:
          Worked with the Data Team based in San Francisco building ETL
          pipelines for 100M+ daily messages from the Sentry.io platform. Used
          Apache Kafka, PySpark, GCS, AirFlow, BigQuery, and DataDog to
          prototype a batch processing pipeline with increased throughput and
          scalability.
        </li>
        <li className="p-2">
          <strong>Quant Trading @ Jane Street (NYC, Summer 2021)</strong>:
          Attended classes, participated in mock-trading, and worked on two data
          analysis projects with trading desks. Further details omitted due to
          IP restrictions.
        </li>
        <li className="p-2">
          <strong>ML Researcher @ Yale IMG Lab (Yale, 2020-21)</strong>: Built a
          deep learning pipeline analyzing social group phenomena for
          human-robot interaction using graph neural networks, improving metrics
          over state-of-the-art heuristic baselines. Paper available{' '}
          <a
            href="https://interactive-machines.gitlab.io/assets/papers/thompson-ICMI21.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            here
          </a>
          .
        </li>
        <li className="p-2">
          <strong>Software Engineering @ Gatherly (Remote, Fall 2020)</strong>:
          Spearheaded data analytics initiative analyzing 1M+ user actions to
          extract actionable insights for online event hosts. Implemented an
          automated payment system using the Stripe API with subscriptions,
          discounts, and tiered pricing. Used AWS, NodeJS, ReactJS, and Stripe.
        </li>
        <li className="p-2">
          <strong>
            Data Analyst @ RTI International (Remote, Summer 2020)
          </strong>
          : Designed campus monitoring dashboard to visualize temporal building
          ocupancy. Implemented automated demand prioritization system for BI
          team, reducing manual labor by 80%. Used Microsoft SQL Server, Power
          BI, and Excel.
        </li>
        <li className="p-2">
          <strong>ML Researcher @ Yale LILY Lab (Yale, Fall 2019)</strong>:
          Trained machine learning model to classify salient events in 2D
          physics simulations with 91% accuracy. Contributed to research paper
          studying implicit physical reasoning in NLP. Paper available{' '}
          <a
            href="https://arxiv.org/abs/2005.00730"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            here
          </a>
          .
        </li>
      </ul>
    </div>
    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
      Education
    </h1>
    <div className="p-4">
      I am currently a Junior at Yale University, graduating in May, 2023. I am
      pursuing a major in Computer Science and a Certificate in Statistics and
      Data Science.
      <p className="mt-2 font-semibold">Relevant coursework</p>
      CPSC 223: Data Structures, CPSC 290 Directed Research, CPSC 323: Systems
      Programming, CPSC 366: Intensive Algorithms, CPSC 452: Deep Learning, CPSC
      327: Object Oriented Programming, CPSC 447: Intro to Quantum Computing,
      CPSC 426: Distributed Systems, MATH 230/231 Vector Calculus and Linear
      Algebra, MATH 244 Discrete Mathematics, S&DS 230: R Programming.
      <p className="mt-2 font-semibold">Activities</p>
      Yale Interactive Machines Group, YHack Organizing Team, Yale Computer
      Society, Yale Entrepreneurial Society Team
    </div>
    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
      Projects
    </h1>
    <div className="p-4">
      Recently, I have worked on GitHub Trends, Statbotics.io, Quickbites,
      research, club projects, and this portfolio website. More details coming
      soon!
    </div>
  </div>
);

export default Home;
