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
        Hello! My name is Abhijit Gupta, and I am a senior at Yale University
        majoring in Computer Science. I have previously interned with Jane
        Street, Sentry.io, Gatherly, and RTI International. In my free time, I
        work on side projects including{' '}
        <a
          href="https://www.githubtrends.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          GitHub Trends
        </a>
        ,{' '}
        <a
          href="https://www.statbotics.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Statbotics
        </a>
        , and{' '}
        <a
          href="https://www.hopscotch.nyc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Hopscotch
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
      <ul className="list-disc pl-8">
        <li className="p-2">
          <strong>Quant Trading @ Jane Street (NYC, Summer 2022)</strong>:
          Attended classes, participated in mock-trading, and worked on data
          analysis projects with trading desks. Further details omitted due to
          IP restrictions.
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
      Projects
    </h1>
    <div className="flex flex-wrap p-4">
      {[
        {
          title: 'GitHub Trends',
          description:
            'GitHub Trends dives deep into the GitHub API to bring you insightful metrics on your contributions, broken by repository and language.',
          startDate: 'May, 2020',
          endDate: 'Present',
          website: 'https://githubtrends.io',
          links: [
            {
              link: 'https://github.com/avgupta456/github-trends',
              name: 'GitHub Repo',
            },
          ],
          tags: ['GitHub API', 'Python', 'FastAPI', 'MongoDB', 'React'],
          image: '/projects/githubtrends.png',
          stat: {
            label: 'Key Stat',
            stat: '2000+ users have created a GitHub Wrapped',
          },
        },
        {
          title: 'Statbotics',
          description:
            'Statbotics modernizes FRC data analytics by calculating and disseminating key metrics including Elo and component OPRs',
          startDate: 'Sept, 2021',
          endDate: 'Present',
          website: 'https://statbotics.io',
          links: [
            {
              link: 'https://github.com/avgupta456/statbotics',
              name: 'GitHub Repo',
            },
          ],
          tags: ['Python', 'FastAPI', 'SQL', 'React', 'GCP'],
          image: '/projects/statbotics.png',
          stat: {
            label: 'Key Stat',
            stat: 'Over 40,000 users have used Statbotics',
          },
        },
        {
          title: 'Hopscotch',
          description:
            'Hopscotch helps you discover suitable neighborhoods based on many factors: budget, grocery stores, gyms, subway lines, bike share, parks, safety, proximity to specific locations and more',
          startDate: 'August, 2022',
          endDate: 'August, 2022',
          website: 'https://hopscotch.nyc',
          links: [
            {
              link: 'https://www.producthunt.com/products/hopscotch-6',
              name: 'Product Hunt',
            },
          ],
          tags: ['Data Scraping', 'Jupyter', 'React', 'Tailwind'],
          image: '/projects/hopscotch.png',
          stat: {
            label: 'Key Fact',
            stat: 'Built Hopscotch in just one week at HackLodge.',
          },
        },
        {
          title: 'GNN Explainability',
          description:
            'Extending existing GNN explanation algorithms for node and graph tasks to link prediction on social network and user-object graphs. Contributing to the open-source PyTorch Geometric library.',
          startDate: 'Aug, 2022',
          endDate: 'Present',
          tags: ['Research', 'GNNs', 'Python', 'Pytorch Geometric'],
          image: '/projects/gnn.png',
          stat: {
            label: 'Key Fact',
            stat: 'Working with Prof. Rex Ying at Yale',
          },
        },
        {
          title: 'VSCode Autocorrect',
          description:
            'Uses LLMs and Levenshtein distance to suggest corrections for typos and mental mistakes. Integrated with VSCode suggest directly in the IDE.',
          startDate: 'November, 2022',
          endDate: 'November, 2022',
          links: [
            {
              link: 'https://github.com/avgupta456/vscode-autocorrect',
              name: 'GitHub Repo',
            },
          ],
          tags: ['YHack', 'CodeBERT', 'FastAPI', 'TypeScript', 'VSCode'],
          image: '/projects/vscode.png',
          stat: {
            label: 'Key Fact',
            stat: 'Built at YHack Mini 2022, 3rd Place',
          },
        },
        {
          title: 'Clockwork',
          description:
            'Clockwork takes your deadlines, events, and goals, and creates a balanced and healthy schedule, factoring in personal preferences.',
          startDate: 'March, 2022',
          endDate: 'March, 2022',
          links: [
            {
              link: 'https://github.com/avgupta456/yhack-2022',
              name: 'GitHub Repo',
            },
          ],
          tags: ['YHack', 'Python', 'Optimization', 'React', 'Tailwind'],
          image: '/projects/clockwork.png',
          stat: {
            label: 'Key Fact',
            stat: 'Built at YHack 2022, 2nd Place',
          },
        },
        {
          title: 'Quickbites',
          description:
            'Quickbites integrated with Uber Eats, Doordash, and GrubHub to find the cheapest and fastest food delivery options based on your location, requirements, and preferences.',
          startDate: 'Nov, 2020',
          endDate: 'Jan, 2021',
          tags: [
            'Deprecated :(',
            'APIs',
            'Python',
            'FastAPI',
            'React Native',
            'Expo',
          ],
          image: '/projects/quickbites.png',
          stat: {
            label: 'Key Fact',
            stat: 'Downloaded over 1000 times on the App Store',
          },
        },
        {
          title: 'Coursetable NLP',
          description:
            'Implemented similarity, sentiment, and topic analysis on Coursetable reviews using NLP techniques. Wrote a Medium article highlighting key Python libraries to build upon.',
          startDate: 'August, 2020',
          endDate: 'August, 2020',
          links: [
            {
              link: 'https://github.com/avgupta456/medium_nlp',
              name: 'GitHub Repo',
            },
            {
              link: 'https://medium.com/@avgupta456/natural-language-processing-nlp-dont-reinvent-the-wheel-8cf3204383dd',
              name: 'Medium Article',
            },
          ],
          tags: ['NLP', 'Python', 'Gensim'],
          image: '/projects/coursetable.png',
        },
      ].map((project, i) => (
        <div key={i} className="w-full xl:w-1/2 h-128 p-4">
          <div className="w-full h-full p-4 bg-gray-100 dark:bg-gray-900 shadow-lg rounded flex flex-col">
            <div className="flex flex-row justify-between">
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-blue-500 hover:text-blue-600 underline"
                >
                  {project.title}
                </a>
              ) : (
                <span className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </span>
              )}
              <strong>
                {project.startDate === project.endDate
                  ? project.startDate
                  : `${project.startDate} - ${project.endDate}`}
              </strong>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-1">
              {project.description}
            </p>
            {project.stat && (
              <p className="text-gray-600 dark:text-gray-400">
                <strong>{project.stat.label}: </strong>
                {project.stat.stat}
              </p>
            )}
            <div className="flex flex-row flex-wrap mx-auto mt-4">
              {(project.links || []).map((link, j) => (
                <a
                  key={j}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-600 underline bg-blue-100 rounded-full px-2 py-1 m-1"
                >
                  {link.name}
                </a>
              ))}
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-sm text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 m-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Image with intrinsic aspect ratio and max width */}
            <div className="my-2 relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="contain"
                className="mx-auto my-auto"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
