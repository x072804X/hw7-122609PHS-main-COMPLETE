const GALACTIC_MAP = getGalaticMap();

/**
 * This function is already written for you!
 * Called whenever the "Navigate!" button is pressed.
 * First, it checks if the given galatic code is valid.
 * If it is valid, it alerts the user of the corresponding galatic address.
 * Otherwise, it informs the user that the given galatic code is invalid. 
 */
function navigate() {
    setErrorText()

    const code = document.getElementById("galatic-code").value;
    if (isValidGalaticCode(code)) {
        let sector = lookupSectorName(code);
        let unit = lookupDwellingUnit(code);
        let division = lookupDivisionName(code);
        alert(`${unit} ${division} of ${sector}`);
    } else {
        setErrorText("The specified galatic address is invalid.");
        console.log("hello world")

    }
}

/**
 * This function should lookup the name of the sector from the
 * given galatic code in a case-insensitive manner using GALATIC_MAP.
 * @param {string} galaticCode Some galatic code, e.g. C.360@2
 * @returns {string} The given sector name, e.g. "Charlie"
 */
function lookupSectorName(galaticCode) {
    const code = galaticCode[0].toLowerCase()
    if (GALACTIC_MAP[code]) {
        let sector = GALACTIC_MAP[code].name
        return (sector)
    } else {
        return ("I should return the sector name!")
    }
}
/**
 * This function should lookup the dwelling unit from the
 * given galatic code. You MUST use a loop to accomplish this.
 * You may NOT use the string `split` function NOR may you use
 * regex functions like `matches`, `matchAll`, `exec`, etc.
 * @param {string} galaticCode Some galatic code, e.g. C.360@2
 * @returns {string} The given dwelling unit, e.g. "360"
 */
function lookupDwellingUnit(galaticCode) {
    let dwell = ""
   // let dot = false;
    for (let i = 2; i < galaticCode.length; i++) {
        let current = galaticCode[i]
       // if (galaticCode[i] == '.') {
         //   dot = true
         //   continue;
         if (current == '@') {
            break;
        } else {
            dwell += galaticCode[i];
            //I used AI for reference in creating the loop here. I needed help and got stuck too much. 
        }
    }
    return dwell;

}




/**
 * This function should lookup the division name from the
 * given galatic code according to the specified sector
 * in a case-insensitive manner using GALATIC_MAP.
 * @param {string} galaticCode Some galatic code, e.g. C.360@2
 * @returns {string} The given division name, e.g. "Solar Pulsarium Ln"
 */
function lookupDivisionName(galaticCode) {
    const code = galaticCode[0].toLowerCase()
    const division = GALACTIC_MAP[code].divisions
    let divisioncode = galaticCode[galaticCode.length - 1] 
return division[divisioncode]
    

    //const division = galaticCode.split('@')[1];
    //const mapdivision = GALACTIC_MAP[galaticCode[0]].toUpperCase();
   // const current = GALACTIC_MAP[0]
   // const division = GALACTIC_MAP
   // if (mapdivision[division] && division) {
   //     return mapdivision[division];

  //  } else {
  //      alert("Divison name doesn't exist")
 //   }
}

/**
 * This function should first check if msg is a truthy value.
 * If it is, it should add `is-invalid` to the className of the
 * `galatic-code` form control and set the error text. Otherwise,
 * it should reset any error text and invalid form control state.
 * @param {string || null || undefined} msg The given error message, if any.
 */
function setErrorText(msg) {
    const inp = document.getElementById("galatic-code")
    const error = document.getElementById("galatic-code-error-text")
    if (msg) {
        inp.classList.add("is-invalid")
        error.innerText = msg;
        //I used AI for reference in this function. I was having difficulty completing it on my own.

    } else {
        inp.classList.remove("is-invalid")
        error.innerText = "";
    }
}
/**
 * This function is already written for you!
 * Using regular expressions (regex), it checks whether the given
 * galatic code is in a valid format.
 * @param {string} galaticCode Some galatic code, e.g. C.360@2
 * @returns {boolean} Whether the given code is valid.
 */
function isValidGalaticCode(galaticCode) {
    return /^[a-zA-Z]\.[0-9]+@[0-9]$/.test(galaticCode);
}
