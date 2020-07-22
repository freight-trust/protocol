/// <reference path="../../lib/RDPCrystalEDILibrary.d.ts" />
const fs = require('fs');
const edi = require('../../lib/RDPCrystalEDILibrary').RDPCrystalEDILibrary;
const enumMap = require('./enummap');

let map = new enumMap();

//Create a new validator
let validator = new edi.EDIValidator();

//While validating also load the data in memory
validator.LoadValidatedData = true;

//Load a 5010 270 validation rules
let validationRules = fs.readFileSync('../../validationrules/5010/Rules_5010_270_005010X279A1.Rules').toString();

validator.EDIRulesFileData = validationRules;

//Set the EDI data to validate and load.  This can also be read in from a file
validator.EDIDataString = "ISA*00*..........*01*SECRET....*ZZ*SUBMITTERS.ID..*ZZ*RECEIVERS.ID...*030101*1253*^*00501*000000905*1*T*:~" +
    "GS*Hk*SENDER CODE*RECEIVERCODE*19991231*0802*1*X*005010X279A1~" +
    "ST*271*1234*005010X279A1~" +
    "BHT*0022*13*10001234*20060501*1319~" +
    "HL*1**20*1~" +
    "NM1*PR*2*ABC COMPANY*****PI*842610001~" +
    "HL*2*1*21*1~" +
    "NM1*1P*2*BONE AND JOINT CLINIC*****SV*2000035~" +
    "HL*3*2*22*0~" +
    "TRN*1*93175-012547*9877281234~" +
    "NM1*IL*1*SMITH*ROBERT****MI*11122333301~" +
    "DMG*D8*19430519~" +
    "DTP*291*D8*20060501~" +
    "EQ*30~" +
    "SE*13*1234~" +
    "GE*1*1~" +
    "IEA*1*000000905~";

console.log("Validating 5010 271 EDI Files");
validator.validate();

console.log("Errors Found->");

//Get all errors from the EDI data
for (let i = 0; i < validator.Errors.Count; i++) {
    let error = validator.Errors.getItem(i);

    console.log(
        {
            Type: "Error",
            Line: error.LineNumber,
            Transaction: "",
            SnipLevel: map.SnipLevelTypes[error.SnipLevel],
            Message: map.MessageTypes[error.Message],
            Loop: error.Loop,
            Segment: error.Segment,
            Element: error.ElementOrdinal,
            Composite: error.CompositeElementOrdinal,
            Description: error.Description,
            Ordinal: error.SegmentOrdinal
        });
}

console.log("Generated 5010 999 Acknowledgment File");
//Generate 5010 999 Acknowledgment File
let ack999Generator = new edi.Ack999Generator();
let ackDocument = ack999Generator.generate(validator);

console.log(ackDocument.generateEDIData());