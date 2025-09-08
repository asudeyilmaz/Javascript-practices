/* 
1-para görüntüleme
2- para yatırma
3- para çekme
4-çıkış
*/

let money = 1000;
const newLine = "\r\n";

let selected = prompt("1- Show money" + newLine + "2-Add money" + newLine + "3-Get money" +newLine + "4-Exit"
	+ newLine + "Please select a value: ");	

	switch (selected){
		case "1" :
			alert("Your money: " + money);
			break;

		case "2":
			let currentMoney = money + Number(prompt("Enter the amount to be added:"));
			alert("your current money: " + currentMoney);
			break;

		case "3":
			let amountReceived = Number(prompt("Enter the amount to be purchased: "));
			if(amountReceived < money) {
				money -= amountReceived;
				alert("Remaining amount: " + money);
			}else {
				alert("You can't get more than your money's worth!!" + newLine + "Your money: "+ money);
			}

		    break;
		case "4":
			alert("You logged out of the system.");
			break;	
		default:
			alert("Please enter a value between 1 and 4");
			break;
	}
