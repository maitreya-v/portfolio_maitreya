import React, {useContext} from "react";
import "./GithubProjects.scss";
import {githubProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function GithubProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win && win.focus();
  }

  function getYouTubeEmbed(url = "") {
    // supports youtu.be/<id> and youtube.com/watch?v=<id>
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
      if (u.hostname.includes("youtube.com")) {
        const id = u.searchParams.get("v");
        if (id) return `https://www.youtube.com/embed/${id}`;
      }
    } catch (_) {}
    return url; // fallback (already an embed)
  }

  const {isDark} = useContext(StyleContext);
  if (!githubProjects.display) return null;

  return (
    <Fade bottom duration={500} distance="20px">
      <div className="main" id="githubprojects">
        <div>
          <h1 className="skills-heading">{githubProjects.title}</h1>
          <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
            {githubProjects.subtitle}
          </p>

          <div className="projects-container">
            {githubProjects.projects.map((project, i) => {
              const hasVideo = Boolean(project.video);
              const hasYouTube = Boolean(project.youtube);

              return (
                <div
                  key={i}
                  className={isDark ? "dark-mode project-card project-card-dark" : "project-card project-card-light"}
                >
                  {(hasVideo || hasYouTube || project.image) ? (
                    <div className="project-media">
                      {hasVideo ? (
                        <video
                          className="card-media"
                          controls
                          preload="metadata"
                          poster={project.image}
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : hasYouTube ? (
                        <div className="ratio">
                          <iframe
                            src={getYouTubeEmbed(project.youtube)}
                            title={`${project.projectName} demo`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-media"
                          loading="lazy"
                        />
                      )}
                    </div>
                  ) : null}

                  <div className="project-detail">
                    <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                      {project.projectName}
                    </h5>
                    <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                      {project.projectDesc}
                    </p>

                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, j) => (
                          <span
                            key={j}
                            className={isDark ? "dark-mode project-tag" : "project-tag"}
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
