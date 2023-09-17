https://ankitpal7066.github.io/06TestTextSpeech/                           

HTML Elements and Variables:
The code first selects several HTML elements using document.getElementById and document.querySelector and stores them in variables for easy access later. These elements include the main container (main), voice selection dropdown (voicesSelect), text input (textarea), and various buttons (readButton, toggleButton, and closeButton).


Data Array:
The data array holds objects representing items that users can click on to trigger speech synthesis. Each object contains an image property (representing an image URL) and a text property (representing the text to be spoken).


createBox Function:
The createBox function is defined to create a visual representation (box) for each item in the data array.
It creates a div element with the class "box" that contains an img element for the item's image and a p element for the item's text.
An event listener is added to each box so that when it's clicked, it triggers speech synthesis using the handleSpeech function.


Voices Array and getVoices Function:
The voices array is initially empty and will be used to store available speech synthesis voices.
The getVoices function is defined to retrieve available voices using speechSynthesis.getVoices(). It populates the voicesSelect dropdown with voice options.


handleSpeech Function:
The handleSpeech function is called when a box representing an item is clicked.
It takes the text and the clicked box as parameters.
It sets the text message for speech synthesis using the setTextMessage function.
It triggers speech synthesis using the speakText function.
It adds the "active" class to the clicked box to create a visual effect and removes it after a delay.


message Object and setTextMessage/speakText Functions:
The message object is created using SpeechSynthesisUtterance. It represents the text and voice settings for speech synthesis.
The setTextMessage function sets the text message for speech synthesis.
The speakText function triggers speech synthesis using the speechSynthesis.speak method with the message object.


setVoice Function:
The setVoice function is called when the user selects a different voice from the voicesSelect dropdown.
It sets the voice for the message object based on the selected voice name from the dropdown.


Event Listeners:
Event listeners are added to various elements:
The "Toggle Textbox" button toggles the visibility of the text input box.
The "Close" button hides the text input box.
The "voiceschanged" event triggers the getVoices function when speech synthesis voices change.
The voicesSelect dropdown triggers the setVoice function when a voice is selected.
The "Read Text" button reads the text from the textarea using speech synthesis.


Initial Population of Voices:
The getVoices function is initially called to populate the voice options dropdown with available voices.
