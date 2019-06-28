(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(3),i=a(5),o=a(4),d=a(1),s=a(6),c=a(0),m=a.n(c),u=a(8),l=a.n(u),p=(a(17),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),k=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],y=(a(18),a(9)),g=a.n(y),h=a(10),f=a.n(h),w=[{displayName:"",value:!0},{displayName:"",value:!1}],C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).State={Bank:!0,Power:!0,Caption:""},a.playSound=a.playSound.bind(Object(d.a)(a)),a.toggleBank=a.toggleBank.bind(Object(d.a)(a)),a.togglePower=a.togglePower.bind(Object(d.a)(a)),a.updatingItem=a.updatingItem.bind(Object(d.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(d.a)(a)),a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"toggleBank",value:function(){this.State.Bank=!this.State.Bank,this.updatingBankState()}},{key:"togglePower",value:function(){this.State.Power=!this.State.Power,this.updatingPowerState()}},{key:"handleKeyPress",value:function(e){if(e.preventDefault(),this.State.Power){var t=document.getElementById(e.key.toUpperCase());null!==t&&this.audioPlay(t)}}},{key:"playSound",value:function(e){if(e.preventDefault(),this.State.Power){var t=e.currentTarget;this.audioPlay(t)}}},{key:"audioPlay",value:function(e){new Audio(e.querySelector(".clip").src).play();var t=p.findIndex(function(t){return t.keyTrigger===e.id}),a=p[t],r=k[t],n=this.State.Bank?a.id:r.id;this.State.Caption=n,this.updatingItem()}},{key:"updatingItem",value:function(){this.setState({Caption:this.State.Caption})}},{key:"updatingBankState",value:function(){this.setState({Bank:this.State.Bank})}},{key:"updatingPowerState",value:function(){this.setState({Power:this.State.Power})}},{key:"render",value:function(){var e=this,t=Array.from(p).map(function(t){return m.a.createElement("div",{className:"drum-pad",id:t.keyTrigger,key:t.keyTrigger,onClick:e.playSound},t.keyTrigger,m.a.createElement("audio",{src:t.url,className:"clip",id:t.keyTrigger,key:t.keyTigger,name:t.id}))}),a=Array.from(k).map(function(t){return m.a.createElement("div",{className:"drum-pad",id:t.keyTrigger,key:t.keyTrigger,onClick:e.playSound},t.keyTrigger,m.a.createElement("audio",{src:t.url,className:"clip",id:t.keyTrigger,key:t.keyTrigger,name:t.id}))});return m.a.createElement("div",{id:"drum-machine"},m.a.createElement("div",{id:"drum-container"},this.State.Bank?t:a),m.a.createElement("div",{id:"option-container"},m.a.createElement("p",{id:"display"},this.State.Caption),m.a.createElement("div",{id:"display"},m.a.createElement("p",null,"Bank"),m.a.createElement(f.a,{options:w,selectedOption:this.State.Bank,onSelectOption:this.toggleBank})),m.a.createElement("div",{id:"display"},m.a.createElement("p",null,"Power"),m.a.createElement(g.a,{value:this.State.Power,onToggle:this.togglePower}))))}}]),t}(m.a.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(C,null))}}]),t}(m.a.Component);l.a.render(m.a.createElement(S,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.aadf1d92.chunk.js.map