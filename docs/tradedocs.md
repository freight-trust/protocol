# TradeDocs Model

## Why a Process Model

The TradeDocs Model lays the foundation for the standardisation, automation and inter-operability of industry processes. Industry processes represent `events` and `actions` that occur through a business transaction’s lifecycle, from negotiating a carrier rate agreement to allocating a contracted container rates or calculating tarrif amounts.

While standard bodies typically define the protocols for industry processes, differences in the implementation minutia typically causes operational friction between transacting counterparties (e.g. 3PL and Shipper). Evidence shows that even when calculations are defined in mathematical notation can be a source of dispute between parties in a transaction.

## What Is the TradeDocs Model

The TradeDocs Process Model has been designed to translate the technical standards that support those industry processes into a standardised machine-readable and machine-executable format.

## How Does It Work

The data and proces model definitions of the TradeDocs are implemented by defining two principle interaction scopes.

### Interaction Process Models

- Event Bindings

Event emission bindings are defined in the protocol with their corresponding relevent interfaces, such as enumerated types, arrays, tuples, constants, etc. More.

- Interchange Mappings

Utilizing EDI formats such as X12 or EDIFACT, TradeDocs enables the mapping of EDI transactions to directly instatiate a smart contract. The first implementation is through the Ethereum Virtual Machine, utilizing Solidity.

For example,

```json
{
  "TradeDocTypeMaps": {
    "TS204": "LoadTender",
    "TS990": "LoadTenderResponse",
    "TS997": "Acknowledgment",
    "TS214": "LoadTenderStatus",
    "TS210": "LoadTenderInvoice",
    "S5": "Stop",
    "B1": "BeginningSegmentPickupDelivery",
    "B10": "BeginningSegment",
    "L11": "ReferenceNumber",
    "AT7": "ShipmentStatusDetails",
    "MS1": "ShipmentLocationInfo",
    "K1": "Remarks",
    "Loop_S5_204": "Stops",
    "N9": "Reference",
    "AT5": "HandlingRequirement",
    "Loop_N1_204": "Party",
    "Loop_N7_204": "Equipment",
    "LH6": "HazardousCertification",
    "NTE": "Note",
    "B3": "InvoiceInfo",
    "G62": "DateTimeInfo",
    "H3": "SpecialHandlingInstructions",
    "N7": "EquipmentDetails",
    "N1": "Name",
    "LX": "AssignedNumber",
    "L1": "RatesAndChargesInfo",
    "L3": "TotalWeightAndChargesInfo",
    "Loop_L1_210": "InvoiceRateChargeItem",
    "Loop_LX_210": "InvoiceAssignedNumber",
    "Loop_N1_210": "InvoiceName",
    "Loop_N7_210": "InvoiceEquipmentDetail",
    "Loop_S5_210": "InvoiceStop"
  }
}
```

Which Yields

```
161a1e22262a2e32363a3e55453323034620545339393620545339393762054533231346205453323134204c3131c204c6f6f705f53355f323034c204c6f6f705f4c315f32313c204c6f6f705f4c585f32313c204c6f6f705f4e315f32313c204c6f6f705f53355f32313
>>
0xf89080843b9aca0082520894f196cfb2499cfb769a3e4a5148b30fb55c3a862780b86ff86db86b0161a1e22262a2e32363a3e55453323034620545339393620545339393762054533231346205453323134204c3131c204c6f6f705f53355f323034c204c6f6f705f4c315f32313c204c6f6f705f4c585f32313c204c6f6f705f4e315f32313c204c6f6f705f53355f32313
```

## Scope

The scope of each of the process models have two dimensions:

Coverage - which industry processes should be covered.
Granularity - at which level of detail each process should be specified.
Coverage
The TradeDocs process model currently covers the post-trade lifecycle of securities, contractual products, and foreign exchange. Generally, a process is in-scope when it is already covered in ISDA Documentation or other technical documents. For example, the following processes are all in scope:

Trade execution and confirmation
Clearing
Allocation
Settlement (including any future contingent cashflow payment)
Exercise of options (contractual)
Tariff calculation
Regulatory reporting (although covered in a different documentation section)
Granularity

It is important for implementors of the TradeDocs to understand the scope of the model with regard to specifications and executable code for the above list of post-trade lifecycle processes.

The TradeDocs process model leverages the function component of the Rosetta DSL.

A function receives a set of input values and applies logical instructions to return an output. The input and output are both TradeDocs objects (including basic types). While a function specifies its inputs and output, its logic may be fully defined or only partially defined depending on how much of the output’s attribute values it builds. Unspecified parts of a process represent functionality that firms are expected to implement, either internally or through third-parties such as utilities.

It is not always possible or practical to fully specify the business logic of a process from a model. Parts of processes or sub-processes may be omitted from the TradeDocs for the following reasons:

The sub-process is not needed to create a functional TradeDocs output object.
The sub-process has already been defined and its implementation is widely adopted by the industry.
The sub-process is specific to a firm’s internal process and therefore cannot be specified in an industry standard.
Given these reasons, the TradeDocs process model focuses on the most critical data and processes required to create functional objects that satisfy the below criterion:

- All of the qualifiable constituents (such as BusinessEvent and Product) of a function’s output can be qualified, which means that they evaluate to True according to at least one of the applicable Qualification functions.

- Lineage and cross-referencing between objects is accurate for data integrity purposes.

- For any remaining data or processes, implementors can populate the remaining attribute values required for the output to be valid by extending the executable code or by creating their own functions.

For the trade lifecycle processes that are in scope, the TradeDocs process model covers the following sub-process components, which are each detailed in the next sections:

Validation process
Calculation process
Event creation process

### Validation Process

In many legacy models and technical standards, validation rules are generally specified in text-based documentation, which requires software engineers to evaluate and translate the logic into code. The frequently occuring result of this human interpretation process is inconsistent enforcement of the intended logic.

### Product Validation

As an example, the FpML ird validation rule #57, states that if the calculation period frequency is expressed in units of month or year, then the roll convention cannot be a weekday. A machine readable and executable definition of that specification is provided in the TradeDocs, as a condition attached to the CalculationPeriodFrequency type:
