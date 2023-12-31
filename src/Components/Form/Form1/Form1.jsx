import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form1 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate();

  const [rawPhoneNumber, setRawPhoneNumber] = useState('');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');


  const formatPhoneNumber = (event) => {
    const inputValue = event.target.value;
    setRawPhoneNumber(inputValue);
    const formattedValue = formatAsPhoneNumber(inputValue);
    setFormattedPhoneNumber(formattedValue);
  };

  const formatAsPhoneNumber = (value) => {
    value = value.replace(/\D/g, '');
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
    return value;
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  function validateForm(e) {
    e.preventDefault();

    if (firstName.trim() === "") {
      document.getElementById('firstnameErr').innerHTML = "First Name is required"
    } else {
      document.getElementById('firstnameErr').innerHTML = ""
      console.log("First Name : " + firstName)
    }

    if (lastName.trim() === "") {
      document.getElementById('lastNameErr').innerHTML = "Last Name is required"
    } else {
      document.getElementById('lastNameErr').innerHTML = ""
      console.log("Last Name : " + lastName)
    }

    if (image.trim() === "") {
      document.getElementById('imageErr').innerHTML = "Profile image is required"
    } else {
      document.getElementById('imageErr').innerHTML = ""
      console.log("Photo : " + image)
    }

    if (formattedPhoneNumber.trim() === "") {
      document.getElementById('mobileNumberErr').innerHTML = "Mobile Number is required"
    } else if (formattedPhoneNumber.trim().length == 12) {
      document.getElementById('mobileNumberErr').innerHTML = ""
      console.log("Mobile Number : " + formattedPhoneNumber)
    }
    else {
      document.getElementById('mobileNumberErr').innerHTML = "Please put 10 digit mobile number"
    }


    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.trim() === "") {
      document.getElementById('setEmailErr').innerHTML = "Email Address is required"
    } else if (mailformat.test(email) == true) {
      document.getElementById('setEmailErr').innerHTML = ""
      console.log("Email : " + email)
    } else {
      document.getElementById('setEmailErr').innerHTML = "Please enter valid email address"
    }

    if (gender.trim() === "") {
      document.getElementById('genderErr').innerHTML = "Gender is required"
    } else {
      document.getElementById('genderErr').innerHTML = ""
      console.log("Gender : " + gender)
    }

    if (maritalStatus.trim() === "") {
      document.getElementById('maritalStatusErr').innerHTML = "Marital Status is required"
    } else {
      document.getElementById('maritalStatusErr').innerHTML = ""
      console.log("Marital Status : " + maritalStatus)
    }

    if (age.trim() === "") {
      document.getElementById('ageErr').innerHTML = "Age is required"
    } else {
      document.getElementById('ageErr').innerHTML = ""
      console.log("Age : " + age)
    }

    if (firstName.trim() === "" ||image.trim()===""|| rawPhoneNumber.trim() === "" || lastName.trim() === "" || email.trim() === "" || gender.trim() === "" || maritalStatus.trim() === "" || age.trim() === "") {

    } else {
      navigate("/form2")
    }

  }

  return (
    <div className="contner">
      <div style={{ color: '#9e0b0f' }} className="contner-top">
        <div className="form-name">
          Personal Details
        </div>
        <div className="form-number">
          1/12
        </div>
      </div>
      <div className="main-form-div">
        <form onSubmit={validateForm} action=""><br /><br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Name <b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <input className='input-feild' type="text" placeholder='First Name'
                  onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div id='firstnameErr' className='required'>
                {/* First Name is required */}
              </div>
            </span>
            <span className='name-input'>
              <div>
                <input className='input-feild' type="text" placeholder='Last Name'
                  onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div id='lastNameErr' className='required'>
                {/* Last Name is required */}
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Photo <b>*</b></label>
            </span>
            <span className='name-input'>

              <div className='input-feild-div' onChange={onImageChange}>
                {image ? (<img className='input-feild-photo-photo' src={image} />) : (<img className='input-feild-photo-photo' />)}
                <input type="file" className='input-feild-photo' accept="image/png, image/jpeg" />
              </div>

              <div id='imageErr' style={{ marginTop: 32 }} className='required'>
                {/*Profile image is required */}
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Mobile Number<b>*</b></label>
            </span>
            <span className='name-input-full'>
              <div>
                {/* <input className='input-feild' type="number" placeholder='Mobile Number'
                  onChange={(e) => setMobileNumber(e.target.value)} /> */}
                <input
                  type="text"
                  className='input-feild'
                  value={formattedPhoneNumber}
                  onChange={formatPhoneNumber}
                  placeholder="Enter Phone Number"
                />
              </div>
              <div id='mobileNumberErr' className='required'>
                {/* Mobile Number is required */}
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Email Address<b>*</b></label>
            </span>
            <span className='name-input-full'>
              <div>
                <input className='input-feild' type="text" id='email' placeholder='Email Address'
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div id='setEmailErr' className='required'>
                {/* Email Address is required */}
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Gender<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' name="gender" id="gender"
                  onChange={(e) => setGender(e.target.value)} >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div id='genderErr' className='required'>
                {/* Gender is required */}
              </div>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' name="" id="marital"
                  onChange={(e) => setMaritalStatus(e.target.value)} >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div id='maritalStatusErr' className='required'>
                {/* Marital Status is required */}
              </div>
            </span>
            <span className='lastName'>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Age<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' name="" id="age"
                  onChange={(e) => setAge(e.target.value)} >
                  <option value="">Select Age</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                </select>
              </div>
              <div id='ageErr' className='required'>
                {/* age is required */}
              </div>
            </span>
          </div>

          <br />
          <hr />

          <div className='button'>
            <button type='submit' className='next-button' href="">Next</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Form1