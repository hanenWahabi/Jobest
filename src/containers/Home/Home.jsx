import React from "react";
import illustration2 from "../../images/illustration2.png";
import illustration3 from "../../images/illustration3.png";
import Feature from "../../components/Feature";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../sass/main.scss";
import Categories from "../../components/Categories";

import shape2 from "../../images/Shape2.png";
import shape3 from "../../images/Shape3.png";
import shape4 from "../../images/Shape4.png";
import shape5 from "../../images/Shape5.png";
import shape6 from "../../images/Shape6.png";
import shape7 from "../../images/Shape7.png";

const data = [
  { name: "Accounting / Finance", icon: shape2 },
  { name: "Design / Creative", icon: shape3 },
  { name: "Progammer", icon: shape4 },
  { name: "Production / Operation", icon: shape5 },
  { name: "Education / Training", icon: shape6 },
  { name: " Consultancy", icon: shape7 },
];
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

      <Categories data={data} />
      <Footer />
    </div>
  );
}

export default Home;
