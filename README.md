<p align="center">
  <img src="https://raw.githubusercontent.com/freight-trust/branding/master/static/logo-420.svg" alt="Freight Trust logo">
</p>

<h3 align="center">
  Freight Trust
</h3>

<p align="center">
  Frieght Trust & Clearing Corporation
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/Freight Trust-lib">
    <img src="https://img.shields.io/github/license/freight-trust/omnibus" alt="MPL-2.0 License" />
  </a>
  <a href="https://circleci.com/gh/Freight Trust/Freight Trust-lib">
    <img src="https://img.shields.io/github/commits-since/freight-trust/protocol/latest/master" alt="GitHub commits since latest release" />
  </a>
  <a href="https://circleci.com/gh/Freight Trust/Freight Trust-lib">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=Freight Trust">
    <img src="https://img.shields.io/twitter/url?label=%40FreightTrustNet&url=https%3A%2F%2Ftwitter.com%2Ffreighttrustnet" alt="Follow @Freight Trust" />
  </a>
</p>

<br>


### interface-Supply-Chain


<img src="service-mesh.png"
     alt="Freight Trust Network Interface"
     style="float: left; margin-right: 10px;" />
<br />

### Documents of Trade

<img src="documents.png"
     alt="TradeDocs Programtic Interface"
     style="float: left; margin-right: 10px;" />

<br />


### Legal Regimes (Burgess)

#### Concepts
- Units of Execution
- Units of Agreement
- Units of Afferent
- Units of Efferent
- Units of Lexigram


- Controlled Natural Language = Jurisdictional Grammar (see [Burgess](https://github.com/freight-trust/burgess) )
- Afferent = Towards 
- Efferent = Away

## Blocks as `units of agreement`

A couple of specific block linkages are stated as facts. Two general principles of block chaining based on such linkages are stated as "conclusion if condition" rules. (The diagrams' color coding is extended to the symbolic form by using green for facts and their rule-condition counterparts while using red for rule conclusions and their -- recursive -- rule-condition counterpart.)

Facts
"Block1 links to Block2."
"Block2 links to Block3."
Rules
"x chains to y if x links to y."
"x chains to z if x links to y and y chains to z."


Facts are *primitives* (i.e. not containing variables) that apply
a predicate to arguments

to Block1 followed by Block2 and
to Block2 followed by Block3 


Rules are of the form `conclusion :- condition` (i.e. containing variables), with the Prolog-like (symbol) infix `":-"` corresponding to the above "if".

This consittutes the extent of which RuleML is applied to the `TradeDocs` system, a basic primitive set for `rule-conditions`

