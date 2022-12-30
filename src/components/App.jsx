// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [headingText, setHeading] = useState("");

//   function handleChange(event) {
//     console.log(event.target.value);
//     setName(event.target.value);
//   }

//   function handleClicked(event) {
//     setHeading(name);
//     event.preventDefault();
//   }
//   return (
//     <div className="container">
//       <h1>Hello {headingText}</h1>
//       <form action="" onSubmit={handleClicked}>
//         <input
//           onChange={handleChange}
//           type="text"
//           placeholder="Enter your text"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default App;
import React, { useEffect, useState } from "react";
import Country from "./Country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())

      .then(data => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Country Loaded: {countries.length}</h2>
      <ul>
        {countries.map(country => (
          <Country
            name={country.name}
            flag={country.flag}
            area={country.area}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
