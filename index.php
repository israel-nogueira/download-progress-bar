<!DOCTYPE html>
<html lang="en">
<head>
  <title>Download com barra de progresso</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <script src="./assets/js/download.function.js"></script>
</head>
<body>

<div class="container">
  <h2>Download com barra de progresso:</h2> 
  <button class="btn btn-success float-left" onclick="myFunction()" >Fazer download</button>
  <div class="progress" style="margin: 20px!important;margin-left: 150px!important;">
    <div class="progress-bar bg-success" style="width:0%;">70%</div>
  </div>

</div>
<script type="text/javascript">
	function myFunction(){
		downloadFile({
			typeSend: "GET",
			file: './file.test',
			newfile: 'file.test',
			abort: function() {console.log('abort');},
			error: function() {console.log('error');},
			load: function() {console.log('load');},
			finish: function() {console.log('finish');},
			progress: function(e) {
				console.log(e+'%')
				$('.progress-bar').css({width:e+'%'}).text(e+'%')
			}
		});
	} 
</script>

</body>


