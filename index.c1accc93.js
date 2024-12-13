var e=document.querySelector("table"),t=e.querySelector("tbody"),a=["name","position","office","age","salary"],n=Array.from(t.rows).map(function(e){var t=Array.from(e.cells),n={};return t.forEach(function(e,t){n[a[t]]=e.textContent}),n});function r(){t.innerHTML="",n.forEach(function(e){var a=document.createElement("tr");Object.values(e).forEach(function(e){var t=document.createElement("td");t.textContent=e,a.appendChild(t)}),t.append(a)})}var o={name:!0,position:!0,office:!0,age:!0,salary:!0};e.addEventListener("click",function(t){t.target===e.tHead.rows[0].cells[0]&&(n.sort(function(e,t){return o.name?e.name.localeCompare(t.name):t.name.localeCompare(e.name)}),o.name=!o.name,r()),t.target===e.tHead.rows[0].cells[1]&&(n.sort(function(e,t){return o.position?e.position.localeCompare(t.position):t.position.localeCompare(e.position)}),o.position=!o.position,r()),t.target===e.tHead.rows[0].cells[2]&&(n.sort(function(e,t){return o.office?e.office.localeCompare(t.office):t.office.localeCompare(e.office)}),o.office=!o.office,r()),t.target===e.tHead.rows[0].cells[3]&&(n.sort(function(e,t){return o.age?e.age-t.age:t.age-e.age}),o.age=!o.age,r()),t.target===e.tHead.rows[0].cells[4]&&(n.sort(function(e,t){return o.salary?+e.salary.replace(/[$,]/g,"")-+t.salary.replace(/[$,]/g,""):+t.salary.replace(/[$,]/g,"")-+e.salary.replace(/[$,]/g,"")}),o.salary=!o.salary,r())}),t.addEventListener("click",function(e){var a=e.target.closest("tr");a&&(t.querySelectorAll("tr").forEach(function(e){e.classList.remove("active")}),a.classList.add("active"))});var l=document.createElement("form");l.className="new-employee-form";var i=document.createElement("input"),c=document.createElement("label");i.type="text",i.setAttribute("data-qa","name"),i.setAttribute("required",""),c.textContent="Name:",c.appendChild(i),l.append(c);var u=document.createElement("input"),s=document.createElement("label");u.type="text",u.setAttribute("data-qa","position"),u.setAttribute("required",""),s.textContent="Position:",s.appendChild(u),l.append(s);var d=document.createElement("select"),m=document.createElement("label");d.setAttribute("data-qa","office"),d.setAttribute("required",""),m.textContent="Office:",[{value:"Tokyo",text:"Tokyo"},{value:"Singapore",text:"Singapore"},{value:"London",text:"London"},{value:"New York",text:"New York"},{value:"Edinburgh",text:"Edinburgh"},{value:"San Francisco",text:"San Francisco"}].forEach(function(e){var t=document.createElement("option");t.value=e.value,t.textContent=e.text,d.append(t)}),m.appendChild(d),l.append(m);var p=document.createElement("input"),v=document.createElement("label");p.type="number",p.setAttribute("data-qa","age"),p.setAttribute("required",""),v.textContent="Age:",v.appendChild(p),l.append(v);var f=document.createElement("input"),g=document.createElement("label");f.type="number",f.setAttribute("data-qa","salary"),f.setAttribute("required",""),g.textContent="Salary:",g.appendChild(f),l.append(g);var C=document.createElement("button");C.type="submit",C.textContent="Save to table",l.append(C),document.body.append(l),C.addEventListener("click",function(e){e.preventDefault();var a=document.querySelector(".notification");a&&a.remove();var n=document.createElement("div");n.className="notification",n.setAttribute("data-qa","notification");var r=!0;if((i.value.trim().length<4||!/^[a-zA-Z\s]+$/.test(i.value))&&(r=!1,n.classList.add("error"),n.textContent="Error! Name value should have more than 4 letters!",document.body.append(n)),(p.value<18||p.value>90)&&(r=!1,n.classList.add("error"),n.textContent="Error! Age value should be more than 18 and less than 90",document.body.append(n)),!r){e.preventDefault();return}for(var o=document.createElement("tr"),l=0;l<=4;l++){var c=document.createElement("td");o.append(c)}o.cells[0].textContent=i.value,o.cells[1].textContent=u.value,o.cells[2].textContent=d.value,o.cells[3].textContent=p.value,o.cells[4].textContent=f.value.length<=3?"$"+f.value:"$"+f.value.slice(0,-3)+","+f.value.slice(-3),t.append(o),n.classList.add("success"),n.textContent="Congratulations! Your info has been successfully added!",document.body.append(n)}),t.addEventListener("dblclick",function(e){var a=t.querySelector(".editing");if(a){var n=a.querySelector("input");n&&(a.textContent=n.value),a.classList.remove("editing")}var r="TD"===e.target.tagName?e.target:null;if(r){var o=r.textContent;r.textContent="",r.classList.add("editing");var l=document.createElement("input");l.className="cell-input",l.value=o,r.append(l),l.addEventListener("blur",function(){if(""===l.value){r.textContent=o,r.classList.remove("editing");return}r.textContent=l.value,r.classList.remove("editing")}),l.addEventListener("keydown",function(e){if("Enter"===e.key){if(""===l.value){r.textContent=o,r.classList.remove("editing");return}r.textContent=l.value,r.classList.remove("editing")}})}});
//# sourceMappingURL=index.c1accc93.js.map
