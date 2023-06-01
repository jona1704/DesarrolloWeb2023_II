<form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
    <input type="text" name="numero1">
    <input type="text" name="numero2">
    <select name="operacion">
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="mutiplicacion">Multiplicacion</option>
        <option value="division">Division</option>
    </select>
    <input type="submit" name="enviar" value="ENVIAR">
</form>
<?php 
    if(isset($_POST['enviar'])){
        $numero1 = intval($_POST['numero1']);
        $numero2 = intval($_POST['numero2']);
        $operacion = $_POST['operacion'];
        if($operacion == "sumar"){
            echo $numero1 + $numero2;
        } else if($operacion == "resta"){
            echo $numero1 - $numero2;
        } else if($operacion == "mutiplicacion"){
            echo $numero1 * $numero2;
        } else if($operacion == "division" && $numero2 == 0){
            echo "Division entre cero";
        } else{
            echo $numero1 / $numero2;
        }
   } 
?>