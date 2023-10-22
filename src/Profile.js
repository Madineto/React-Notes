import React from "react";


function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

function Target () {
  return (
    <img
      src="https://res.cloudinary.com/dmi3sr1w6/image/upload/v1697628471/aditya-l1-live-news-updates-isro-first-solar-mission-launch-02-september-2023_qtl6hg.jpg"
      alt="Katherine Johnson"
    />
  );
}


export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile /> <br />
      <Profile />
      <Profile />

      <div>
        <h1> THOR MURRAY!</h1>
        <Target />
      </div>
    </section>
  );
}



