<?php			
$TOKEN = '1043695223:AAElVPOC_e45MmYz2q-wZCe-UnKmStzj8P8'; //ваше токен, получен в BotFather			
$BOT_USERNAME = 'econONbot'; // юзернейм бота (без собачки)			
$webhook = 'https://econonbot.000webhostapp.com/econonbot.php'; //ваша ссылка			
			
$url = 'https://api.telegram.org/bot'.$TOKEN.'/';			
			
			
if (($json = valid()) == false) { echo get($url.'setWebhook?url='.$webhook); exit();}			
 			
$uid = $json['message']['from']['id'];			
$first_name = $json['message']['from']['first_name'];			
$ANSWER = "Здарова ".$first_name.". Твой АйДи на данный момент: ".$uid;			
sendMessage($uid,$ANSWER);			
			
			
function valid() {			
	$request_from_telegram = false;		
	if(isset($_POST)) {		
		$data = file_get_contents("php://input");	
		if (json_decode($data) != null)	
			$request_from_telegram = json_decode($data,1);
	}		
	return $request_from_telegram;		
}			
			
			
function sendMessage($chat_id,$text,$markup=null)			
{			
	return get($GLOBALS['url'].'sendMessage?chat_id='.$chat_id.'&text='.urlencode($text).'&reply_markup='.$markup.'&parse_mode=Markdown');		
}			
			
function get($url)			
{			
	$ch = curl_init($url);		
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);		
	curl_setopt($ch, CURLOPT_HEADER, 0);		
	$data = curl_exec($ch);		
	curl_close($ch);		
	return $data;		
}			
			
?>			
