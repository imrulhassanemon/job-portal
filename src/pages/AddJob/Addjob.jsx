const Addjob = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    // const fromData = new FormData(e.target);
    // const data = Object.fromEntries(fromData.entries());
    // console.log(data);

    const 

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
        {/* job type  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select className="select select-ghost w-full " name="type" required>
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
          <select className="select select-ghost w-full " name="category">
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
              name="salaryrangemin"
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
              name="salaryrangemax"
            />
          </div>
          <select className="select select-ghost w-full " name="currency" required>
            <option disabled selected>
              Currency
            </option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
            
          </select>
        </div>
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
        {/* job Description  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <input
            type="text"
            placeholder="Job Description"
            className="input input-bordered"
            required
            name="description"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            className="input input-bordered"
            required
            name="companyname"
          />
        </div>
        {/* requrements  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirement</span>
          </label>
          <input
            type="text"
            placeholder="Put Each Requrirement in a new line"
            className="input input-bordered"
            required
            name="requrement"
          />
        </div>
        {/* responsibilitis  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilitis</span>
          </label>
          <textarea
            type="text"
            placeholder="Put Each Requrirement in a new line"
            className="input input-bordered"
            required
            name="responsibilitis"
          />
        </div>
        {/* hr name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr Name</span>
          </label>
          <input
            type="text"
            placeholder="Write Hr name"
            className="input input-bordered"
            required
            name="hrname"
          />
        </div>
        {/* hr email  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Write Hr email</span>
          </label>
          <input
            type="text"
            placeholder="Write Hr email"
            className="input input-bordered"
            required
            name="hremail"
          />
        </div>
        {/* logo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Logo URL</span>
          </label>
          <input
            type="url"
            placeholder="Logo url"
            className="input input-bordered"
            required
            name="logo"
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
