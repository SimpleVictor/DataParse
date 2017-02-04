var MicrosoftObj = mainObj;
console.log(MicrosoftObj);

var name = ["Victor", "John", "Sam"];

var FinalObject = {
    patient_name: "",
    prescription: "",
    directions: "",
    quantity: "",
    store: {
        store_phone: "",
        store_id: ""
    },
    RX_location: ""
};

var GetName = function(){
    var firstName = "";
    var lastName = "";

    firstName = MicrosoftObj[1].lines[0].words[0].text;
    lastName = MicrosoftObj[1].lines[0].words[1].text;

    var fullName = firstName + " "+lastName;
    FinalObject.patient_name = fullName;
    console.log(FinalObject);
}


GetName();
