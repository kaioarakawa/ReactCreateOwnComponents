import React from "react";
import "./styles.css";
import Dropdown from "./components/Dropdown";
import Chip from "./components/Chip";
import Card from "./components/Card";
import Balloon from "./components/Balloon";

export default function App() {
  return (
    <>
      <Chip />
      <hr />
      <h1>Pesquise os seus contatos abaixo</h1>
      <Dropdown
        options={[
          {
            label: "Computer",
            value: "Web Developer"
          },
          { label: "Software", value: "Software Engineer" },
          { label: "Design", value: "Web design" }
        ]}
        label={"Select a type for your search: "}
      />
      <div className="contacts">
        <Balloon
          element={<Card name="Kaio" email="kaioarakawa@gmail.com" />}
          text="Web Developer"
        />
        <Balloon
          element={<Card name="Kaio" email="kaioarakawa@gmail.com" />}
          text="Software Engineer"
        />
        <Balloon
          element={<Card name="Kaio" email="kaioarakawa@gmail.com" />}
          text="Software Engineer"
        />
        <Balloon
          element={<Card name="Kaio" email="kaioarakawa@gmail.com" />}
          text="Web design"
        />
      </div>
    </>
  );
}
