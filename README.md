
<!-- Attribution-NonCommercial-NoDerivs 2.5 \*
<https://spdx.org/licenses/CC-BY-NC-ND-2.5.html> \* © 2020 FreightTrust
and Clearing Corporation \*/ = Clearing, Settlement and Delivery of
Trades & Orders -->

<p align="center">
<img src="https://raw.githubusercontent.com/freight-trust/branding/90665e6efb31c1e22638937d083befeb9fd7fcc2/images/bundle/github_repo_card.svg">
</p>
<br>
<!-- Badges Start -->
<p align="center">
<img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/freighttrustnet?label=%40FreightTrustNet&style=social">
<img alt="Open Source License" src="https://img.shields.io/github/license/freight-trust/protocol?style=social">
<!-- Badges End -->

# Protocol Spec

For ABNF specs, [see the `spec_abnf` dir](https://github.com/freight-trust/protocol/tree/master/spec_abnf/abnf)

- directories with `spec_*` are the reference specification 
- directories with `lib` or `module`/`component` *should* be the technical implementation 

### Interfaces


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

