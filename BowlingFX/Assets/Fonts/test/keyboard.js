   var Text: GUIText;
   var InitText: String = "Some text";
   #if UNITY_IPHONE || UNITY_ANDROID || UNITY_METRO || UNITY_WINRT || UNITY_WP8 || UNITY_BLACKBERRY
   private var keyboard : TouchScreenKeyboard ;
   #endif
   var memoryName: String;
   var max: int=12;
   var type: boolean;

function Start()
{
if(!PlayerPrefs.GetString("Player Name"))
{
 memoryName= "Player1";
 PlayerPrefs.SetString("Player Name", memoryName);
 }
 else
Text.text = PlayerPrefs.GetString("Player Name");
}
function Update()
{


        if (Application.platform == RuntimePlatform.Android || Application.platform == RuntimePlatform.IPhonePlayer)
        {
        #if UNITY_IPHONE || UNITY_ANDROID || UNITY_METRO || UNITY_WINRT || UNITY_WP8 || UNITY_BLACKBERRY
	        if (keyboard)
	        {  //TouchScreenKeyboard.hideInput =false;
	        	if(Text.text.Length>max)type=false;
				if(Text.text.Length<=max)type=true;
	        	InitText = ""+keyboard.text;
	           	Text.text = InitText;
	           	if(Text.text.Length>max) keyboard.text = InitText.Substring(0, max);
	         }
	         if (keyboard.done) PlayerPrefs.SetString("Player Name", Text.text);

	       #endif	      
}
   	else  if (Application.platform != RuntimePlatform.Android || Application.platform != RuntimePlatform.IPhonePlayer)
        		{
        		if(Text.text.Length>max)type=false;
				if(Text.text.Length<=max)type=true;
        		
        		    for (var c : char in Input.inputString) {
            // Backspace - Remove the last character
            if (c == "\b"[0]) {
                if (Text.text.Length != 0)
                    Text.text = Text.text.Substring(0, Text.text.Length - 1);
            }
            // End of entry
            else if (c == "\n"[0] || c == "\r"[0] ) {// "\n" for Mac, "\r" for windows.
                print ("User enter his name: " + Text.text);
                PlayerPrefs.SetString("Player Name", Text.text);
               
            }
            // Normal text input - just append to the end
            else if(type)	{
                Text.text += c;
                 
            		}
        
        	}
        		}
}
        function OnMouseDown()
        {
        #if UNITY_IPHONE || UNITY_ANDROID
         if (Application.platform == RuntimePlatform.Android || Application.platform == RuntimePlatform.IPhonePlayer)
        {
        keyboard = TouchScreenKeyboard.Open(InitText, TouchScreenKeyboardType.NamePhonePad);
        
        }
         #endif	 
        }
