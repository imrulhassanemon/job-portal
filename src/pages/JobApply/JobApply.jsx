import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {

  const {user} = useAuth()

  const {id} = useParams()
  console.log(id, user.email);
  
  const handelJobApplication = e => {
    e.preventDefault()
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github, 
      resume
    }

    fetch('http://localhost:3000/job-applications', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(jobApplication)
    } )
    .then(res => res.json())
    .then(data => {

        Swal.fire({
          position:'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer:1700
        })

      console.log(data);
    })

  }

  return (

        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold">Apply for the job and good luck</h1>
          <form onSubmit={handelJobApplication} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn URL</span>
              </label>
              <input
                type="url"
                placeholder="LinkedIn URL"
                className="input input-bordered"
                required
                name="linkedin"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github URL</span>
              </label>
              <input
                type="url"
                placeholder="Github URL"
                className="input input-bordered"
                required
                name="github"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input
                type="url"
                placeholder="Resume URL"
                className="input input-bordered"
                required
                name="resume"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>

  );
};

export default JobApply;
