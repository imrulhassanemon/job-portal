import moment from "moment/moment";

import { Link, useLoaderData } from "react-router-dom";

const JobDetail = () => {
  const {
    applicationDeadline,
    _id,
    title,
    category,
    company,
    requirements,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    salaryRange,
  } = useLoaderData();

  const deadline = moment(applicationDeadline).subtract(10, "days").calendar();
  console.log(deadline);

  console.log(applicationDeadline);

  return (
    <div>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header Section */}
        <div className="flex justify-around items-center">
          <h1 className="text-2xl  font-semibold text-gray-800">
            {title}, {jobType}
          </h1>
          <Link to={`/jobApply/${_id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Apply now
            </button>
          </Link>
        </div>
        <div className="text-gray-500 text-sm mt-2">
          <span>Fulltime</span> · <span>3 mins ago</span>
        </div>

        {/* Employment Information */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Employment Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Industry</p>
                <p className="text-gray-700 font-medium">
                  {requirements.map((req, i) => (
                    <span key={i}>{req}/</span>
                  ))}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Job level</p>
                <p className="text-gray-700 font-medium">
                  Experienced (Non - Manager)
                </p>
              </div>
              <div>
                <p className="text-gray-500">Salary</p>
                <p className="text-gray-700 font-medium">
                  {salaryRange.min} {salaryRange.currency} - {salaryRange.max}{" "}
                  {salaryRange.currency}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Experience</p>
                <p className="text-gray-700 font-medium">1 - 2 years</p>
              </div>
              <div>
                <p className="text-gray-500">Job type</p>
                <p className="text-gray-700 font-medium">Permanent</p>
              </div>
              <div>
                <p className="text-gray-500">Deadline</p>
                <p className="text-gray-700 font-medium">{deadline}</p>
              </div>
              <div>
                <p className="text-gray-500">Updated</p>
                <p className="text-gray-700 font-medium">10/07/2022</p>
              </div>
              <div>
                <p className="text-gray-500">Location</p>
                <p className="text-gray-700 font-medium">{location}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                {category}
              </h2>
              <p className="text-sm text-gray-500">{company}</p>
              <div className="mt-4 flex justify-center">
                <img
                  src={company_logo} // Replace with map screenshot
                  alt="Location map"
                  className=" w-24 h-24 object-cover rounded-full"
                />
              </div>
              <p className="text-gray-700 text-sm mt-4">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
