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
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",

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
	{youtube: "qJlbPXZEpRE", name: "Atlas - Installation Music"},
	{youtube: "KDuU3bzMZhY", name: "Nations - Installation Music"},
        {youtube: "i5chHfK6sCc", name: "Nations - Installation Music"},
        {youtube: "", name: "Nations - Installation Music"},
        {youtube: "", name: "Nations - Installation Music"},
        {youtube: "hEcjgJSqSRU", name: "Nations - Installation Music"},
        {youtube: "", name: "Nations - Installation Music"},
        {youtube: "RV5WqRnFejI", name: "Nations - Installation Music"},
        {youtube: "PGu54V6QuaY", name: "Nations - Installation Music"},

];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 10;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"You are not to switch classes in front of other players. Should you need to switch, go to bunks or an empty room and switch!",
	"If you are being removed from a regiment, the CO must provide ample reasoning about the Removal!",
	"Jedi takes priority in Sith fights/Lightsaber duels. Clones should NOT fire when a Sith and Jedi are Fighting!",
        "Do not disconnect, suicide, change jobs, change names, etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "NEVER hurt a brother in any way. Never shoot or handcuff another clone trooper, Unless given orders from a commander you may cuff a “rogue” clone!",
        "An individual may opt out of an event if they do not wish to participate, but may not actively attempt to stop the event outside of roleplay. No one can be forced to sit out of an event!",
        "All donations are subject to all regular server rules, donations will in no way grant any form of immunity against punishment and can be retracted if the transgressions have been sufficiently deemed as requiring such!", 
        "Jedi that are listed as Officers within their linked battalion have All the privileges of  an officer. This includes claiming rooms, accessing AOS Areas, giving PTS, etc!",
        "No RDM [Random Death Match]: The act of killing or attempting to kill a player with no roleplay reasoning behind said act!",
        "Never assault an innocent/ally. If attacked you may defend yourself. NOTE: You must be DAMAGED! (not just blinded/pushed) in order to defend yourself!",
        "Please Don't be a dick to people. Being an 'edgy cool teenager' won't get you far on this server. You will be banned. Toxicity is not tolerated!",
        "Mingeing means purposefully harming the roleplay of the server, breaking or attempting to break the server's rules in any way and generally acting like an idiot!",
        "Neutral jobs have only open comms. In addition to that maintenance droids, medical droids and bounty hunters working for the republic have secured comms  It is FailRP to ‘steal’ comms unless the staff has granted Permission!",
        "You need to listen to people that are higher rank than you. If that person is abusing their rank, let a staff member know!",
        "Donations can not be refunded, swapped or exchanged unless with explicit circumstances and discussion with the executive members of the staff team, such situations (an unforeseen issue has appeared with the product, such as a broken model!",
        "Cheating will result in an automatic or manual permanent ban. This includes abusing Gmod/source exploits with client-side scripts and convars!",
        "You must follow all Jedi Guidelines and Rules within the Jedi Order!",
        "The use of force abilities on the Venator / Base Maps is prohibited unless in training, this rule is voided if in combat or DEFCON is at III or Lower!",
        "Under no circumstances may a Jedi use a gun/grenades/stim kits. Lightsaber and Knives/fists Only!",
        "Follow all in-game guidelines, such as rules set by CG or RHC!",
        "You are not to switch classes in front of other players. Should you need to switch, go to bunks or an empty room and switch!",
        "Certain Fleet Ranks can demote and promote anyone except Jedi and only Jedi. Inform a troopers commander about a demotion or promotion every time!",
        "Regimental higher-ups may hand out regimental discords however it is not a requirement for players to join them. Any discord relating to MVG which is handed out in-game to players i.e - regimental discords, must abide by MVG’s rules!",
        "You may only recruit a maximum of three troopers in a public tryout and one in a private tryout!",
        "Switching of Bodygroups should be Treated the same as Switching jobs!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
