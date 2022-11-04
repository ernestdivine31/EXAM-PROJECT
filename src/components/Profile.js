import React from "react"


export default function Profile(props) {
  return (
    <>
      <article className="p-wrap">
        <article className="p-wrap2">
          <img className="avatar"
            src={props.owner.avatar_url}
            alt={props.owner.login}
          />
          <ul className="ul">
            <li>
              <h2 className="owner">{props.owner.login}</h2>
            </li>
            <div>
              <p className="name">{props.name}</p>
              {props.private ? (
                <p className="private">
                  Private
                </p>
              ) : (
                <p className="public">
                  Public
                </p>
              )}
            </div>
          </ul>
        </article>

        <div>
          <p className="date">
            Owned 
           by{" "}
            {props.owner.login}
          </p>
        </div>

        <div className="repo-link">
          <a
            className="repo-text"
            href={props.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Repo
          </a>
        </div>

        <div className="language-w">
          <ul className="language-ul">
           {props.language && (  
             <li className="language-li">
              {props.language}
            </li>
            )} 
         
          </ul>
        </div>
      </article>
    </>
  )
}