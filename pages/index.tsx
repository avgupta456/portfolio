import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => (
  <div className="container p-8 mx-auto">
    <h1 className="text-3xl font-thin text-gray-800 dark:text-white">About</h1>
    <div className="p-4 flex flex-wrap">
      <div className="w-full lg:w-2/3">
        Hello! My name is Abhijit Gupta, and I am a sophomore at Yale
        University, majoring in Computer Science with a certificate in
        Statistics and Data Science. At Yale, I am a member of the Interactive
        Machines Group, where I conduct research in the field of human-robot
        interaction using deep learning. I also lead the tech team for YHack and
        contribute to the Yale Computer Society and Yale Entrepreneurial
        Society. I have previously interned with RTI International and Gatherly,
        and will be interning with Jane Street in Summer 2021, and Sentry.io in
        Fall 2021. In my free time, I work on side projects such as
        statbotics.io and QuickBites. I also enjoy dancing and rock climbing.
        Please feel free to reach out!
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
