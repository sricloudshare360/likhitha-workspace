<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
</head>
<body>

    <h2>Simple Calculator</h2>

    <p>First Number: <input id="num1"></p>
    <p>Second Number: <input id="num2"></p>

    <button onclick="add()">Add</button>
    <button onclick="subtract()">Subtract</button>
    <button onclick="multiply()">Multiply</button>
    <button onclick="divide()">Divide</button>

    <p id="result">Result: </p>

    <script>
        function add() {
            let a = Number(document.getElementById("num1").value);
            let b = Number(document.getElementById("num2").value);
            document.getElementById("result").innerText = "Result: " + (a + b);
        }

        function subtract() {
            let a = Number(document.getElementById("num1").value);
            let b = Number(document.getElementById("num2").value);
            document.getElementById("result").innerText = "Result: " + (a - b);
        }

        function multiply() {
            let a = Number(document.getElementById("num1").value);
            let b = Number(document.getElementById("num2").value);
            document.getElementById("result").innerText = "Result: " + (a * b);
        }

        function divide() {
            let a = Number(document.getElementById("num1").value);
            let b = Number(document.getElementById("num2").value);
            document.getElementById("result").innerText = "Result: " + (a / b);
        }
    </script>

</body>
</html>
