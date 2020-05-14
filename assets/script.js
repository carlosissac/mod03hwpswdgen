var genBtn = document.querySelector("#gen-btn");
var resetBtn = document.querySelector("#reset-btn");
var uppCB = document.querySelector("#up-chk");
var lowCB = document.querySelector("#low-chk");
var numCB = document.querySelector("#num-chk");
var specCB = document.querySelector("#spec-chk");
var lenTB = document.querySelector("#len-textbox");
var psswdArea = document.querySelector("#passwordArea");

genBtn.addEventListener("click", genPsswd);
resetBtn.addEventListener("click", resetForm);

var generator = {
  "uppcase_val": false,
  "lowcase_val": false,
  "num_val": false,
  "spec_val": false,
  "pass_lenght": 0,
  cleanUI: function() {
    uppCB.checked=false;
    lowCB.checked=false;
    numCB.checked=false;
    specCB.checked=false;
    lenTB.value="";
    return 0;
    },
  readValuesUI: function() {
      this.uppcase_val = uppCB.checked;
      this.lowcase_val = lowCB.checked;
      this.num_val = numCB.checked;
      this.spec_val = specCB.checked;
      this.pass_lenght = lenTB.value;
      return 0;
    }, 
  validateInput: function() {
      let chk = 0;
      if(Boolean(this.pass_lenght)) {
        if(Number(this.pass_lenght)){
            if(!(this.pass_lenght%1)) {
              if((this.pass_lenght>7)&&(this.pass_lenght<129)){
                chk = Number(this.uppcase_val) + Number(this.lowcase_val) + Number(this.num_val) + Number(this.spec_val);
                if(chk) { return 0; }
                else {
                    psswdArea.style.color = "red";
                    psswdArea.value="ONE CRITERIA NEEDS TO BE SELECTED";
                    this.cleanUI();
                    return 1;           
                  }
                }
              else {
                psswdArea.style.color = "red";
                psswdArea.value="PASSWORD LENGHT HAS INVALID RANGE";
                this.cleanUI();
                return 1;         
              }
            }
            else {
              psswdArea.style.color = "red";
              psswdArea.value="PASSWORD LENGHT IS INVALID";
              this.cleanUI();
              return 1;         
            }
          }
          else {
            psswdArea.style.color = "red";
            psswdArea.value="PASSWORD LENGHT IS INVALID";
            this.cleanUI();
            return 1;         
          }
      }
      else {
        psswdArea.style.color = "red";
        psswdArea.value="PASSWORD LENGHT IS NOT SPECIFIED";
        this.cleanUI();
        return 1;
      } 
    },
  getRandUppCase: function() {
      console.log("UPPCASE RANDOM");
  },
  getRandLowCase: function() {
    console.log("LOWCASE RANDOM");
  },
  getRandNum: function() {
    console.log("NUMBER RANDOM");
  },
  getRandSpec: function() {
    console.log("SPECIAL RANDOM");
  },

  generatePassword: function() {
    let i=0;
    let j=0;
    while(i<this.pass_lenght) {
      j=Math.floor(Math.random()*4);
      console.log(j);
      switch(j) {
        case 0:
          if(this.uppcase_val) {
            this.getRandUppCase();
            i++;
          }
        break;
        case 1:
          if(this.lowcase_val) {
            this.getRandLowCase();
            i++;
          }
        break;
        case 2:
          if(this.num_val) {
            this.getRandNum();
            i++;
          }
        break;
        case 3:
          if(this.spec_val) {
            this.getRandSpec();
            i++;
          }
        break;
        default:
          console.log("Invalid Random");
        break;
      } 
    }
    
    alert("GENERATEEEEEEEE!!!!!!");
    return 0;
  }
};

function genPsswd() {
  var gen1 = Object.create(generator);
  gen1.readValuesUI();
  if(!gen1.validateInput()) {
        gen1.generatePassword();
    }
  delete gen1;
}

function resetForm() {
  var gen2 = Object.create(generator);
  gen2.cleanUI();
  psswdArea.value="";
  delete gen2;
}

