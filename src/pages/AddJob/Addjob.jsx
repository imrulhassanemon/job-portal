const Addjob = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = Object.fromEntries(fromData.entries());
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handelSubmit} className="card-body">
        {/* job title  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            className="input input-bordered"
            required
            name="title"
          />
        </div>
        {/* job location  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            placeholder="Job Location"
            className="input input-bordered"
            required
            name="location"
          />
        </div>
        {/* job type  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select className="select select-ghost w-full ">
            <option disabled selected>
              Pick a job type
            </option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>
        {/* job category  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select className="select select-ghost w-full ">
            <option disabled selected>
              Pick a job Field
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Teaching</option>
          </select>
        </div>

        {/* salary range */}

        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Min</span>
            </label>
            <input
              type="text"
              placeholder="Min"
              className="input input-bordered"
              required
              name="location"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max</span>
            </label>
            <input
              type="text"
              placeholder="Max" 
              className="input input-bordered"
              required
              name="location"
            />
          </div>
        </div>

        {/* description  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            placeholder="Job Location"
            className="input input-bordered"
            required
            name="location"
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Addjob;
