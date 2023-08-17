import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form2 = () => {
  const countries = [
    {
      name: "India",
      states: [
        { name: "Andhra Pradesh", cities: ["Amaravati", "Visakhapatnam", "Vijayawada"] },
        { name: "Arunachal Pradesh", cities: ["Itanagar"] },
        { name: "Assam", cities: ["Guwahati", "Dispur"] },
        { name: "Bihar", cities: ["Patna", "Gaya"] },
        { name: "Chhattisgarh", cities: ["Raipur", "Bilaspur"] },
        { name: "Goa", cities: ["Panaji", "Margao"] },
        { name: "Gujarat", cities: ["Ahmedabad", "Surat"] },
        { name: "Haryana", cities: ["Chandigarh", "Faridabad"] },
        { name: "Himachal Pradesh", cities: ["Shimla", "Dharamshala"] },
        { name: "Jharkhand", cities: ["Ranchi", "Jamshedpur"] },
        { name: "Karnataka", cities: ["Bangalore", "Mysore"] },
        { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi"] },
        { name: "Madhya Pradesh", cities: ["Bhopal", "Indore"] },
        { name: "Maharashtra", cities: ["Mumbai", "Pune"] },
        { name: "Manipur", cities: ["Imphal"] },
        { name: "Meghalaya", cities: ["Shillong"] },
        { name: "Mizoram", cities: ["Aizawl"] },
        { name: "Nagaland", cities: ["Kohima"] },
        { name: "Odisha", cities: ["Bhubaneswar", "Cuttack"] },
        { name: "Punjab", cities: ["Chandigarh", "Ludhiana"] },
        { name: "Rajasthan", cities: ["Jaipur", "Udaipur"] },
        { name: "Sikkim", cities: ["Gangtok"] },
        { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore"] },
        { name: "Telangana", cities: ["Hyderabad", "Warangal"] },
        { name: "Tripura", cities: ["Agartala"] },
        { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur"] },
        { name: "Uttarakhand", cities: ["Dehradun", "Nainital"] },
        { name: "West Bengal", cities: ["Kolkata", "Siliguri"] }
      ]
    },
    {
      name: "United States",
      states: [
        { name: "Alabama", cities: ["Montgomery", "Birmingham"] },
        { name: "Alaska", cities: ["Juneau", "Anchorage"] },
        { name: "Arizona", cities: ["Phoenix", "Tucson"] },
        { name: "Arkansas", cities: ["Little Rock", "Fort Smith"] },
        { name: "California", cities: ["Los Angeles", "San Francisco"] },
        { name: "Colorado", cities: ["Denver", "Colorado Springs"] },
        { name: "Connecticut", cities: ["Hartford", "New Haven"] },
        { name: "Delaware", cities: ["Dover", "Wilmington"] },
        { name: "Florida", cities: ["Tallahassee", "Miami"] },
        { name: "Georgia", cities: ["Atlanta", "Savannah"] },
        { name: "Hawaii", cities: ["Honolulu", "Hilo"] },
        { name: "Idaho", cities: ["Boise", "Idaho Falls"] },
        { name: "Illinois", cities: ["Springfield", "Chicago"] },
        { name: "Indiana", cities: ["Indianapolis", "Fort Wayne"] },
        { name: "Iowa", cities: ["Des Moines", "Cedar Rapids"] },
        { name: "Kansas", cities: ["Topeka", "Wichita"] },
        { name: "Kentucky", cities: ["Frankfort", "Louisville"] },
        { name: "Louisiana", cities: ["Baton Rouge", "New Orleans"] },
        { name: "Maine", cities: ["Augusta", "Portland"] },
        { name: "Maryland", cities: ["Annapolis", "Baltimore"] },
        { name: "Massachusetts", cities: ["Boston", "Springfield"] },
        { name: "Michigan", cities: ["Lansing", "Detroit"] },
        { name: "Minnesota", cities: ["St. Paul", "Minneapolis"] },
        { name: "Mississippi", cities: ["Jackson", "Gulfport"] },
        { name: "Missouri", cities: ["Jefferson City", "Kansas City"] },
        { name: "Montana", cities: ["Helena", "Billings"] },
        { name: "Nebraska", cities: ["Lincoln", "Omaha"] },
        { name: "Nevada", cities: ["Carson City", "Las Vegas"] },
        { name: "New Hampshire", cities: ["Concord", "Manchester"] },
        { name: "New Jersey", cities: ["Trenton", "Newark"] },
        { name: "New Mexico", cities: ["Santa Fe", "Albuquerque"] },
        { name: "New York", cities: ["Albany", "New York City"] },
        { name: "North Carolina", cities: ["Raleigh", "Charlotte"] },
        { name: "North Dakota", cities: ["Bismarck", "Fargo"] },
        { name: "Ohio", cities: ["Columbus", "Cleveland"] },
        { name: "Oklahoma", cities: ["Oklahoma City", "Tulsa"] },
        { name: "Oregon", cities: ["Salem", "Portland"] },
        { name: "Pennsylvania", cities: ["Harrisburg", "Philadelphia"] },
        { name: "Rhode Island", cities: ["Providence", "Warwick"] },
        { name: "South Carolina", cities: ["Columbia", "Charleston"] },
        { name: "South Dakota", cities: ["Pierre", "Sioux Falls"] },
        { name: "Tennessee", cities: ["Nashville", "Memphis"] },
        { name: "Texas", cities: ["Austin", "Houston"] },
        { name: "Utah", cities: ["Salt Lake City", "Ogden"] },
        { name: "Vermont", cities: ["Montpelier", "Burlington"] },
        { name: "Virginia", cities: ["Richmond", "Virginia Beach"] },
        { name: "Washington", cities: ["Olympia", "Seattle"] },
        { name: "West Virginia", cities: ["Charleston", "Huntington"] },
        { name: "Wisconsin", cities: ["Madison", "Milwaukee"] },
        { name: "Wyoming", cities: ["Cheyenne", "Casper"] },
      ],
    },
  ];



  const [StayingWith, setStayingWith] = useState('')
  const [Address, setAddress] = useState('')
  const [Area, setArea] = useState('')
  const [Pincode, setPincode] = useState('')
  const navigate = useNavigate();


  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const [states, setStates] = useState([])
  const [cities, setCites] = useState([])

  const selectCountry = (event) => {
    setCountry(event.target.value);
    setStates(countries.find(ctr => ctr.name === event.target.value).states)
  }

  const changeState = (event) => {
    setState(event.target.value);
    setCites(states.find(state => state.name === event.target.value).cities);
  }

  function changeCitry(event) {
    setCity(event.target.value);
  }


  function handleClick() {
    navigate("/")
  }

  function validateForm(e) {
    e.preventDefault();
    if (StayingWith.trim() === "") {
      document.getElementById('StayingWithErr').innerHTML = "Staying With is required"
    } else {
      document.getElementById('StayingWithErr').innerHTML = ""
      console.log(StayingWith)
    }

    if (Address.trim() === "") {
      document.getElementById('AddressErr').innerHTML = "Address is required"
    } else {
      document.getElementById('AddressErr').innerHTML = ""
      console.log(Address)
    }

    if (Area.trim() === "") {
      document.getElementById('AreaErr').innerHTML = "Area is required"
    } else {
      document.getElementById('AreaErr').innerHTML = ""
      console.log(Area)
    }

    if (country.trim() === "") {
      document.getElementById('CountryErr').innerHTML = "Country is required"
    } else {
      document.getElementById('CountryErr').innerHTML = ""
      console.log(country)
    }

    if (state.trim() === "") {
      document.getElementById('SelectStateErr').innerHTML = "State is required"
    } else {
      document.getElementById('SelectStateErr').innerHTML = ""
      console.log(state)
    }

    if (city.trim() === "") {
      document.getElementById('CityErr').innerHTML = "Pincode is required"
    } else {
      document.getElementById('CityErr').innerHTML = ""
      console.log(city)
    }

    if (Pincode.trim() === "") {
      document.getElementById('PincodeErr').innerHTML = "Pincode is required"
    } else {
      document.getElementById('PincodeErr').innerHTML = ""
      console.log(Pincode)
    }

    if (StayingWith.trim() === "" || Address.trim() === "" || Area.trim() === "" || Pincode.trim() === "" || country.trim() === "" || state.trim() === "" || city.trim() === "") {

    } else {
      navigate("/form3")
    }
  }
  return (
    <div className="contner">
      <div style={{ color: '#197b30' }} className="contner-top">
        <div className="form-name">
          Current Address
        </div>
        <div className="form-number">
          2/12
        </div>
      </div>
      <div className="main-form-div">
        <form onSubmit={validateForm} action=""><br /><br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Staying With / in<b>*</b></label>
            </span>
            <span className='name-input-full'>
              <div>

                <select className='input-feild' onChange={(e) => setStayingWith(e.target.value)}>
                  <option value="">Select Staying With / in</option>
                  <option value="Alone">Alone</option>
                  <option value="Family">Family</option>
                  <option value="Friends">Friends</option>
                  <option value="Parents">Parents</option>
                  <option value="PG">PG</option>
                  <option value="Relatives">Relatives</option>
                </select>
              </div>
              <div id='StayingWithErr' className='required'>
                {/* Staying With is required */}
              </div>
            </span>
          </div>
          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Address<b>*</b></label>
            </span>
            <span className='name-input-full'>
              <div>
                <input className='input-feild' type="text" placeholder='Address'
                  onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div id='AddressErr' className='required'>
                {/* Address is required */}
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Area<b>*</b></label>
            </span>
            <span className='name-input-full'>
              <div>
                <input className='input-feild' type="text" placeholder='Area'
                  onChange={(e) => setArea(e.target.value)} />
              </div>
              <div id='AreaErr' className='required'>
                {/* Area is required */}
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Country <b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' value={country} onChange={selectCountry}>
                  <option>Select Country</option>
                  {countries.map(ctr => (
                    <option value={ctr.name}>{ctr.name}</option>
                  ))}
                </select>
              </div>
              <div id='CountryErr' className='required'>
              </div>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' value={state} onChange={changeState}>
                  <option>Select State</option>
                  {states.map(state => (
                    <option value={state.name}>{state.name}</option>
                  ))}
                </select>
              </div>
              <div id='SelectStateErr' className='required'>
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">City<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' value={city} onChange={changeCitry}>
                  <option>Select City</option>
                  {cities.map(city => (
                    <option value={city}>{city}</option>
                  ))}
                </select>
              </div>
              <div id='CityErr' className='required'>
              </div>
            </span>
            <span className='name-input'>
              <div>
                <input className='input-feild' type="number" placeholder='Pincode'
                  onChange={(e) => setPincode(e.target.value)} />
              </div>
              <div id='PincodeErr' className='required'>
                {/* Pincode is required */}
              </div>
            </span>
          </div>

          <br />
          <hr />

          <div className='button'>
            <button className='previous-button' onClick={handleClick}>Previous</button>
            <button type='submit' className='next-button' href="">Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form2