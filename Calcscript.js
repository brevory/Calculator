//Global variables
var prevCalc = 0;
var calc = "";

window.onload = function () {
    document.getElementById("btn1").onclick = showNum;
    document.getElementById("btn2").onclick = showNum;
    document.getElementById("btn3").onclick = showNum;
    document.getElementById("btnPlus").onclick = add;
    document.getElementById("btn4").onclick = showNum;
    document.getElementById("btn5").onclick = showNum;
    document.getElementById("btn6").onclick = showNum;
    document.getElementById("btnMinus").onclick = subtract;
    document.getElementById("btn7").onclick = showNum;
    document.getElementById("btn8").onclick = showNum;
    document.getElementById("btn9").onclick = showNum;
    document.getElementById("btnTimes").onclick = multiply;
    document.getElementById("btn0").onclick = showNum;
    document.getElementById("btnPow").onclick = power;
    document.getElementById("btnPow2").onclick = power2;
    document.getElementById("btnDivide").onclick = divide;
    document.getElementById("btnDecrement").onclick = decrement;
    document.getElementById("btnIncrement").onclick = increment;
    document.getElementById("btnSqrt").onclick = sqrt;
    document.getElementById("btnFloor").onclick = floor;
    document.getElementById("btnRound").onclick = round;
    document.getElementById("btnDecimal").onclick = showNum;
    document.getElementById("btnReset").onclick = clear;
    document.getElementById("btnCalc").onclick = calculate;
}

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum() {
    document.frmCalc.txtNumber.value += this.value;
}

function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            document.frmCalc.txtNumber.value = Math.floor(num);
        }
}

function power2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            document.frmCalc.txtNumber.value = Math.pow(num, 2);
        }
}

function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Power";
        }
}

function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Divide";
        }
}

function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            document.frmCalc.txtNumber.value = Math.round(num);
        }
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}

function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtNumber.value = num;
        }
}

function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.sqrt(num)
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "Add" button is clicked.      
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Multiply";
        }
}

//The following function is called when "Calculate" button is clicked.       
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Subtract"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Multiply"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Divide"){
                var total = prevCalc/num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Power"){
                var total = Math.pow(prevCalc, num);
                document.frmCalc.txtNumber.value = total;
            }
        
}}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Subtract";
        }
}