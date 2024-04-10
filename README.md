<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>NITROGEN</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			margin: 0;
			background-color: #f0f0f0;
		}
		h1 {
			font-size: 50px;
			text-transform: uppercase;
			text-align: center;
			margin: 0;
		}
	</style>
</head>
<body>
	<h1 id="rainbowText">Rainbow Text</h1>

	<script>
		const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
		const rainbowText = document.getElementById('rainbowText');
		let index = 0;

		setInterval(() => {
			rainbowText.style.color = colors[index];
			index = (index + 1) % colors.length;
		}, 500);
	</script>
</body>
</html>
