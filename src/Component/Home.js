import React, { useState, useEffect } from "react";
import "../index.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 20px auto;
`;

function Home() {
  const [payloadInsta, setPayloadInsta] = useState([]);
  const [thumbnails, setThumbnails] = useState([
    { node: { dimensions: {}, display_url: {} } },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    const data = await fetch("https://www.instagram.com/starwars/?__a=1");
    const payloadInsta = await data.json();
    console.log(payloadInsta);
    setLoading(false);
    setPayloadInsta(payloadInsta.graphql.user);
    setThumbnails(payloadInsta.graphql.user.edge_owner_to_timeline_media.edges);
  };

  return (
    <div>
      {loading ? (
        <ClipLoader css={override} size={350} color={"yellow"} />
      ) : (
        <>
          <div className="home-header">
            <img
              className="home-header-img"
              src={payloadInsta.profile_pic_url}
              alt="profil_pic"
            />
            <a
              style={{ cursor: "pointer", color: "yellow" }}
              href="https://www.instagram.com/starwars/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{payloadInsta.biography}</h2>
            </a>
          </div>
          {thumbnails?.map((t, index) => (
            <a
              key={index}
              href={t.node.display_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="home-thumbnail-img"
                src={t.node.display_url}
                alt={t.display_url}
                width={300}
                height={350}
              />
            </a>
          ))}
        </>
      )}
    </div>
  );
}

export default Home;
