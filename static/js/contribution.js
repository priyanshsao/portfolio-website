async function fetchData() {
    const URL = "https://api.github.com/users/priyanshsao/events";
    const response = await fetch(URL);
    const data = await response.json();
  
    let outHTML = "";
  
    data.forEach((event) => {
      let repoName = event.repo ? event.repo.name : "Unknown Repo";
  
      // Pull Request Cards
      if (event.type === "PullRequestEvent") {
        const pr = event.payload.pull_request;
        const prState = pr.merged
          ? "Merged"
          : pr.state === "open"
          ? "Open"
          : "Closed";
        const prStateClass = pr.merged ? "merged" : pr.state === "open" ? "open" : "closed";
    
        outHTML += `
                  <div class="card">
                      <h2><a style="color: #555;"href="${pr.html_url}">${pr.title}</a></h2>
                          <p>${repoName}</p>
                          <div class="card-footer">
                              <span class="status ${prStateClass}">${prState}</span>
                          </div>
                  </div>
          </div>`;
      }
  
      // Issue Cards
      if (event.type === "IssuesEvent") {
        const issue = event.payload.issue;
        const issueState = issue.state === "open" ? "Open" : "Closed";
        const issueStateClass = issue.state === "open" ? "open" : "closed";
  
        outHTML += `
                  <div class="card">
                      <h2><a style="color: #555;"href="${issue.html_url}">${issue.title}</a></h2>
                      <p>${repoName}</p>
                      <div class="card-footer">
                          <span class="status ${issueStateClass}">${issueState}</span>
                      </div>
                  </div>
          </div>`;
      }
    });
  
    document.getElementById("output").innerHTML = outHTML;
  }
  
  fetchData();
  