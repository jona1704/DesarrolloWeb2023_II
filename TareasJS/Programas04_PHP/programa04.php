<style>
    table, tr, td{
        border: 1px solid black;
    }
</style>
<table cellpadding="3px" cellspacing="0px">
<?php
    for($i=0; $i<6; $i++){
        echo "<tr>";
        for($j=0; $j<5; $j++){
            echo "<td>".($i+1)."*".($j+1)."=".(($i+1) * ($j+1))."</td>";
        }
        echo "</tr>";
    }    
?>
</table>