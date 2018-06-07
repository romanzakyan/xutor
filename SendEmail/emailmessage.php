<?php
   
   
   if(empty($_POST['name'])      ||
     empty($_POST['email'])     ||
     empty($_POST['subject'])     ||
     empty($_POST['message'])   ||
     !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
      echo "No arguments Provided!";
      return false;
   }
   $to = 'fermamamon@yandex.ru';
   $name = strip_tags(htmlspecialchars($_POST['name']));
   $email = strip_tags(htmlspecialchars($_POST['email']));
   $subject = strip_tags(htmlspecialchars($_POST['subject']));
   $text = strip_tags(htmlspecialchars($_POST['message']));
   $text .= "<br/>";
   if(!empty($_POST['product'])){
	   foreach($_POST['product'] as $key => $val){
		   $text .= "Продукт: ".strip_tags(htmlspecialchars($_POST['product'][$key]["value"]))."<br />";
		   $text .= "Вес: ".strip_tags(htmlspecialchars($_POST['number'][$key]["value"]))."КГ<br /><br />";
	   }
	   
   }
   $headers = "From: http://des-donskhoor.toolboxsoftware.tk/\n";
   $headers .= "Reply-To: $email\r\n";
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
   $message = '<p>Имя:'.$name.'</p>
                <table>
                    <tr>
                        <th>Почта:'.$email.'</th>
                    </tr>
                    <tr>
                        <td>Сообщение:<br>'.$text.'</td>
                    </tr>
                </table>';
   
   
   mail($to,$subject,$message,$headers);
   return true;
   
?>