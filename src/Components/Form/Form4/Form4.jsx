import React from 'react'

const Form4 = () => {
  return (
    <div className="contner">
      <div style={{color:'#9e0b0f'}} className="contner-top">
        <div className="form-name">
        Education
        </div>
        <div className="form-number">
          4/12
        </div>
      </div>
      <div className="main-form-div">
        <form action=""><br /><br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">Highest Qualification<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' name="" id="SelectDegree">
                        <option value="">Select Degree</option>
                        <option value="BE">BE</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="MBA">MBA</option>
                        <option value="MCA">MCA</option>
                        <option value="M.Sc">M.Sc</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="Others">Others</option>
                    </select>
              </div>
              <div className='required'>
              Qualification is required
              </div>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' name="" id="SelectDepartment">
                        <option value="">Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="ME">ME</option>
                        <option value="IT">IT</option>
                        <option value="Others">Others</option>
                    </select>
              </div>
              <div className='required'>
              Department is required
              </div>
            </span>
            <span className='lastName'>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor=""><b></b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' name="" id="SelectYear">
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
              <div className='required'>
              Year Of Passing is required
              </div>
            </span>
            <span className='name-input'>
              <div>
                <input className='input-feild' type="number" placeholder='Percentage' />
              </div>
              <div className='required'>
              Percentage is required
              </div>
            </span>
            <span className='lastName'>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">You had any arrear(s) in any semester<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <input type="radio" name="semester" id="" />&nbsp;
                <label htmlFor="">Yes</label>&nbsp;&nbsp;  
                <input type="radio" name="semester" id="" />&nbsp;
                <label htmlFor="">No</label>
              </div>
              <div className='required'>
              </div>
            </span>
            <span className='name-input'>
              <div>
              </div>
              <div className='required'>
              </div>
            </span>
            <span className='lastName'>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">12th<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' name="" id="th12" >
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
              <div className='required'>
              12th Passing Year is required
              </div>
            </span>
            <span className='name-input'>
              <div>
                <input className='input-feild' type="number" placeholder='Percentage' />
              </div>
              <div className='required'>
              Percentage is required
              </div>
            </span>
            <span className='lastName'>
            </span>
          </div>

          <br />

          <div className='name'>
            <span className='name-lable'>
              <label htmlFor="">10th<b>*</b></label>
            </span>
            <span className='name-input'>
              <div>
                <select className='input-feild' name="" id="th12" >
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
              <div className='required'>
              10th Passing Year is required
              </div>
            </span>
            <span className='name-input'>
              <div>
                <input className='input-feild' type="number" placeholder='Percentage' />
              </div>
              <div className='required'>
              Percentage is required
              </div>
            </span>
            <span className='lastName'>
            </span>
          </div>
          <br />
          <hr />

          <div className='button'>
            <a className='previous-button' href="">Previous</a>
            <a className='next-button' href="">Next</a>
          </div>



        </form>
      </div>
    </div>
  )
}

export default Form4