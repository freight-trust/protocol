<#escape x as ediEscape(x)>
UNB+UNOA:1+${m.sender}+${m.receiver}+${m.datetime?string("yyMMdd")}:${m.datetime?string("HHmm")}+${m.controlRef}'
UNH+${m.messageRef}+IFTDGN:D:03A:UN:PROT20'
BGM+89N++9'
HAN+L'
TDT+20+333N+1+:CONTAINER VESSEL++++${m.vessel.id}:::${m.vessel.name}'
RFF+VM:${m.vessel.vmCode}'
LOC+5+${m.departurePort}:139:6'
LOC+61+${m.nextPort}:139:6'
DTM+132:${m.arrivalDate?string("yyMMdd")}:101'
DTM+133:${m.departureDate?string("yyMMdd")}:101'
<#list m.items as item>
EQD+CN+${item.containerCode}+${item.containerType}'
MEA+WT+G+TNE:${item.equipmentWeightTne?string("0.#")}'
</#list>
<#list m.items as item>
CNI+${item_index + 1}+${item.cniCode}'
HAN+L'
LOC+9+${item.portOfLoading}:139:6'
LOC+11+${item.portOfDischarge}:139:6'
GID+${item.cniItem}+0'
DGS+IMD+${item.hazardCode}+${item.undgId}<#if item.dgFpDescription?length != 0>:${item.dgFpDescription}</#if>+<#if item.shipmentFpDegree?length != 0>${item.shipmentFpDegree}:${item.shipmentFpUnit}</#if>+${item.packagingDangerLevelCode}+${item.emergencyProcedure}'
FTX+AAD+++<#list item.freeText as txt>${txt}<#if txt_has_next>:</#if></#list>'
MEA+WT+AAL+KGM:${item.netWeightKgm}'
MEA+WT+G+KGM:${item.grossWeightKgm}'
SGP+${item.containerCode}'
LOC+147+${item.stowageLocation}'
MEA+WT+AAL+KGM:${item.netWeightKgm}'
MEA+WT+G+KGM:${item.grossWeightKgm}'
</#list>
UNT+${m.segmentCount}+${m.messageRef}'
UNZ+1+${m.controlRef}'
</#escape>