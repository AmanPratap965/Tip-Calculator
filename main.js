// alert("Welcome to Tip Calculator");


const billTotalInput=document.getElementById('billTotalInput');
const tipInput=document.getElementById('tipInput');
const numberOfPeople=document.getElementById('numberOfPeople');
const perPersonTotal=document.getElementById('perPersonTotal');

let peopleNumber=Number(numberOfPeople.innerText); 
const calculateBill=()=>{
        //sablse pehle bill nikalo 
        const bill=Number(billTotalInput.value);
        //fir tip input lelo
            let tip=Number(tipInput.value);
            //fir tip ko percent mein convert karo
            tip=tip/100;
        ///third==fir final total nikalo
                let totalBill=bill+(bill*tip);
        //fourth==output mein show karo
                    totalBill=totalBill/peopleNumber;
        perPersonTotal.textContent='$'+totalBill.toFixed(2);
}
const increasePeople=()=>{
        peopleNumber++;
        numberOfPeople.textContent=peopleNumber;
        //For everytime printing the new total amount per person
        calculateBill();
}
const decreasePeople=()=>{
    if(peopleNumber>1){
        peopleNumber--;
    }
    numberOfPeople.textContent=peopleNumber;
    calculateBill();
}