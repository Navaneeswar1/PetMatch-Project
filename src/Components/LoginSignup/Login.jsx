import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../LoginSignup/loginSignup.css'

function Login() {
  const [enteredName, setEnteredName] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [showMatchedProfiles, setShowMatchedProfiles] = useState([])

  const navigate = useNavigate()

  function handleInputChange(identifier, value) {
    if (identifier === 'name') {
      setEnteredName(value)
    } else {
      setEnteredPassword(value)
    }
  }

  async function handleLogin() {
    const nameValid = enteredName.trim().length >= 6
    const passwordValid = enteredPassword.trim().length >= 6

    if (nameValid && passwordValid) {
      const data = {
        CustomerName: enteredName,
        Password: enteredPassword,
      }

      const url = 'https://localhost:44375/api/Test/LoginAndFetchData'

      try {
        const result = await axios.post(url, data)
        console.log('Server response:', result)
        console.log('Server response:', result.data)

        if (result.data.message === 'User is valid') {
          setCurrentUser((prevUser) => {
            // console.log('Current User Pet Gender:', result.data.userData.PetGender);
            // console.log('Current User Breed:', result.data.userData.Breed);
            return result.data.userData
          })

          const matchedProfilesData = result.data

          // Move the call to navigateToMatchedProfiles outside the state update function
          navigateToMatchedProfiles(matchedProfilesData)

          // Update the state separately
          setShowMatchedProfiles(matchedProfilesData)
        } else {
          alert('Invalid credentials. Please try again.')
        }
      } catch (error) {
        console.error('Error during login:', error)
        alert('Error during login. Please try again.')
      }
    } else {
      alert('Please enter valid Name and Password.')
    }
  }

  function navigateToMatchedProfiles(data) {
    navigate('/Afterloginpage', { state: data })
  }

  const nameNotValid = enteredName.trim().length < 6
  const passwordNotValid = enteredPassword.trim().length < 6

  return (
    <div id='auth-inputs'>
      <div className='controls'>
        <p>
          <label>Name</label>
          <input
            type='text'
            placeholder='Enter Name'
            className={nameNotValid ? 'invalid' : undefined}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </p>

        <p>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter Password'
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
        </p>
      </div>

      <div className='actions'>
        <Link to='/signup' className='text-button'>
          Create a new account
        </Link>
        <button className='button' onClick={() => handleLogin()}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Login

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import MatchedProfiles from './MatchedProfiles'; // Import the MatchedProfiles component
// import './LoginSignup.css';

// function Login() {
//   const [enteredName, setEnteredName] = useState('');
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [showMatchedProfiles, setShowMatchedProfiles] = useState(false);

//   function handleInputChange(identifier, value) {
//     if (identifier === 'name') {
//       setEnteredName(value);
//     } else {
//       setEnteredPassword(value);
//     }
//   }

//   // function handleLogin() {
//   //   const nameValid = enteredName.trim().length >= 6;
//   //   const passwordValid = enteredPassword.trim().length >= 6;

//   //   if (nameValid && passwordValid) {
//   //     const data = {
//   //       CustomerName: enteredName,
//   //       Password: enteredPassword,
//   //     };

//   //     const url = 'https://localhost:44375/api/Test/Login';
//   //     axios.post(url, data)
//   //       .then((result) => {
//   //         console.log('Server response:', result);
//   //         console.log('Server response:', result.data);
//   //         if (result.data.message === 'User is valid') {
//   //           alert(result.data.message);
//   //           setCurrentUser(result.data.userData);
//   //           console.log(currentUser); // Access userData property
//   //           setShowMatchedProfiles(true);
//   //           console.log('Current User Pet Gender:', result.data.userData.PetGender);
//   //           console.log('Current User Breed:', result.data.userData.Breed);
//   //         } else {
//   //           alert('Invalid credentials. Please try again.');
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         alert('Error during login. Please try again.');
//   //       });
//   //   } else {
//   //     alert('Please enter valid Name and Password.');
//   //   }
//   // }

//   async function handleLogin() {
//     const nameValid = enteredName.trim().length >= 6;
//     const passwordValid = enteredPassword.trim().length >= 6;

//     if (nameValid && passwordValid) {
//       const data = {
//         CustomerName: enteredName,
//         Password: enteredPassword,
//       };

//       const url = 'https://localhost:44375/api/Test/Login';

//       try {
//         const result = await axios.post(url, data);
//         console.log('Server response:', result);
//         console.log('Server response:', result.data);

//         if (result.data.message === 'User is valid') {
//           alert(result.data.message);
//           setCurrentUser(result.data.userData);
//           console.log(currentUser); // Access userData property
//           setShowMatchedProfiles(true);
//           console.log('Current User Pet Gender:', result.data.userData.PetGender);
//           console.log('Current User Breed:', result.data.userData.Breed);
//         } else {
//           alert('Invalid credentials. Please try again.');
//         }
//       } catch (error) {
//         alert('Error during login. Please try again.');
//       }
//     } else {
//       alert('Please enter valid Name and Password.');
//     }
//   }

//   const nameNotValid = enteredName.trim().length < 6;
//   const passwordNotValid = enteredPassword.trim().length < 6;

//   return (
//     <div id='auth-inputs'>
//       <div className='controls'>
//         <p>
//           <label>Name</label>
//           <input
//             type='text'
//             placeholder='Enter Name'
//             className={nameNotValid ? 'invalid' : undefined}
//             onChange={(e) => handleInputChange('name', e.target.value)}
//           />
//         </p>

//         <p>
//           <label>Password</label>
//           <input
//             type='password'
//             placeholder='Enter Password'
//             className={passwordNotValid ? 'invalid' : undefined}
//             onChange={(e) => handleInputChange('password', e.target.value)}
//           />
//         </p>
//       </div>

//       <div className="actions">
//         <Link to="/signup" className="text-button">
//           Create a new account
//         </Link>
//         <button className='button' onClick={() => handleLogin()}>Sign In</button>
//       </div>

//       {showMatchedProfiles && currentUser && (
//         <MatchedProfiles currentUser={currentUser} />
//       )}
//     </div>
//   );
// }

// export default Login;
