


const calc = () => {
    let sub1 = document.getElementById('1').value;
    let sub2=document.getElementById('2').value;
    let sub3=document.getElementById('3').value;
    let sub4 = document.getElementById('4').value;
    let grade = "";

    let totalGrades = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4);
    // alert(totalGrades);

    let totalPercentage = totalGrades / 4 ;
    
    alert(totalPercentage+"%" )


    debugger;

    if ((totalPercentage <= 100) && (totalPercentage >= 70)) {
        // alert("You are in distinction")
        grade='A';
    }else if (totalPercentage <= 69 && totalPercentage >= 59) {
        // alert('first class')
        grade = "B";
    }
    else if (totalPercentage <= 59 && totalPercentage >= 49) {
        grade = "C";
    } else if (totalPercentage <= 49 && totalPercentage >= 40) {
        grade = "D";
    }  else  {
        grade = "F"
    }
    if (totalPercentage >= 39.5) {
        document.getElementById('final').innerHTML=`Your total marks are ${totalGrades} & percentage are ${totalPercentage}% Grade is ${grade} <br> You are Pass`

    }
    else {
        document.getElementById('final').innerHTML = `Your total marks are ${totalGrades} & percentage are ${totalPercentage} Grade is ${grade} <br> You are Fail`

    }
    





    

}