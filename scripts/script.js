// all jobs will be inside a massive array named 'allJobs' as objects, and each will have different id-key.
let allJobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salaryRange: "$130,000 - $175,000",
    status: "Not Applied",
    jobDescription:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salaryRange: "$80,000 - $120,000",
    status: "Not Applied",
    jobDescription:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salaryRange: "$125,000 - $165,000",
    status: "Not Applied",
    jobDescription:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salaryRange: "$140,000 - $190,000",
    status: "Not Applied",
    jobDescription:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salaryRange: "$110,000 - $150,000",
    status: "Not Applied",
    jobDescription:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salaryRange: "$130,000 - $170,000",
    status: "Not Applied",
    jobDescription:
      "Build enterprise applications with JavaScript and modernframeworks. We offer competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full-Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salaryRange: "$120,000 - $160,000",
    status: "Not Applied",
    jobDescription:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salaryRange: "$130,000 - $175,000",
    status: "Not Applied",
    jobDescription:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
  },
];
// all "job-card"s will be made from this 'allJobs' array job objects.
function renderAllJobs() {
  for (let job of allJobs) {
    let renderedJobList = document.createElement("div");
    renderedJobList.className =
      "bg-base-100 border-base-300 p-4 rounded-lg flex flex-col gap-2";
    renderedJobList.innerHTML = `
              <div class="flex justify-between">
                <div>
                  <h3 class="text-xl font-semibold">${job.companyName}</h3>
                  <p class="text-neutral/50">${job.position}</p>
                </div>
                <button
                  class="delete-btn btn btn-outline border-none hover:bg-red-100/50 hover:text-red-600 self-start"
                >
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
              <p class="text-neutral/50 space-x-1">
                <span>${job.location}</span>
                &bull;<span>${job.type}</span>
                &bull;<span>${job.salaryRange}</span>
              </p>
              <p class="w-max block bg-base-300 p-2">${job.status}</p>
              <p>${job.jobDescription}</p>
              <div id="btn-set" class="flex gap-2">
                <button
                  class="interview-btn btn btn-outline border border-success capitalize text-success shadow-sm hover:bg-green-100"
                >
                  interview</button
                ><button
                  class="rejected-btn btn btn-outline border border-error capitalize text-error shadow-sm hover:bg-red-100"
                >
                  rejected
                </button>
              </div>
`;
    document.getElementById("all-section").appendChild(renderedJobList);
  }
}
if (document.getElementById("all-tab").checked) {
  renderAllJobs();
}
// clicking the "interview-btn" will filter the id-key of that job-object and update it's status-key from 'not applied/rejected' to 'interview'.
// clicking the "rejected-btn" will filter the id-key of that job-object and update it's status-key from 'not applied/interview' to 'rejected'.
// the all-stat will show the length of allJobs array, interview-stat will show the ones with status:interview, and rejected-stat will show the ones with status:rejected.
// clicking on "interview-tab" will remove it's child's html and take all job objects with status:interview and render a new card-list.
// clicking on "rejected-tab" will remove it's child's html and take all job objects with status:rejected and render a new card-list.
// if a "job-card" has interview status then the "interview-btn" will be disabled.
// if a "job-card" has rejected status then the "rejected-btn" will be disabled.
// "delete-btn" will have a data-id similar to it's parant job-id, when delete-btn is clicked, it'll filter out the job with the same id from "allJobs" array.
