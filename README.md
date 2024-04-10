<html>
<head>
 <title>Rainbow Text</title>
</head>
<body>
 <h1 id="rainbowText">Rainbow Text</h1>

 <script>
 const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 let index = 0;

 const rainbowTextElement = document.getElementById('rainbowText');

 setInterval(() => {
 rainbowTextElement.style.color = colors[index];
 index = (index + 1) % colors.length;
 }, 500);
 </script>
</body>
</html>
