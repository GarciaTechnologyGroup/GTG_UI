import React from 'react';
import hjg from '../../../assets/images/h_j_garcia.png';
import rjb from '../../../assets/images/r_j_boothe.jpg';

const hjgAutoBio = () => (
  <div>
    <p>
      Hilario Garcia is the founder of Garcia Technology. For more than 12 years, Mr. Garcia has succeeded in various Technical Lead Roles within the technology industry and knows what it takes to excel.
    </p>
    <br />
    <p>
      Hilario is a self-starting Business Intelligence/Data Scientist. As a Junior in High School, he first served as an intern with a data company based out of Irving, Texas. While advancing his career he has worked on high profile projects involving master data management and systems integration. In his career, Hilario has amassed a deep understanding of the underlying structure required to deliver successful projects. Some of these specialties include:
    </p>
    <br />
    <ol className="c-bio__hj-list">
      <li>Analysis of source systems</li>
      <li>Data quality assessments, reconciliations, consolidations, cleansing</li>
      <li>Development of multi-directional data feeds to synchronize data</li>
      <li>Application interfaces for management</li>
      <li>Deep intelligence building to derive insights</li>
      <li>Implementing best practices</li>
    </ol>
    <br />
    <p>
      Mr. Garcia started Garcia Technology Group to address problems he has encountered with consulting and consultants over the past years. With his extensive background and vast experience in driving change and integration in the data space, it uniquely positions him to understand and advise other consulting professionals in the ever-changing world of data technology furthering their practical knowledge and application.
    </p>
  </div>
);

const rjbAutoBio = () => (
  <div>
    <p>
      Richard Boothe is infatuated with the technology that drives the internet. In an industry that produces new bleeding edge technology every few weeks, his desire to understand the intricacies of the new and old set him apart from other engineers.
    </p>
    <br />
    <p>
      Beginning his journey into software engineering in 2012, Richard has experienced a growing knowledge with each opportunity he’s been presented. As an alumni, former technical mentor, and presently active member in the Hack Reactor community, he has become a passionate evangelist of web technologies and software development to anyone wishing to learn.
    </p>
    <br />
    <p>
      In 2017, Richard joined Garcia Technology Group to continue his passion for developing software, increasing his knowledge of all things web, and teaching others. It is his hope, that his experience and knowledge can provide a better path to those wishing to join the software industry.
    </p>
  </div>
);

const bios = [
  {
    photo: hjg,
    bio: hjgAutoBio,
    name: 'Hilario Garcia',
    title: 'Founder/CEO - Garcia Technology Group',
  },
  {
    photo: rjb,
    bio: rjbAutoBio,
    name: 'Richard Boothe',
    title: 'Director of Applications - Garcia Technology Group',
  },
];

export default bios;
