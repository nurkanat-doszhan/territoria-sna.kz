<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы

session_start();

$name = $_POST['name']; 
$phone = $_POST['tel'];
$model = $_POST['model'];
$price = $_POST['price'];
$size = $_POST['size'];
$promo = $_POST['promo'];
$discount = $_POST['discount'];

//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5968614491:AAGuricw2cXRvqMs5mpr9Vsj61vKy65RNO0";
// "1217377519:AAG7lhrJOJ08VbHbTRr3WSaNU2GG2XAE7kA";

//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "523577669";
$chat_id2 = "-836547214";

//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Город: ' => 'Караганда',
  'Имя пользователя: ' => $name, 
  'Телефон: ' => $phone,
  'Выбранная модель:' => $model,
  'Цена:' => $price,
  'Размер:' => $size,
  'Розыгрыш:' => $promo,
  'Скидка:' => $discount,
);

//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

//https://api.telegram.org/bot1129916003:AAFH_HPyR8XzSNxV90mbEAOpNHSEeXfPQDk/sendMessage?chat_id=400819150&parse_mode=html&text=sfsdfsf

//Осуществляется отправка данных в переменной $sendToTelegram
// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// $url = $GLOBALS["website"]."/sendMessage?chat_id=".$chat_id."&text=".urlencode($msg);
header("Location: https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id2}&parse_mode=html&text={$txt}");


//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if (5==3) {
  echo "Thank you";
} else {
  echo "Error";
}
?>