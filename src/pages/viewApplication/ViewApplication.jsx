import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applications = useLoaderData();
  console.log(applications);
  const handelChangeStatus = (e, id) => {

    const data = {
        status:e.target.value
    }

    fetch(`http://localhost:3000/job-applications/${id}`, {
        method:'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            Swal.fire({
                title: "Status Updated",
                text: "Status Successfully Updated!",
                icon: "success",
              });
        }
    })

    console.log(e.target.value, id);
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((app, index) => (
              <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.applicant_email}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select 
                  onChange={(e) => handelChangeStatus(e, app._id)}
                  defaultValue={app.status || 'Change Status'}
                  className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled  >
                      Select Status
                    </option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired </option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
