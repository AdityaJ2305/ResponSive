import React from "react";
import "../components/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="sidebar">
        <ul>
          <li className="sideitem">HTML</li>
          <li className="sideitem">CSS</li>
          <li className="sideitem">JAVSCRIPT</li>
          <li className="sideitem">C</li>
          <li className="sideitem">C++</li>
          <li className="sideitem">JAVA</li>
          <li className="sideitem">PYTHON</li>
          <li className="sideitem">REACT</li>
          {/* <li className="sideitem">BOOTSTRAP</li>
          <li className="sideitem">TAILWAND</li>
          <li className="sideitem">MATERIAL UI</li>
          <li className="sideitem">SPRING BOOT</li>
          <li className="sideitem">TAILWAND</li>
          <li className="sideitem">TAILWAND</li> */}
        </ul>
      </div>
      <div className="post">
        <img
          src="https://i.pinimg.com/564x/ac/18/49/ac18498ee93158817a026a82e8655fa7.jpg"
          alt="user"
          className="userDP" 
        />
        <label htmlFor="userpost">
          <input
            type="text"
            id="userpost"
            placeholder="What's going on!"
            className="Input"
          />
        </label>
        <hr/>
        <br/>
        <img
          src="https://i.pinimg.com/564x/ac/18/49/ac18498ee93158817a026a82e8655fa7.jpg"
          alt="user"
          className="userDP" 
        />
        <label htmlFor="userpost">
          <input
            type="text"
            id="userpost"
            placeholder="What's going on!"
            className="Input"
          />
        </label>
        <hr/>
        <br/>
        <img
          src="https://i.pinimg.com/564x/ac/18/49/ac18498ee93158817a026a82e8655fa7.jpg"
          alt="user"
          className="userDP" 
        />
        <label htmlFor="userpost">
          <input
            type="text"
            id="userpost"
            placeholder="What's going on!"
            className="Input"
          />
        </label>
        <hr/>
        <br/>
        <img
          src="https://i.pinimg.com/564x/ac/18/49/ac18498ee93158817a026a82e8655fa7.jpg"
          alt="user"
          className="userDP" 
        />
        <label htmlFor="userpost">
          <input
            type="text"
            id="userpost"
            placeholder="What's going on!"
            className="Input"
          />
        </label>
      </div>
    </div>
  );
}

export default Home;
