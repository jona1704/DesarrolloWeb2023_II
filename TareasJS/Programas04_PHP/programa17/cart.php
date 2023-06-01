<?php 
    session_start();

    if(!isset($_SESSION['cart'])){
        $_SESSION['cart'] = array();    
    }

    if(isset($_GET['empty'])){
        // Empty $SESSION['cart'] array
        unset($_SESSION['cart']);
        header('location: '. $_SERVER['PHP_SELF'].'?'.SID);
        exit();
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Shopping Cart</title>
        <style>
            table, tr, th, td{
                border: 1px solid black;
            }

            .right{
                text-align: right;
            }
        </style>
    </head>
    <body>
        <h1>Your Shopping Cart</h1>
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
                    $total = 0;
                    for($i=0; $i<count($_SESSION['cart']); $i++){
                        echo '<tr>';
                        echo '<td>'. $items[$_SESSION['cart'][$i]] .'</td>';
                        echo '<td class="right">$';
                        echo number_format($prices[$_SESSION['cart'][$i]], 2);
                        echo '</td>';
                        echo '</tr>';
                        $total = $total + $prices[$_SESSION['cart'][$i]];
                    }
                ?>
            </tbody>
            <tfoot>
                <tr>
                    <th class="right">Total: </th><br/>
                    <th class="right">$<?php echo number_format($total, 2); ?></th>
                </tr>
            </tfoot>
        </table>
        <p><a href="catalog.php">Continue Shopping</a> or 
            <a href="<?php echo $_SERVER['PHP_SELF']; ?>?empty=1">Empty your cart</a></p>
    </body>
</html>