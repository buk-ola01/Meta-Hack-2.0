function expenseGenerator() {
     const user = prompt("Enter a username");
     const welcomeMessage = `Welcome!, @${user}. Click OK to continue `;
     const displayHeading = document.querySelector(".display-message");
     if (user != "") {
          alert(welcomeMessage);
     }
     displayHeading.innerText = `User : ${user} Detailed Cost`;

     var cp = prompt("Enter Cost Price");
     var percentage = prompt("Enter Profit Percentage");
     var tool_cost = prompt("Enter Painting tool cost");
     var studio_cost = prompt("Enter Studio Cost");
     var additional_cost = prompt("Enter cost of additional stuffs");
     var advertisement_cost = prompt("Enter Ads cost");

     if (cp == null || cp == "") {
          return;
     }

     var display_cp = document.querySelector(".cost-price");
     display_cp.innerText = `$${cp}`;
     var display_perc = document.querySelector(".percentage");
     display_perc.innerText = `${percentage}%`;
     var display_tc = document.querySelector(".tool-cost");
     display_tc.innerText = `$${tool_cost}`;
     var display_sc = document.querySelector(".studio-cost");
     display_sc.innerText = `$${studio_cost}`;
     var display_ac = document.querySelector(".add-cost");
     display_ac.innerText = `$${additional_cost}`;
     var display_ads = document.querySelector(".ads-cost");
     display_ads.innerText = `$${advertisement_cost}`;
     cp = Number(cp);
     tool_cost = Number(tool_cost);
     studio_cost = Number(studio_cost);
     additional_cost = Number(additional_cost);
     mp = Number(mp);
     p = Number(p);
     pp = Number(pp);
     mp_per_item = Number(mp_per_item);
     var pp = cp + tool_cost + studio_cost + additional_cost;
     var mp, p;
     p = (pp * percentage) / 100;
     mp = cp + p;
     var mp_per_item;
     mp_per_item = mp / 100;

     var display_pp = document.querySelector(".pp");
     display_pp.innerText = `Product Price is : $${pp}`;
     var display_profit = document.querySelector(".profit");
     display_profit.innerText = `Profit is : ${p}`;
     var display_mp = document.querySelector(".mp");
     display_mp.innerText = `Marked Price is : $${mp}`;
     var display_mp_per_item = document.querySelector(".mp-per-item");
     display_mp_per_item.innerHTML = `Marked price per item is : $${mp_per_item}`;
}
