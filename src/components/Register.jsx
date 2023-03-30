import React from "react";
const arr = [
  'Akrom Amirov',
  'Akrom Amirov',
  'Akrom Amirov',
  'Akrom Amirov',
  'Akrom Amirov',
]

const Register = () => {

  return (
      <div className="register">
        <div className="row">
          <div className="col-3 border list_cont">
            <h2 className="text-center my-4">Ro'yhat</h2>
            { arr.map(item => (<span className="list__item">{item}</span>)) }
          </div>
          <div className="col-9 border row reg_content">
            <div className="col-8 border reg_center" style={{ background: "#8BB6B3"}}>
              <img src="tooth.png" alt="" width={600} height={400}/>
                <input class="form-check-input b1" type="checkbox" id="inlineCheckbox1" value="option1"/>
                <input class="form-check-input b2" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <input class="form-check-input b3" type="checkbox" id="inlineCheckbox3" value="option3"/>
                <input class="form-check-input b4" type="checkbox" id="inlineCheckbox4" value="option4"/>
                <input class="form-check-input b5" type="checkbox" id="inlineCheckbox5" value="option5"/>
                <input class="form-check-input b6" type="checkbox" id="inlineCheckbox6" value="option6"/>
                <input class="form-check-input b7" type="checkbox" id="inlineCheckbox7" value="option7"/>
                <input class="form-check-input b8" type="checkbox" id="inlineCheckbox8" value="option8"/>
                <input class="form-check-input b9" type="checkbox" id="inlineCheckbox9" value="option9"/>
                <input class="form-check-input b10" type="checkbox" id="inlineCheckbox10" value="option10"/>
                <input class="form-check-input b11" type="checkbox" id="inlineCheckbox11" value="option11"/>
                <input class="form-check-input b12" type="checkbox" id="inlineCheckbox12" value="option12"/>
            </div>
            <div className="col-4 border reg_info">
              <form action="">
                <h2 className="text-center my-4">Informatsiya</h2>
                <div className="info_item">
                  <label htmlFor="name1">Name</label>
                  <input type="text" id="name1"/>
                </div>
                <div className="info_item">
                  <label htmlFor="name2">Name</label>
                  <input type="text" id="name2"/>
                </div>
                <div className="info_item">
                  <label htmlFor="name3">Name</label>
                  <input type="text" id="name3"/>
                </div>
                <div className="info_item">
                  <label htmlFor="name4">Name</label>
                  <input type="text" id="name4"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Register;
