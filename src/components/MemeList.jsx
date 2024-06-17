import axios from "axios";
import "./MemeList.css";
import { useEffect, useState } from "react";

function MemeList() {
  const [memes, setMemes] = useState([]);

  const HTMLmemes = memes.map((meme) => {
    return (
      <li key={meme.id} className="meme-item">
        <h2>{meme.name}</h2>
        <img src={meme.url} alt="meme img" className="meme-img" />
      </li>
    );
  });

  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMemes(data.data.memes);
  //     });
  // }, []);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      console.log(response.data);
      setMemes(response.data.data.memes);
    });
  }, []);

  return <ul className="meme-list">{HTMLmemes}</ul>;
}

export default MemeList;
