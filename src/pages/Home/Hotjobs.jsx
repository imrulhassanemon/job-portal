import { div } from "motion/react-client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hotjobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(jobs);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {jobs.map((job,) => (
        <div key={job._id}>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
            {/* Header Section */}
            <div className="flex items-center mb-4">
              <img
                src={job.company_logo} // Replace with actual LinkedIn logo
                alt="LinkedIn Logo"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <p className="text-gray-500 text-sm">{job.location}</p>
              </div>
            </div>

            {/* Job Details */}
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-1">
                {job.title} <span className="text-gray-600">({job.jobType})</span>
              </h2>
              <p className="text-gray-500 text-sm">
                <span>Fulltime</span> <span>· 4 minutes ago</span>
              </p>
            </div>

            {/* Job Description */}
            <p className="text-gray-600 text-sm mb-4">
              {job.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {
                job.requirements.map((r, index) => <span  key={index} className="bg-gray-200 hover:text-blue-400 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {r}
                  </span>)
              }
              
            </div>

            {/* Footer Section */}
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold text-xl">{job.salaryRange.min} - {job.salaryRange.max}</span>
              <span className="text-gray-400 text-sm">/Hour</span>
              <Link to={`jobs/${job._id}`}><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply Now
              </button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotjobs;
