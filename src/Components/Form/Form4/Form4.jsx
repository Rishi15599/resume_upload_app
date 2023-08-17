import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form4 = () => {
  const Degree = [
    {
      name: "BE",
      Department: ["CSE", "EEE", "ECE", "ME", "IT", "Others"]
    },
    {
      name: "B.Sc",
      Department: ["CS", "IT", "Others"]
    },
    {
      name: "B.Tech",
      Department: ["CS", "IT", "Others"]
    },
    {
      name: "MBA",
      Department: ["HR", "Marketing", "Systems", "Others"]
    },
    {
      name: "MCA",
      Department: ["CS", "Others"]
    },
    {
      name: "M.Sc",
      Department: ["CS", "Others"]
    },
    {
      name: "M.Tech",
      Department: ["CSE", "EEE", "ECE", "Me", "IT", "Others"]
    },
    {
      name: "Others",
      Department: ["Others"]
    }
  ]



  // const [SelectDegree, setSelectDegree] = useState('')
  // const [SelectDepartment, setSelectDepartment] = useState('')
  const [SelectYear, setSelectYear] = useState('')
  const [Percentage1, setPercentage1] = useState('')
  const [th12, setth12] = useState('')
  const [Percentage2, setPercentage2] = useState('')
  const [semester, setsemester] = useState('')
  const [th10, setth10] = useState('')
  const [Percentage3, setPercentage3] = useState('')
  const navigate = useNavigate();

  const [SelectDegree, setSelectDegree] = useState('');
  const [SelectDepartment, setSelectDepartment] = useState('');

  const [Department, setDepartment] = useState([])

  const selectDegree = (event) => {
    setSelectDegree(event.target.value);
    setDepartment(Degree.find(Deg=>Deg.name === event.target.value).Department)
  }

  function selectDepartment(event) {
    setSelectDepartment(event.target.value);
  }

  function handleClick() {
    navigate("/form3")
  }

  function validateForm(e) {
    e.preventDefault();
    if (SelectDegree.trim() === "") {
      document.getElementById('SelectDegreeErr').innerHTML = "Qualification is required"
    } else {
      document.getElementById('SelectDegreeErr').innerHTML = ""
      console.log("Degree : " + SelectDegree)
    }

    if (SelectDepartment.trim() === "") {
      document.getElementById('SelectDepartmentErr').innerHTML = "Department is required"
    } else {
      document.getElementById('SelectDepartmentErr').innerHTML = ""
      console.log("Department : " + SelectDepartment)
    }

    if (SelectYear.trim() === "") {
      document.getElementById('SelectYearErr').innerHTML = "Year Of Passing is required"
    } else {
      document.getElementById('SelectYearErr').innerHTML = ""
      console.log("YOP : " + SelectYear)
    }

    if (Percentage1.trim() === "") {
      document.getElementById('Percentage1Err').innerHTML = "Percentage is required"
    } else {
      document.getElementById('Percentage1Err').innerHTML = ""
      console.log("Degree Percentage : " + Percentage1)
    }

    if (semester.trim() === "") {
    } else {
      console.log("Semester Back : " + semester)
    }

    if (th12.trim() === "") {
      document.getElementById('th12Err').innerHTML = "12th Passing Year is required"
    } else {
      document.getElementById('th12Err').innerHTML = ""
      console.log("12th (YOP) : " + th12)
    }

    if (Percentage2.trim() === "") {
      document.getElementById('Percentage2Err').innerHTML = "Percentage is required"
    } else {
      document.getElementById('Percentage2Err').innerHTML = ""
      console.log("12th Percentage : " + Percentage2)
    }

    if (th10.trim() === "") {
      document.getElementById('th10Err').innerHTML = "10th Passing Year is required"
    } else {
      document.getElementById('th10Err').innerHTML = ""
      console.log("10th (YOP) : " + th10)
    }

    if (Percentage3.trim() === "") {
      document.getElementById('Percentage3Err').innerHTML = "Percentage is required"
    } else {
      document.getElementById('Percentage3Err').innerHTML = ""
      console.log("10th Percentage : " + Percentage3)
    }

    if (SelectDepartment.trim() === "" || SelectYear.trim() === "" || Percentage1.trim() === "" || semester.trim() === "" || th12.trim() === "" || Percentage2.trim() === "" || th10.trim() === "" || Percentage3.trim() === "") {

    } else {
      navigate("/form5")
    }
  }
  return (
    <div className="contner">
      <div style={{ color: '#9e0b0f' }} className="contner-top">
        <div className="form-name">
          Education
        </div>
        <div className="form-number">
          4/12
        </div>
      </div>
      <div className="main-form-div">
        <form onSubmit={validateForm} action=""><br /><br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Highest Qualification<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' value={SelectDegree}
                  onChange={selectDegree} >
                  <option value="">Select Degree</option>
                  {Degree.map(Deg => (
                    <option value={Deg.name}>{Deg.name}</option>
                  ))}
                </select>
              </div>
              <div id='SelectDegreeErr' className='required'>
                {/* Qualification is required */}
              </div>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' value={SelectDepartment}
                  onChange={selectDepartment} >
                  <option value="">Select Department</option>
                  {Department.map(SelectDepartment => (
                    <option value={SelectDepartment}>{SelectDepartment}</option>
                  ))

                  }
                </select>
              </div>
              <div id='SelectDepartmentErr' className='required'>
                {/* Department is required */}
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor=""><b></b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild'
                  onChange={(e) => setSelectYear(e.target.value)} >
                  <option value="">Select Year</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div id='SelectYearErr' className='required'>
                {/* Year Of Passing is required */}
              </div>
            </span>
            <span className='name-input'>
              <div>
                <input className='input-feild' type="number" placeholder='Percentage'
                  onChange={(e) => setPercentage1(e.target.value)} />
              </div>
              <div id='Percentage1Err' className='required'>
                {/* Percentage is required */}
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">You had any arrear(s) in any semester<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <input type="radio" name="semester" value="Yes"
                  onChange={(e) => setsemester(e.target.value)}
                />&nbsp;
                <label htmlFor="">Yes</label>&nbsp;&nbsp;
                <input type="radio" name="semester" value="No"
                  onChange={(e) => setsemester(e.target.value)}
                />&nbsp;
                <label htmlFor="">No</label>
              </div>
              <div className='required'>
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">12th<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild'
                  onChange={(e) => setth12(e.target.value)} >
                  <option value="">Select Year</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                </select>
              </div>
              <div id='th12Err' className='required'>
                {/* 12th Passing Year is required */}
              </div>
            </span>
            <span className='name-input'>
              <div>
                <input className='input-feild' type="number" placeholder='Percentage'
                  onChange={(e) => setPercentage2(e.target.value)} />
              </div>
              <div id='Percentage2Err' className='required'>
                {/* Percentage is required */}
              </div>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">10th<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild'
                  onChange={(e) => setth10(e.target.value)} >
                  <option value="">Select Year</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                </select>
              </div>
              <div id='th10Err' className='required'>
                {/* 10th Passing Year is required */}
              </div>
            </span>
            <span className='name-input'>
              <div>
                <input className='input-feild' type="number" placeholder='Percentage'
                  onChange={(e) => setPercentage3(e.target.value)} />
              </div>
              <div id='Percentage3Err' className='required'>
                {/* Percentage is required */}
              </div>
            </span>
          </div>

          <br />
          <hr />

          <div className='button'>
            <button className='previous-button' onClick={handleClick}>Previous</button>
            <button type='submit' className='next-button' >Next</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Form4