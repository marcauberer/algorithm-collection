<?php
    $data = '01100000100';
    $redundant = calcRedundantBits($data);
    echo $redundant;
    echo decode($data, $redundant);
    exit;

    // --------------------- Helper functions ---------------------

    function calcRedundantBits($data) {
        $length=strlen($data);
        for($j = 0; $j < $length; $j++) {
            if(pow(2,$j) >= $length + $j + 1) return $j;
        }
    }

    function decode($data, $r) {
        $length = strlen($data);
        $res = "Data: ";
        $i = $r - 1;
        
        for($j = 0; $j < $length; $j++) {
            $pos = $length - $j;
            if ($pos == pow(2, $i)) {
                $i--;
            } else {
                $res .= strval($data[$j]);
            }
        }
        return $res;
    }
?>