import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MypostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  // console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=mollahbusiness23@gmail.com`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [user.email]);
  console.log(user.email);
  return (
    <div>
      <h2>my posted jobs : {jobs.length} </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Job Category</th>
              <th>Company Name</th>
              <th>Total Application</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                jobs.map(job => <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={job.company_logo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{job.category}</div>
                          <div className="text-sm opacity-50"> location: {job.location}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {job.companyname}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>{job.applicationCount}</td>
                    <th>
                      <Link to={'/viewapplications'}><button className="btn btn-ghost btn-xs">View Jobs</button></Link>
                    </th>
                  </tr>)
            }
          </tbody>
          {/* foot */}
          
        </table>
      </div>
    </div>
  );
};

export default MypostedJobs;
