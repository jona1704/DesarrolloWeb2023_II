<?php 
    session_start();

    if(!isset($_SESSION['cart'])){
        $_SESSION['cart'] = array();    
    }

    if(isset($_GET['buy'])){
        // Add item to the end of the $SESSION['cart'] array
        $_SESSION['cart'][] = $_GET['buy'];
        header('location: '. $_SERVER['PHP_SELF'].'?'.SID);
        exit();
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <style>
            table, tr, th, td{
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <p>Your shopping cart contains <?php echo count($_SESSION['cart']); ?> items.</p>
        <p><a href="cart.php">View your cart</a></p>
        <?php 
            $items = array(
                'Canadian-Australian Dictionary',
                'As-new parachute (never opened)',
                'Songs of the Goldfish (2CD Set)',
                'Ending PHP4 (0\'Wroxey Press)');
            $prices = array(24.95, 1000, 19.99, 34.95);
        ?>
        <table>
            <thead>
                <tr>
                    <th>Item Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <?php 
                    for($i=0; $i<count($items); $i++){
                        echo '<tr>';
                        echo '<td>'. $items[$i] .'</td>';
                        echo '<td>$'.number_format($prices[$i], 2).'</td>';
                        echo '<td><a href="'.$_SERVER['PHP_SELF'].'?buy='.$i.'">Buy</a></td>';
                        echo '</tr>';
                    }
                ?>
            </tbody>
        </table>
        <p>All prices are in imaginary dollars</p>
    </body>
</html>
