<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="remember.php" method="post" style="border: 2px dotted blue; text-align:center; width: 400px;">
	    <p>Username: <input name="username" type="text" value="<?php if(isset($_COOKIE["username"])) { echo $_COOKIE["username"]; } ?>" class="input-field"></p>
        <p>Password: <input name="password" type="password" value="<?php if(isset($_COOKIE["password"])) { echo $_COOKIE["password"]; } ?>" class="input-field"></p>
	    <p><input type="checkbox" name="remember" /> Remember me</p>
	    <p><input type="submit" value="Login"></span></p>
    </form>                                                                                               
</body>
</html>