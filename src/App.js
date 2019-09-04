import React from 'react';
import './App.css';
import Parallax, { ParallaxItem } from './components/parallax';
import Header from './components/parallaxItem/header';
import Item1 from './components/parallaxItem/item1';
import Item2 from './components/parallaxItem/item2';
import Item3 from './components/parallaxItem/item3';
import Item4 from './components/parallaxItem/item4';
import Item5 from './components/parallaxItem/item5';
import Item6 from './components/parallaxItem/item6';
import Item7 from './components/parallaxItem/item7';

const ParallaxItemItem1 = ParallaxItem(Item1);
const ParallaxItemItem2 = ParallaxItem(Item2);
const ParallaxItemItem3 = ParallaxItem(Item3);
const ParallaxItemItem4 = ParallaxItem(Item4);
const ParallaxItemItem5 = ParallaxItem(Item5);
const ParallaxItemItem6 = ParallaxItem(Item6);
const ParallaxItemItem7 = ParallaxItem(Item7);

function App() {
  return (
    <div className="App">
      <div className="container">
        <Parallax>
          <Header />
          <div>
            <h2>Why do we use it?</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
          <ParallaxItemItem1 in={{ "opacity": "0", "top": "15px", "transform": "scaleY(1.25)" }} out={{ "opacity": "1", "top": "0", "transform": "scaleY(1)", "ease": "Power4.easeOut" }} />
          <div className="wrapper-item2">
            <ParallaxItemItem2 in={{ "opacity": "0", "top": "15px", "transform": "scaleY(1.25)" }} out={{ "opacity": "1", "top": "0", "transform": "scaleY(1)", "ease": "Power4.easeOut" }} />
          </div>
          <div>
            <h2>Why do we use it?</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
          <div>
            <div className="half-w">
              <ParallaxItemItem3 in={{ "opacity": "0", "left": "-15px", "transform": "scaleX(1.25)" }} out={{ "opacity": "1", "left": "0px", "transform": "scaleX(1)", "ease": "Power4.easeOut" }} />
            </div>
            <div className="half-w">
              <ParallaxItemItem4 in={{ "opacity": "0", "left": "15px", "transform": "scaleX(1.25)" }} out={{ "opacity": "1", "left": "0px", "transform": "scaleX(1)", "transition-delay": "0.15s", "ease": "Power4.easeOut" }} />
            </div>
          </div>
          <div>
            <h2>Why do we use it?</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
          <div>
            <ul>
              <li>
                <ParallaxItemItem5 in={{ "opacity": "0", "top": "15px", "transform": "scaleY(1.25)" }} out={{ "opacity": "1", "top": "0", "transform": "scaleY(1)", "ease": "Power4.easeOut" }} />
              </li>
              <li>
                <ParallaxItemItem6 in={{ "opacity": "0", "top": "15px", "transition-delay": "0.15s", "transform": "scaleY(1.25)" }} out={{ "opacity": "1", "y": "0px", "transform": "scaleY(1)", "transition-delay": "0.15s", "ease": "Power4.easeOut" }} />
              </li>
              <li>
                <ParallaxItemItem7 in={{ "opacity": "0", "top": "15px", "transition-delay": "0.3s", "transform": "scaleY(1.25)" }} out={{ "opacity": "1", "y": "0px", "transform": "scaleY(1)", "transition-delay": "0.3s", "ease": "Power4.easeOut" }} />
              </li>
            </ul>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
