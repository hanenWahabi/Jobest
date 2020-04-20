import React from "react";
import "../../sass/main.scss";
import Search from "../../components/Search";
import Job from "../../components/Job";
const data = [
  {
    id: "a6ec7302-239b-4149-be8c-8817509c827e",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/a6ec7302-239b-4149-be8c-8817509c827e",
    created_at: "Mon Apr 20 12:49:10 UTC 2020",
    company: "PwC",
    company_url: "http:",
    location: "Amsterdam",
    title: "Front End Developer",
    description:
      '<h2>Welcome to PwC’s Experience Center</h2>\n<p>As part of an international community of creators, makers and innovators you drive the business of PwC’s digital services from our Experience Center. In cross-functional teams, you design and build innovative solutions for our clients to thrive in the ‘experience age’.</p>\n<p>Many of our clients face significant challenges - expectations of their customers and employees change faster than they can adapt. At the same time, new market entrants cause significant disruption, and steal market share away. To tackle these challenges, our clients require a partner that can help them innovate and accelerate the implementation of solutions that have an immediate and differentiating impact on the experience provided to their customer or employees.</p>\n<p>The Experience Center is part of a multinational European team, closely collaborating with colleagues across offices in Amsterdam, Brussels, Paris, Frankfurt, Berlin and Stockholm to name a few.</p>\n<p>For more information about the Experience Center take a look on the following page.</p>\n<h2><em>Who are you?</em></h2>\n<p>To have a differentiating impact on our clients’ customers and their employees, you will be user-centric in your thinking and approach. You are passionate about designing delightful experiences for humans, to empower and enable them.</p>\n<p>You know how to effectively work in cross-functional, agile teams. You are a digital native, creative in everything you do, you are confident, and you dare to challenge the status quo.</p>\n<p>We would love to hear from you if you meet most of the following expectations:</p>\n<ul>\n<li>You have multiple years of experience in software development and you love to code;</li>\n<li>You’ve been doing responsive web development for years and have an eye for great UI / UX design;</li>\n<li>You have a lot of experience working with frontend technologies like HTML, CSS and JavaScript;</li>\n<li>You have worked with CSS preprocessors like Sass/SCSS and understand CSS naming conventions;</li>\n<li>You work with modern frontend tools and follow industry standard best practices;</li>\n<li>You have knowledge programming using modern JavaScript/ES and frameworks like React;</li>\n<li>You are comfortable working within a node.js environment;</li>\n<li>You have managed code repositories using Git version control;</li>\n<li>You bring an agile mind-set, you are interested in learning to work with CI/CD, Docker;</li>\n<li>You have a proactive, goal-oriented, reliable and self-structured way of working;</li>\n<li>You are a team player, are open-minded, and are highly engaged and invested. You love to learn and try-out new technologies.</li>\n</ul>\n<h2><em>What do we offer?</em></h2>\n<p>Working at PwC means working with a range of customers and inspirational colleagues under extensive employment conditions that have been put together with due consideration for your future growth and a flexible approach to work and life. You will be part of a fast growing and high performing team. We invest heavily in our teams and individuals, and help you develop deep specialist capabilities. Most importantly, we offer you the freedom to pursue your passion, and have an impact on the life of others. Some of our key employee benefits include:</p>\n<ul>\n<li>You’ll be part of an international consulting firm where people are lead by its values and inspired by our purpose;</li>\n<li>An open and collaborative working atmosphere, where we encourage everyone to provide and receive feedback;</li>\n<li>A knowledge-drive organization where you can learn from, and grow into, a top specialist;</li>\n<li>Flexible working arrangements;</li>\n<li>You’ll get great training opportunities;</li>\n<li>The opportunity to contribute to Corporate Responsibility, diversity, innovation and / or recruitment;</li>\n<li>Multicultural team with a strong growth ambition;</li>\n<li>A lot of coaching and an eye for your personal development;</li>\n<li>Excellent primary and secondary employment conditions, including Macbook, iPhone;</li>\n</ul>\n<h2>Apply now!</h2>\n<p>Are you interested in this vacancy and do you meet the requirements? Apply directly by clicking the <a href="https://vonq.io/2wWdKq8">this link!</a></p>\n',
    how_to_apply:
      '<p><a href="https://vonq.io/2wWdKq8">Click here to apply!</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDJDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--50811fc061c474af63e330cecb3816fa715049ff/PWC.jpeg",
  },
];
function Jobs() {
  return (
    <div>
      <Search />
      <div className="jobs-wrapper">
        {data.map((item) => (
          <Job
            title={item.title}
            logo={item.company_logo}
            type={item.type}
            created_at={item.created_at}
            company={item.company}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
