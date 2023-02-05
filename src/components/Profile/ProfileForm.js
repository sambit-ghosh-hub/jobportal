import Axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import DataContext from '../../context/DataContext';
import Select from 'react-select';
// import backgroundimage from './canyon.jpg';
import './ProfileForm.css';
import Header from '../Header/Header';



function ProfileForm() {
  const [data, setData] = useState({});
  
  const [selected, setSelected] = useState(null);
  var skillstring; 
  const ctx = useContext(DataContext)
  console.log(ctx.userProfile)

  const profile=(ctx.userProfile)

  const myData = [
    { label: 'Java',value: 1  },
    { label: 'HTML & CSS', value: 2 },
    { label: 'React JS', value: 3 },
    { label: 'Ruby', value: 4 },
    { label: 'Ruby On Rails', value: 5 },
    { label: 'PLSQL', value: 6 },
    { label: 'SQL', value: 7 },
    { label: 'Spring', value: 8 },
    { label: 'Hibernate', value: 9 }
  ];





  const handleSkillChange = (selectedOption) => {

    setSelected(selectedOption);

  }



  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    console.log(data)
  }


  async function sendData() {

    var skillstring = selected[0].label

    for (let index = 1; index < selected.length; index++) {
      skillstring = skillstring + ',' + selected[index].label;
      console.log(skillstring)

    }
    data.skills = skillstring

    let res = await Axios.post("/candidateprofile", data)
    
    console.log(res.data.message)

  }









  // useEffect(() => {

  //   function handleskilldata() {
  //     let tempArray = new Array;
  //     if (profile.skills) {
  //       let myArray = profile.skills.split(",")
  //       for (let i = 0; i < myArray.length; i++) {
  //         tempArray.push(getValueForLabel(myArray[i]))
  //       }
  //     }
  //     return tempArray;
  //   }

  //   console.log(profile.skills)
  //   console.log(optionArray)

  //   function getValueForLabel(label) {
  //     return myData.find(option => option.label === label) ? myData.find(option => option.label === label) : null;

  //   }

  // }, [])




  return (

    <>
      <Header />
      <div class="profilecontainer">

        <div>  <img src="images/profile.jpg" />

          <div class="input-element">
            <div>
              <label for="firstname" class="input-form-label"> First Name </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder={profile.firstname}
                // "Your first name"
                class="input-form"
                required="required"
                onChange={handleChange}
              />
            </div>

            <div>
              <label for="lastname" class="input-form-label"> Last Name </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder={profile.lastname}
                class="input-form"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="input-element">
            <div>
              <label for="email" class="input-form-label"> Email </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder={profile.email}
                class="input-form"
                onChange={handleChange}
                readonly="readonly"
              />
            </div>

            <div>
              <label for="contact" class="input-form-label"> Phone Number </label>
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder={profile.contact}
                class="input-form"
                onChange={handleChange}
              />

            </div>
          </div>



          <div class="element">
            <label for="address" class="input-form-label"> Address </label>

            <input
              type="text"
              name="address"
              id="address"
              placeholder={profile.address}
              class="input-form element"
              onChange={handleChange}

            />
          </div>


          <div class="element">
            <label for="about" class="input-form-label"> About </label>

            <input
              type="text"
              name="about"
              id="about"
              placeholder={profile.about}
              class="input-form element"
              onChange={handleChange}

            />
          </div>

          <div class="input-element">
            <div>
              <label for="currcompany" class="input-form-label"> Current Company </label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder={profile.company}
                class="input-form"
                onChange={handleChange}
              />
            </div>

            <div>
              <label for="currrole" class="input-form-label"> Current Role </label>
              <input
                type="text"
                name="role"
                id="role"
                placeholder={profile.role}
                class="input-form"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="input-element">
            <div>
              <label for="currctc" class="input-form-label"> Current CTC </label>
              <input
                type="text"
                name="ctc"
                id="ctc"
                placeholder={profile.ctc}
                class="input-form"
                onChange={handleChange}
              />
            </div>

            <div>
              <label for="experience" class="input-form-label"> Experience </label>
              <input
                type="text"
                name="experience"
                id="experience"
                placeholder={profile.experience}
                class="input-form"
                onChange={handleChange}
              />
            </div>
          </div>


          <div class="element">
            <label for="message" class="input-form-label" name="skills">
              Key Skills - {profile.skills}
            </label>

            
            <Select
              isMulti
              options={myData}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleSkillChange}
              

            />

          </div>

          <div class="input-element">
            <div>
              <label for="expsal" class="input-form-label"> Expected Salary </label>
              <input
                type="text"
                name="expectedsalary"
                id="expectedsalary"
                placeholder={profile.expectedsalary}
                class="input-form"
                onChange={handleChange}
              />
            </div>

            <div>
              <label for="locpref" class="input-form-label"> Location Preference </label>
              <input
                type="text"
                name="preferedlocation"
                id="preferedlocation"
                placeholder={profile.preferedlocation}
                class="input-form"
                onChange={handleChange}
              />
            </div>
          </div>



          <div class="element">
            <label for="about" class="input-form-label"> Profile Picture </label>

            <input
              type="text"
              name="profilepic"
              id="profilepic"
              placeholder={profile.profilepic}
              class="input-form element"
              onChange={handleChange}

            />
          </div>

          <div class="element">
            <label for="about" class="input-form-label"> Resume Link </label>

            <input
              type="text"
              name="resumelink"
              id="resumelink"
              placeholder={profile.resumelink}
              class="input-form element"
              onChange={handleChange}

            />
          </div>

          <button class="form-button" onClick={sendData}>Save Profile</button>

        </div>
      </div>
    </>


  )
}

export default ProfileForm