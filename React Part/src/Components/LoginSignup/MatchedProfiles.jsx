import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to include Bootstrap CSS

function MatchedProfilesPage() {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const showMatchedProfiles = location.state;

  useEffect(() => {
    console.log(showMatchedProfiles);
    // Do something with showMatchedProfiles
  }, [showMatchedProfiles]); 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % showMatchedProfiles.length);
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + showMatchedProfiles.length) % showMatchedProfiles.length);
  };

  return (
    
    <section id="title" className="gradient-background">
    <div className="container mt-5" >
      <h2 className="mb-4">Matched Results</h2>
      
      {showMatchedProfiles.length > 0 ? (
        <div className="match-swiping-mode-container custom-card-background">
        
          <ul className="list-unstyled">
            <li key={currentIndex} className="mb-4 ">
              <p>Name: {showMatchedProfiles[currentIndex][1]}</p>
              <p>Phone No: {showMatchedProfiles[currentIndex][2]}</p>
              <p>Address: {showMatchedProfiles[currentIndex][3]}</p>
              <p>Pet Name: {showMatchedProfiles[currentIndex][4]}</p>
              <p>Pet Gender: {showMatchedProfiles[currentIndex][5]}</p>
              <p>Breed: {showMatchedProfiles[currentIndex][6]}</p>
              <p>Pet Age: {showMatchedProfiles[currentIndex][7]}</p>
              <p>Description: {showMatchedProfiles[currentIndex][9]}</p>
            </li>
          </ul>
          <div className="d-flex justify-content-between match-fixed-buttons">
            <button className="btn btn-primary" onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </button>
            <p className="mb-3">
            Profile {currentIndex + 1} of {showMatchedProfiles.length}
          </p>
            <button className="btn btn-primary" onClick={handleNext} disabled={currentIndex === showMatchedProfiles.length - 1}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>No matched profiles found.</p>
      )}
    </div>
    </section>
  );
}

export default MatchedProfilesPage;

















// import React, { useState} from 'react';
// import { useLocation  } from 'react-router-dom';

// function MatchedProfiles( ) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const location = useLocation();
//   const showMatchedProfiles = location.state?.showMatchedProfiles || [];
// console.log(showMatchedProfiles);
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % showMatchedProfiles.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + showMatchedProfiles.length) % showMatchedProfiles.length);
//   };

//   return (
//     <div>
//       <h2>Swiping Mode</h2>
//       {showMatchedProfiles.length > 0 ? (
//         <div>
//           <p>
//             Profile {currentIndex + 1} of {showMatchedProfiles.length}
//           </p>
//           <ul>
//             <li key={currentIndex}>
//               <p>Name: {showMatchedProfiles[currentIndex][1]}</p>
//               <p>Phone No: {showMatchedProfiles[currentIndex][2]}</p>
//               <p>Address: {showMatchedProfiles[currentIndex][3]}</p>
//               <p>Pet Name: {showMatchedProfiles[currentIndex][4]}</p>
//               <p>Pet Gender: {showMatchedProfiles[currentIndex][5]}</p>
//               <p>Breed: {showMatchedProfiles[currentIndex][6]}</p>
//               <p>Pet Age: {showMatchedProfiles[currentIndex][7]}</p>
//               <p>Health Status: {showMatchedProfiles[currentIndex][8]}</p>
//               <p>Description: {showMatchedProfiles[currentIndex][9]}</p>
//               {/* Add other properties as needed */}
//             </li>
//           </ul>
//           <button className="button" onClick={handlePrevious} disabled={currentIndex === 0}>
//             Previous
//           </button>
//           <button className="button" onClick={handleNext} disabled={currentIndex === showMatchedProfiles.length - 1}>
//             Next
//           </button>
//         </div>
//       ) : (
//         <p>No matched profiles found.</p>
//       )}
//     </div>
//   );
// }



// export default MatchedProfiles;







// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function MatchedProfiles({ currentUser }) {
// //   const [matchedProfiles, setMatchedProfiles] = useState([]);

// //   useEffect(() => {
// //     const fetchMatchedProfiles = async () => {
// //       try {
// //         console.log("hii");
// //         const response = await axios.post('https://localhost:44375/api/Test/GetMatchedProfiles', {
// //           currentUser
// //         });
// //         console.log("hii2");

// //         setMatchedProfiles(response.data.userData); // Access userData property
// //       } catch (error) {
// //         console.error('Error fetching matched profiles:', error);
// //       }
// //     };

// //     fetchMatchedProfiles();
// //   }, [currentUser]);

// //   return (
// //     <div>
// //       <h2>Matched Profiles</h2>
// //       {matchedProfiles.length > 0 ? (
// //         <ul>
// //           {matchedProfiles.map((profile) => (
// //             <li key={profile.CustomerName}>
// //               <p>Name: {profile.CustomerName}</p>
// //               <p>Phone No: {profile.PhoneNo}</p>
// //               <p>Address: {profile.Address}</p>
// //               <p>Pet Name: {profile.PetName}</p>
// //               <p>Pet Gender: {profile.PetGender}</p>
// //               <p>Breed: {profile.Breed}</p>
// //               <p>Pet Age: {profile.Age}</p>
// //               <p>Health Status: {profile.health_status}</p>
// //               <p>Description: {profile.description}</p>
// //               {/* Add other properties as needed */}
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No matched profiles found.</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default MatchedProfiles;






// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function MatchedProfiles({ currentUser }) {
// //   const [matchedProfiles, setMatchedProfiles] = useState([]);

// //   useEffect(() => {
// //     const fetchMatchedProfiles = async () => {
// //       try {
// //         console.log("hii",currentUser);
// //         const response = await axios.post('https://localhost:44375/api/Test/GetMatchedProfiles', {
// //           currentUser
// //         });
// //         console.log("hii2",response);

// //         setMatchedProfiles(response.data.userData); // Access userData property
// //       } catch (error) {
// //         console.error('Error fetching matched profiles:', error);
// //       }
// //     };

// //     fetchMatchedProfiles();
// //   }, [currentUser]);


// //   return (
// //     <div>
// //       <h2>Matched Profiles</h2>
// //       {matchedProfiles.length > 0 ? (
// //         <ul>
// //           {matchedProfiles.map((profile) => (
// //             <li key={profile.CustomerName}>
// //               {/* Render profile details */}
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No matched profiles found.</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default MatchedProfiles;



// matchedprofiles page component