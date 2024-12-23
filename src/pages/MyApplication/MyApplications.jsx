import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { createCookieSessionStorage } from "react-router-dom";

const MyApplications = () => {
  const { user } = useAuth();
  
  const [jobs, setJobs] = useState([]);

  const remamin = [...jobs]
  console.log(remamin);
  
  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user.email}`)
    .then((res) => res.json())
    .then((data) => {
      setJobs(data);
      console.log(data);
    });
  }, [user.email, jobs.length ]);
  console.log(Array.isArray(jobs));
  
  const handelDelete = (_id) => {
    console.log('You can delete');
    fetch(`http://localhost:3000/jobdelete/${_id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
        // setRemaining(data)
        const remaining = jobs.filter(job => job._id !== _id)
        setJobs(remaining)
    })

  }

  return (
    <div>
      <h3>my application {jobs.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {remamin.map((job, i) => (
              <tr key={i}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button onClick={() =>handelDelete(job._id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
