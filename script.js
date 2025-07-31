const searchJobs = async () => {
  const query = document.getElementById('jobInput').value;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c5afde6dfbmshfd11478f566fd88p15ba5djsna8866eb2dce6',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1`, options);
    const data = await response.json();

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    data.data.forEach(job => {
      const jobCard = `
        <div class="job-card">
          <h3>${job.job_title}</h3>
          <p><strong>Company:</strong> ${job.employer_name}</p>
          <p><strong>Location:</strong> ${job.job_city}, ${job.job_country}</p>
          <a href="${job.job_apply_link}" target="_blank">Apply Now</a>
        </div>
      `;
      resultsDiv.innerHTML += jobCard;
    });
  } catch (error) {
    console.error(error);
    alert("Failed to fetch jobs.");
  }
};
