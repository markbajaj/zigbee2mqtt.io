"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27551],{487084:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-39313515","path":"/devices/106-03.html","title":"Plugwise 106-03 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Plugwise 106-03 control via MQTT","description":"Integrate your Plugwise 106-03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-05-24T20:14:06.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Pi_heating_demand (numeric)","slug":"pi-heating-demand-numeric","link":"#pi-heating-demand-numeric","children":[]},{"level":3,"title":"Local_temperature (numeric)","slug":"local-temperature-numeric","link":"#local-temperature-numeric","children":[]},{"level":3,"title":"Valve_position (numeric)","slug":"valve-position-numeric","link":"#valve-position-numeric","children":[]},{"level":3,"title":"Force (enum)","slug":"force-enum","link":"#force-enum","children":[]},{"level":3,"title":"Radio_strength (enum)","slug":"radio-strength-enum","link":"#radio-strength-enum","children":[]},{"level":3,"title":"Calibrate_valve (binary)","slug":"calibrate-valve-binary","link":"#calibrate-valve-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1688483609000},"filePathRelative":"devices/106-03.md"}')},959016:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(166252);const a=(0,o._)("h1",{id:"plugwise-106-03",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#plugwise-106-03","aria-hidden":"true"},"#"),(0,o.Uk)(" Plugwise 106-03")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"106-03")],-1),n=(0,o._)("td",null,"Vendor",-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Tom thermostatic radiator valve")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, pi_heating_demand, local_temperature, valve_position, force, radio_strength, calibrate_valve, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/106-03.jpg",alt:"Plugwise 106-03"})])],-1),s=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),h=(0,o.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="pi-heating-demand-numeric" tabindex="-1"><a class="header-anchor" href="#pi-heating-demand-numeric" aria-hidden="true">#</a> Pi_heating_demand (numeric)</h3><p>Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. Value can be found in the published state on the <code>pi_heating_demand</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="local-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#local-temperature-numeric" aria-hidden="true">#</a> Local_temperature (numeric)</h3><p>Current temperature measured on the device. Value can be found in the published state on the <code>local_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="valve-position-numeric" tabindex="-1"><a class="header-anchor" href="#valve-position-numeric" aria-hidden="true">#</a> Valve_position (numeric)</h3><p>Directly control the radiator valve. The values range from 0 (valve closed) to 100 (valve fully open). Value can be found in the published state on the <code>valve_position</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_position&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="force-enum" tabindex="-1"><a class="header-anchor" href="#force-enum" aria-hidden="true">#</a> Force (enum)</h3><p>How hard the motor pushes the valve. The closer to the boiler, the higher the force needed. Value can be found in the published state on the <code>force</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;force&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;force&quot;: NEW_VALUE}</code>. The possible values are: <code>standard</code>, <code>high</code>, <code>very_high</code>.</p><h3 id="radio-strength-enum" tabindex="-1"><a class="header-anchor" href="#radio-strength-enum" aria-hidden="true">#</a> Radio_strength (enum)</h3><p>Transmits with higher power when range is not sufficient. Value can be found in the published state on the <code>radio_strength</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;radio_strength&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radio_strength&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>high</code>.</p><h3 id="calibrate-valve-binary" tabindex="-1"><a class="header-anchor" href="#calibrate-valve-binary" aria-hidden="true">#</a> Calibrate_valve (binary)</h3><p>Calibrates valve on next wakeup. Value can be found in the published state on the <code>calibrate_valve</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibrate_valve&quot;: NEW_VALUE}</code>. If value equals <code>calibrate</code> calibrate_valve is ON, if <code>idle</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),p={},m=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[d,(0,o._)("tbody",null,[l,(0,o._)("tr",null,[n,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Plugwise"},{default:(0,o.w5)((()=>[(0,o.Uk)("Plugwise")])),_:1})])]),r,c,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),s,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);