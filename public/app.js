var MicrosoftObj = mainObj;
console.log(MicrosoftObj);

var name = ["Victor", "John", "Sam"];

var FinalObject = {
    patient_name: "",
    prescription: "",
    directions: "",
    prescriber: "",
    quantity: "",
    store: {
        store_phone: "",
        store_id: ""
    },
    RX_location: ""
};

var GetName = function(){
    var firstName = "", lastName = "", prescriptionName1 = "", prescriptionName2 = "",
        direction = [], quantityOf = "", storePhone = "", storeId = "", storeLocation = "",
        prescriberFirstName = "", prescriberLastName = "", directionLength;

    firstName = MicrosoftObj[1].lines[0].words[0].text;
    lastName = MicrosoftObj[1].lines[0].words[1].text;
    prescriptionName1 = MicrosoftObj[1].lines[1].words[1].text;
    prescriptionName2 = MicrosoftObj[1].lines[1].words[2].text;
    directionLength = MicrosoftObj[1].lines[2].words.length;
    quantityOf =  MicrosoftObj[1].lines[3].words[1].text;
    storePhone =  MicrosoftObj[1].lines[5].words[0].text;
    storeId = MicrosoftObj[1].lines[7].words[2].text;
    storeLocation = MicrosoftObj[0].lines[0].words[0].text;
    prescriberFirstName = MicrosoftObj[1].lines[8].words[1].text;
    prescriberLastName = MicrosoftObj[1].lines[8].words[2].text;



    for (i = 0 ; i < directionLength ; i++ ) {
      direction[i] = MicrosoftObj[1].lines[2].words[i].text;
     }

    var finalDirections = direction.join().replace(/[,]+/g, " ");
    var fullName = firstName + " "+lastName;
    var ThePrescription = prescriptionName1 + " "+prescriptionName2;
    var finalQuantity = quantityOf;
    var theStorePhone = storePhone;
    var theStoreId = storeId;
    var theStoreLocation = storeLocation;
    var prescriberFullName = prescriberFirstName + " "+prescriberLastName;

    FinalObject.patient_name = fullName;
    FinalObject.prescription = ThePrescription;
    FinalObject.directions = finalDirections;
    FinalObject.prescriber = prescriberFullName;
    FinalObject.quantity = finalQuantity;
    FinalObject.store.store_phone = theStorePhone;
    FinalObject.store.store_id = theStoreId;
    FinalObject.RX_location = theStoreLocation;

    console.log(FinalObject);
}


GetName();
