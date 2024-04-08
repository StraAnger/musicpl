import React from "react";
import "./index.scss";
import Header from "./components/Header/Header.index.tsx"
import Player from "./components/Player/Player.index.tsx"
import Footer from "./components/Footer/Footer.index.tsx"

//https://www.figma.com/file/WylPL2Yis80gdWKzmbxMeq/Untitled?type=design&node-id=1-2&mode=design&t=gnZExLl1iILTFplz-0

export default function App(): JSX.Element {
  return (
    <div className="wraper">
      <Header />
      <Player />
      <Footer />
    </div>
  );
}