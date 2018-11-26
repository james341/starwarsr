/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",

];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "MMD9n-YZ93o", name: "Atlas Gaming - Installation Music"},
	{youtube: "MMD9n-YZ93o", name: "Atlas Gaming - Installation Music"},
        {youtube: "MMD9n-YZ93o", name: "Atlas Gaming - Installation Music"},
        {youtube: "MMD9n-YZ93o", name: "Atlas Gaming - Installation Music"},
        {youtube: "MMD9n-YZ93o", name: "Atlas Gaming - Installation Music"},
        {youtube: "MMD9n-YZ93o", name: "Atlas Gaming - Installation Music"},
        {youtube: "MMD9n-YZ93o", name: "Atlas Gaming - Installation Music"},
        {youtube: "MMD9n-YZ93o", name: "Atlas Gaming - Installation Music"},
        {youtube: "MMD9n-YZ93o", name: "Atlas Gaming - Installation Music"},

];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"If you have a suggestion for the server or if you believe there is something to improve on, create a thread on the forums!",
	"Do not spam. Spam: Excessively typing/saying/doing something repeatedly in quick succession!",
	"In game currency may not be sold or traded for real life items, currency or credits!",
        "Do not disconnect, suicide, change jobs, change names, etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "Clones are not to enter AOS areas without the correct rank, doing so can result in an arrest by CG!",
        "Naval cannot bail themselves out of jail, or order someone to bail them out of jail!",
        "Do not FailRP (Fail Role Play). This is when you do something unrealistic!", 
        "Jedi that are listed as officers within their linked battalion have all the privileges of  an officer. This includes claiming rooms, accessing AOS Areas, giving PTS, etc!",
        "You may opt out of being in an event but you MUST not get in the way of the event, as well you cannot use any authority you have to tell others they cannot participate just because you don't wish to!",
        "Never assault an innocent/ally. If attacked you may defend yourself. NOTE: You must be DAMAGED! (not just blinded/pushed) in order to defend yourself!",
        "Please Don't be a dick to people. Being an 'edgy cool teenager' won't get you far on this server. You will be banned. Toxicity is not tolerated!",
        "Do as the staff say. If you are speaking over the admin this is considered disrespect. You will be punished!",
        "If you are told to stop, you stop. Make an appeal or report if you disagree with a decision!",
        "You need to listen to people that are higher rank than you. If that person is abusing their rank, let a staff member know!",
        "Do not involve yourself in situations especially admin situations which you are not apart of in the first place!",
        "Cheating will result in an automatic or manual permanent ban. This includes abusing Gmod/source exploits with client-side scripts and convars!",
        "You need to listen to people that are higher rank than you. If that person is abusing their rank, let a staff member know!",
        "We are a serious RP server. Consider being serious at all times but understand there may also be times when the server relaxes!",
        "Under no circumstances may a Jedi use a gun/grenades/stim kits. Lightsaber and Knives/fists Only!",
        "Don't ask for a staff position. Post an application on the forums if you feel you are a good candidate for admin, and do not pester us about your application!",
        "If you are a clone recruit you MUST not leave spawn unless you are being trained!",
        "Disgusting or Shock Content will result in bans (determined by content!",
        "Cheating will result in an automatic or manual permanent ban. This includes abusing Gmod/source exploits with client-side scripts and convars!",
        "Friendly banter is fine, but must stop if it's going to far or the other person doesn't like it!",
        "Do not threaten other players. You will be permanently removed if caught threatening a player!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
