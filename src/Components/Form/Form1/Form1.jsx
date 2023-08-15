import React, { useState } from 'react'


const Form1 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [photo, setPhoto] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [age, setAge] = useState('')

  function validateForm(e) {
    e.preventDefault();
    if (firstName.trim() == "") {
      setFirstName(document.getElementById('firstnameErr').innerHTML = "First Name is required")
    } else {
      setFirstName(document.getElementById('firstnameErr').innerHTML = "")
      console.log(firstName)
    }

    if (lastName.trim() == "") {
      setLastName(document.getElementById('lastNameErr').innerHTML = "Last Name is required")
    } else {
      setLastName(document.getElementById('lastNameErr').innerHTML = "")
      console.log(lastName)
    }

    if (photo.trim() == "") {
      setPhoto(document.getElementById('photoErr').innerHTML = "Profile image is required")
    } else {
      setPhoto(document.getElementById('photoErr').innerHTML = "")
      console.log(photo)
    }

    if (mobileNumber.trim() == "") {
      setMobileNumber(document.getElementById('mobileNumberErr').innerHTML = "Mobile Number is required")
    } else {
      setMobileNumber(document.getElementById('mobileNumberErr').innerHTML = "")
      console.log(mobileNumber)
    }

    if (email.trim() == "") {
      setEmail(document.getElementById('setEmailErr').innerHTML = "Email Address is required")
    } else {
      setEmail(document.getElementById('setEmailErr').innerHTML = "")
      console.log(email)
    }

    if (gender.trim() == "") {
      setGender(document.getElementById('genderErr').innerHTML = "Gender is required")
    } else {
      setGender(document.getElementById('genderErr').innerHTML = "")
      console.log(gender)
    }

    if (maritalStatus.trim() == "") {
      setMaritalStatus(document.getElementById('maritalStatusErr').innerHTML = "Marital Status is required")
    } else {
      setMaritalStatus(document.getElementById('maritalStatusErr').innerHTML = "")
      console.log(maritalStatus)
    }

    if (age.trim() == "") {
      setAge(document.getElementById('ageErr').innerHTML = "age is required")
    } else {
      setAge(document.getElementById('ageErr').innerHTML = "")
      console.log(age)
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
              <div>
                <input className='input-feild-photo' type="file"
                  onChange={(e) => setPhoto(e.target.value)} />
              </div>
              <div id='photoErr' className='required'>
                {/* Profile image is required */}
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
                <input className='input-feild' type="number" placeholder='Mobile Number'
                  onChange={(e) => setMobileNumber(e.target.value)} />
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
                <input className='input-feild' type="email" placeholder='Email Address'
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