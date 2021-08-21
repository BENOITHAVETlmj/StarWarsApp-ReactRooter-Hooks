import React from "react";
import "../index.css";
import ReactPlayer from "react-player/youtube";

function Home() {
  const video1 = "https://www.youtube.com/watch?v=E3-CpzZJl8w";
  return (
    <div
      style={{
        diplay: "flex",
        justifyContent: "center",
      }}
    >
      <ReactPlayer
        url={video1}
        height={400}
        width={600}
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "100px",
        }}
        playing={true}
        controls={true}
      />
      <p>
        Si votre navigateur ne prend pas en charge les vidéos HTML5. Voici{" "}
        <a href={video1} rel="noopener noreferrer">
          un lien pour visionner la vidéo
        </a>
        .
      </p>
    </div>
  );
}

export default Home;
