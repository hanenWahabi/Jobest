import React from "react";
import illustration2 from "../../images/illustration2.png";
import illustration3 from "../../images/illustration3.png";
import Feature from "../../components/Feature";
import Header from "../../components/Header";
import "../../sass/main.scss";

function Home() {
  return (
    <div>
      <Header />
      <Feature
        title={"Find your passion and achieve success"}
        description={
          "find a job that suits your interests and talents.A high salary is not the top priority. Most importantly, You can work according to your heart's desire."
        }
        srcPicture={illustration2}
      />
        <Feature
        title={"Million of jobs, finds the one thats rights for you"}
        description={
          "Analytics bootstrapping buzz first mover advantage network effects funding handshake. Buyer social media burn rate interaction design prototype handshake."
        }
        srcPicture={illustration3}
        type="inverse"
      />
   
    </div>
  );
}

export default Home;
/*
   <Feature
        title={"Million of jobs, finds the one thats rights for you"}
        description={
          "Analytics bootstrapping buzz first mover advantage network effects funding handshake. Buyer social media burn rate interaction design prototype handshake."
        }
        srcPicture={illustration3}
        type="inverse"
      />


*/
