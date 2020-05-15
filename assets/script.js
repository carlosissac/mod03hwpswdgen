var genBtn = document.querySelector("#gen-btn");
var resetBtn = document.querySelector("#reset-btn");
var uppCB = document.querySelector("#up-chk");
var lowCB = document.querySelector("#low-chk");
var numCB = document.querySelector("#num-chk");
var specCB = document.querySelector("#spec-chk");
var lenTB = document.querySelector("#length-textbox");
var psswdArea = document.querySelector("#passwordArea");

genBtn.addEventListener("click", genPsswd);
resetBtn.addEventListener("click", resetForm);
psswdArea.addEventListener("click", copyTxtArea);

var lock = false;

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
                    //NO CRITERIA IS SELECTED
                    psswdArea.style.color = "red";
                    psswdArea.value="ONE CRITERIA NEEDS TO BE SELECTED";
                    this.cleanUI();
                    return 1;           
                  }
                }
              else {
                //LENGTH IS OUT OF RANGE
                psswdArea.style.color = "red";
                psswdArea.value="LENGTH HAS INVALID RANGE";
                this.cleanUI();
                return 1;         
              }
            }
            else {
              //LENGTH IS NOT AN INTEGER
              psswdArea.style.color = "red";
              psswdArea.value="LENGTH IS INVALID";
              this.cleanUI();
              return 1;         
            }
          }
          else {
            //LENGTH IS NOT A NUMBER
            psswdArea.style.color = "red";
            psswdArea.value="LENGTH IS INVALID";
            this.cleanUI();
            return 1;         
          }
      }
      else {
        //LENGTH IS EMPTY
        psswdArea.style.color = "red";
        psswdArea.value="LENGTH IS NOT SPECIFIED";
        this.cleanUI();
        return 1;
      } 
    },
  getRandUppCase: function() {
    //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
  },
  getRandLowCase: function() {
    //abcdefghijklmnopqrstuvwxyz
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
  },
  getRandNum: function() {
    //0123456789
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
  },
  getRandSpec: function() {
    //used example from https://www.owasp.org/index.php/Password_special_characters
    const spec = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return spec[Math.floor((Math.random()*spec.length))];
  },
  generatePassword: function() {
    let i=0;
    let j=0;
    let buffer = '';
    while(i<this.pass_lenght) {
      j=Math.floor(Math.random()*4);
      switch(j) {
        case 0:
          if(this.uppcase_val) {
            buffer+=this.getRandUppCase();
            i++;
          }
        break;
        case 1:
          if(this.lowcase_val) {
            buffer+=this.getRandLowCase();
            i++;
          }
        break;
        case 2:
          if(this.num_val) {
            buffer+=this.getRandNum();
            i++;
          }
        break;
        case 3:
          if(this.spec_val) {
            buffer+=this.getRandSpec();
            i++;
          }
        break;
        default:
          console.log("Invalid Random");
        break;
      } 
    }
    psswdArea.style.color = "black";
    psswdArea.value = buffer;
    return 0;
  }
};

function genPsswd() {
  var gen1 = Object.create(generator);
  gen1.readValuesUI();
  if(!gen1.validateInput()) {
        gen1.generatePassword();
        lock = true;
    }
  else {
    lock = false;
  }
  delete gen1;
}

function resetForm() {
  var gen2 = Object.create(generator);
  gen2.cleanUI();
  psswdArea.style.color = "black";
  psswdArea.value="";
  lock = false;
  delete gen2;
}

function copyTxtArea() {
  if(lock) {
    psswdArea.select();
    document.execCommand('copy');
    alert("New Password Copied to Clipboard");
  }

}
