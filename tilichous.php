<?php
ini_set("SMTP", "smtp.gmail.com");
ini_set("smtp_port", "587");
ini_set("sendmail_from", "benjamin.strabach@gmail.com");
// ini_set("sendmail_path", "\"D:\wamp64\sendmail\sendmail.exe\" -t");

 $FormLastName = $_POST['fLastName'];
 $FormFirstName = $_POST['fFirstName'];
 $FormTel = $_POST['fTel'];
 $FormMail = $_POST['fMail'];
 $FormText = $_POST['fText'];

echo $FormLastName, " ", $FormFirstName, " ", $FormTel, " ", $FormMail, " ", $FormText;

$list1 = [['Petit choux de blé noir garni',1,true],['Blini garni',1,true],['Mini-roulées de blé noir',15,true],['Tuiles',5,false],['Triskels au chocolat',3,false],['Truffes',6,false],['Meringues',3.5,false],['Kig ha farz',15,true],['Potée de pouldrezic (aux choux)',12,true],['Potée Guérandaise (fèves, lard, saucisses)',12,true],['Frigousse de bœuf',12,true],['Cotriade ou matelote',15,true],['Poulet au cidre',12,true],["Jambon à l'os (environ 30 pers.)","x",false],['Buffet de crêpes : peut-être accompagné de garnitures (sucre, confitures, ...)',"x",false]];
$list2 = [['1 galette blé noir_2 crêpes froment',12,true],['2 galette blé noir_2 crêpes froment',15,true],['Galettes blé noir à volonté_crêpes froment à volonté',20,true],['1 galette blé noir_1 crêpes froment',7,true],['Assortiment de lichouseries_2 galettes blé noir_Salade_2 crêpes froment',32,true]];
$list3 = [['Café, thé, jus de pommes ou raisins_Triskels au chocolat_Meringues',3.50,true],['Café, thé, jus de pommes ou raisins_Gâteau breton_Triskels au chocolat',4,true],['Café, thé, jus de pommes ou raisins_Gâteau breton_Triskels au chocolat_Crêpes roulées',6,true]];
$list4 = [['Cidre, vin blanc, jus de pommes_Assortiment de crêpes roulées salées',5,true],['Cidre, vin blanc, jus de raisins_Assortiment de lichouseries sucrées et salées',7,true]];
$productsList = [$list1,$list2,$list3,$list4];

$arr = array();
for ($i = 0; isset($_GET['arr' . $i]) ; $i++){
    $arr[i]= $_GET['arr' . $i];
}

$to = "benjamin.strabach@live.fr";

if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $to))
{
	$passage_ligne = "\r\n";
}
else
{
	$passage_ligne = "\n";
}

$boundary = "-----=".md5(rand());

$header = "From: \"BENJAMIN\"<benjamin.strabach@gmail.com>".$passage_ligne;
$header.= "Reply-to: \"BENJAMIN\" <benjamin.strabach@gmail.com>".$passage_ligne;
$header.= "MIME-Version: 1.0".$passage_ligne;
$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;


$subject = "test";
$message = "Coin";
$additional_headers = "From Ti-Lichous";

mail($to , $subject , $message, $header);

?>