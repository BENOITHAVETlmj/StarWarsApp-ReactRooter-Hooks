import React, { useState, useEffect } from "react";
import "../index.css";

function Home() {
  const [payloadInsta, setPayloadInsta] = useState([]);
  const [thumbnails, setThumbnails] = useState([
    { node: { dimensions: {}, display_url: {} } },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItems = async () => {
    setIsLoading(true);
    const data = await fetch("https://www.instagram.com/starwars/?__a=1");

    const payloadInsta = await data.json();
    setPayloadInsta(payloadInsta.graphql.user);
    setThumbnails(payloadInsta.graphql.user.edge_owner_to_timeline_media.edges);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <>...loading</>
      ) : (
        <>
          <div className="home-header">
            <img
              className="home-header-img"
              src={payloadInsta.profile_pic_url}
              alt="profil_pic"
            />
            <h2>{payloadInsta.biography}</h2>
          </div>
          {thumbnails?.map((t, index) => (
            <a
              href="https://www.instagram.com/starwars/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="home-thumbnail-img"
                key={index}
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
