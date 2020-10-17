import React, { useState, useEffect } from "react";
import "../index.css";

function Home() {
  const [payloadInsta, setPayloadInsta] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setIsLoading(true);
    const data = await fetch("https://www.instagram.com/starwars/?__a=1");

    const payloadInsta = await data.json();
    setPayloadInsta(payloadInsta.graphql.user);
    setIsLoading(false);
  };

  console.log(payloadInsta);

  return (
    <div>
      {isLoading ? (
        <>...loading</>
      ) : (
        <>
          <h2>{payloadInsta.biography}</h2>
          <img src={payloadInsta.profile_pic_url} alt="profil_pic" />
        </>
      )}
    </div>
  );
}

export default Home;
