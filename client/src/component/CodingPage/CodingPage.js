import React, { useEffect, useState } from "react";
import axios from "axios";

const CodingPage = () => {
  const [repos, setRepos] = useState([]);

  const repoDetails = {
    "reckless-site": {
      photo: "/images/reckless-site.png",
      description: "Professional business site for Reckless Hippie Smoke Shop.",
      externalLink: "https://www.recklesshippieknox.com",
    },
    "Cat-Adoption-Website-Sample": {
      photo: "/images/kitten-adoption.jpg",
      description: "A sample website for potential cat owners.",
      externalLink: "https://mstyles1.github.io/Cat-Adoption-Website-Sample/",
    },
    "Genuine-Gifs-Sample-Work": {
      photo: "/images/Gif-searcher.png",
      description: "A sample GIF search engine.",
      externalLink: "https://mstyles1.github.io/Genuine-Gifs-Sample-Work/",
    },
    "Skate-Trivia-Sample": {
      photo: "/images/skater-quiz.png",
      description: "A sample quiz for skate trivia.",
      externalLink: "https://mstyles1.github.io/Skate-Trivia-Sample/",
    },
    "Todo-List-Sample": {
      photo: "/images/todo-list.png",
      description: "A sample Todo-List maker.",
      externalLink: "https://mstyles1.github.io/Todo-List-Sample",
    },
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/users/mstyles1/repos")
      .then((response) => {
        let repos = response.data;
        repos = repos.filter((repo) => repo.name !== "my-site");
        repos = repos.sort((a, b) => {
          if (a.name === "reckless-site") return -1;
          if (b.name === "reckless-site") return 1;
          return 0;
        });
        setRepos(repos);
      })
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="coding-container">
      <a
        href="https://github.com/mstyles1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="coding-header">GitHub Portfolio</h2>
      </a>

      <ul className="repo-list">
        {repos.map((repo) => {
          const details =
            repoDetails[repo.name.toLowerCase()] || repoDetails[repo.name];

          return (
            <li key={repo.id} className="repo-item">
              <div className="repo-info">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  {repo.name} Repository
                </a>

                {details ? (
                  <>
                    {details.externalLink ? (
                      <a
                        href={details.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={details.photo}
                          alt={repo.name}
                          className="repo-photo"
                        />
                      </a>
                    ) : (
                      <img
                        src={details.photo}
                        alt={repo.name}
                        className="repo-photo"
                      />
                    )}
                    <p className="repo-description">{details.description}</p>
                  </>
                ) : (
                  <p className="repo-description">
                    No description available for this repository.
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CodingPage;
