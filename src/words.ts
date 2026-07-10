import { DailyPuzzle, ChallengePuzzle } from './types';

// Curated daily Biblical puzzles
export const DAILY_PUZZLES: DailyPuzzle[] = [
  {
    word: 'GRACE',
    verse: 'Ephesians 2:8',
    text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.',
    reflection: 'Grace is God’s unmerited favor. We did not earn it, yet He gives it freely. Reflect today on how receiving His grace transforms your relationship with Him and others.',
    category: 'Doctrine'
  },
  {
    word: 'FAITH',
    verse: 'Hebrews 11:1',
    text: 'Now faith is the assurance of things hoped for, the conviction of things not seen.',
    reflection: 'Faith is the anchor of the Christian life. It enables us to walk with confidence, trusting in God’s unseen hand and unshakeable promises.',
    category: 'Concept'
  },
  {
    word: 'JESUS',
    verse: 'Matthew 1:21',
    text: 'She will bear a son, and you shall call his name Jesus, for he will save his people from their sins.',
    reflection: 'The name Jesus (Yeshua) means "The Lord Saves". He is our Messiah, our Savior, and our Lord. Call upon His name today with gratitude for the salvation He has secured.',
    category: 'Person'
  },
  {
    word: 'MERCY',
    verse: 'Hebrews 4:16',
    text: 'Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.',
    reflection: 'Mercy is God not giving us what we deserve. Instead, He offers us forgiveness and opens His doors wide so we can enter His holy presence with boldness.',
    category: 'Concept'
  },
  {
    word: 'BIBLE',
    verse: '2 Timothy 3:16',
    text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.',
    reflection: 'The Word of God is alive, active, and inspired. Make it your compass, letting it shape your steps, correct your course, and ground you in eternal truth.',
    category: 'Object'
  },
  {
    word: 'LIGHT',
    verse: 'Matthew 5:14',
    text: 'You are the light of the world. A city set on a hill cannot be hidden.',
    reflection: 'In a world often darkened by fear and despair, your calling is to radiate Christ’s love, joy, and truth. Let your light shine brightly for others to see.',
    category: 'Concept'
  },
  {
    word: 'CROSS',
    verse: 'Galatians 6:14',
    text: 'But far be it from me to boast except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world.',
    reflection: 'The cross, once a symbol of shame, became the ultimate altar of grace and redemption. It is the core of our hope and the supreme declaration of God’s love.',
    category: 'Object'
  },
  {
    word: 'PEACE',
    verse: 'Philippians 4:7',
    text: 'And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.',
    reflection: 'God’s peace is not the absence of trouble, but the presence of the Lord in the midst of it. Rest in His comforting presence today, knowing He holds all things.',
    category: 'Concept'
  },
  {
    word: 'GLORY',
    verse: 'Romans 3:23',
    text: 'For all have sinned and fall short of the glory of God.',
    reflection: 'Though we fell short of His standard, Jesus restores us to share in His presence and display His character. Live today in a way that points all credit to Him.',
    category: 'Concept'
  },
  {
    word: 'TRUST',
    verse: 'Proverbs 3:5',
    text: 'Trust in the Lord with all your heart, and do not lean on your own understanding.',
    reflection: 'Leaning on our own understanding brings anxiety. Surrendering our understanding to God’s perfect wisdom brings absolute peace and direction.',
    category: 'Concept'
  },
  {
    word: 'MOSES',
    verse: 'Hebrews 11:24',
    text: 'By faith Moses, when he was grown up, refused to be called the son of Pharaoh’s daughter.',
    reflection: 'Moses chose the suffering of God’s people over the temporary pleasures of Egypt. True faith is willing to compromise worldly prestige to fulfill God’s divine purpose.',
    category: 'Person'
  },
  {
    word: 'DAVID',
    verse: '1 Samuel 16:13',
    text: 'Then Samuel took the horn of oil and anointed him in the midst of his brothers. And the Spirit of the Lord rushed upon David from that day forward.',
    reflection: 'David was chosen not for his outward appearance, but for his heart. God looks beyond our surface to find a heart willing to seek after Him entirely.',
    category: 'Person'
  },
  {
    word: 'ANGEL',
    verse: 'Luke 2:10',
    text: 'And the angel said to them, "Fear not, for behold, I bring you good news of great joy that will be for all the people."',
    reflection: 'Angels are God’s messengers, sent to declare His wonders, protect His saints, and minister His grace. Be encouraged today that God has His heavenly hosts watching over you.',
    category: 'Person'
  },
  {
    word: 'ALTAR',
    verse: 'Hebrews 13:10',
    text: 'We have an altar from which those who serve the tent have no right to eat.',
    reflection: 'In the Old Covenant, the altar was a place of constant animal sacrifice. In the New Covenant, Jesus became our single, eternal altar where grace is served.',
    category: 'Object'
  },
  {
    word: 'SHEEP',
    verse: 'Psalm 23:1',
    text: 'The Lord is my shepherd; I shall not want.',
    reflection: 'We are sheep prone to wander, but we have a Good Shepherd who guides us to green pastures, protects us from danger, and goes after us when we are lost.',
    category: 'Concept'
  },
  {
    word: 'CROWN',
    verse: 'James 1:12',
    text: 'Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him.',
    reflection: 'Your earthly trials are not in vain. Every storm you endure builds a testimony and points toward an eternal, unfading crown of life with your Creator.',
    category: 'Object'
  },
  {
    word: 'STONE',
    verse: '1 Peter 2:4',
    text: 'As you come to him, a living stone rejected by men but in the sight of God chosen and precious...',
    reflection: 'Jesus is the Chief Cornerstone of our lives. Though rejected by the world, He is the foundation upon which we are built up as a spiritual temple.',
    category: 'Object'
  },
  {
    word: 'WATER',
    verse: 'John 4:14',
    text: 'But whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life.',
    reflection: 'The world offers temporary satisfyings that leave us dry. Jesus offers Living Water—His Holy Spirit—which continuously refreshes and satisfies from within.',
    category: 'Concept'
  },
  {
    word: 'BREAD',
    verse: 'John 6:35',
    text: 'Jesus said to them, "I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst."',
    reflection: 'Just as our physical bodies require bread to sustain life, our spirits require Jesus. Feed on His word and abide in His presence daily for ultimate spiritual nutrition.',
    category: 'Object'
  },
  {
    word: 'HEART',
    verse: 'Proverbs 4:23',
    text: 'Keep your heart with all vigilance, for from it flow the springs of life.',
    reflection: 'The heart is the control center of our desires, choices, and character. Guard it from bitterness, pride, and sin, and fill it with God’s truth instead.',
    category: 'Concept'
  },
  {
    word: 'POWER',
    verse: 'Acts 1:8',
    text: 'But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.',
    reflection: 'We are not left to live the Christian walk in our own strength. The Holy Spirit equips us with supernatural power to speak His truth and serve His kingdom.',
    category: 'Concept'
  },
  {
    word: 'TRUTH',
    verse: 'John 14:6',
    text: 'Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me."',
    reflection: 'In a world that treats truth as relative, Jesus stands as the absolute Truth. Ground yourself in His character and words, finding anchor in a changing world.',
    category: 'Concept'
  },
  {
    word: 'SOWER',
    verse: 'Matthew 13:3',
    text: 'And he told them many things in parables, saying: "A sower went out to sow."',
    reflection: 'The seed is the Word of God, and our hearts are the soil. Cultivate a soft, fertile heart today so that God’s Word can take deep root and yield a rich harvest.',
    category: 'Person'
  },
  {
    word: 'FRUIT',
    verse: 'Galatians 5:22',
    text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness...',
    reflection: 'The fruit of the Spirit is the natural outflow of abiding in Christ. Yield your desires to the Spirit today and watch Him cultivate beautiful, godly attributes in you.',
    category: 'Concept'
  },
  {
    word: 'BLOOD',
    verse: '1 John 1:7',
    text: 'But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin.',
    reflection: 'The blood of Jesus does not just cover our sins; it washes them completely clean. Celebrate the freedom, righteousness, and pure standing you have in Christ.',
    category: 'Concept'
  },
  {
    word: 'ALIVE',
    verse: 'Romans 6:11',
    text: 'So you also must consider yourselves dead to sin and alive to God in Christ Jesus.',
    reflection: 'You are no longer enslaved to your old mistakes. Through Christ, you have been raised to a completely new life—vibrant, purposeful, and fully alive to Him.',
    category: 'Concept'
  },
  {
    word: 'RISEN',
    verse: 'Matthew 28:6',
    text: 'He is not here, for he has risen, as he said. Come, see the place where he lay.',
    reflection: 'The empty tomb is the cornerstone of our faith! Because Jesus conquered death and is alive, we are assured of our own resurrection and eternal victory.',
    category: 'Concept'
  },
  {
    word: 'SINAI',
    verse: 'Exodus 19:2',
    text: 'They set out from Rephidim and came into the wilderness of Sinai, and they encamped in the wilderness. There Israel encamped before the mountain.',
    reflection: 'Mount Sinai is where God descended in fire to give the Ten Commandments. It represents the holiness of God’s law, which points us to our need for a Savior.',
    category: 'Place'
  },
  {
    word: 'EGYPT',
    verse: 'Exodus 12:51',
    text: 'And on that very day the Lord brought the people of Israel out of the land of Egypt by their hosts.',
    reflection: 'Egypt is often a biblical symbol of slavery and the old life. Just as God delivered Israel from Egypt, He has delivered us from the captivity of sin into His freedom.',
    category: 'Place'
  },
  {
    word: 'SODOM',
    verse: 'Genesis 19:24',
    text: 'Then the Lord rained on Sodom and Gomorrah sulfur and fire from the Lord out of heaven.',
    reflection: 'Sodom is a historical reminder of God’s absolute justice and holiness. He does not ignore wickedness, but He always provides a way of deliverance for the righteous.',
    category: 'Place'
  },
  {
    word: 'BABEL',
    verse: 'Genesis 11:9',
    text: 'Therefore its name was called Babel, because there the Lord confused the language of all the earth. And from there the Lord dispersed them over the face of all the earth.',
    reflection: 'The Tower of Babel represents man’s prideful attempt to reach heaven on their own terms. True communion with heaven comes not through self-exaltation, but humble surrender to Christ.',
    category: 'Place'
  },
  {
    word: 'SYRIA',
    verse: 'Judges 10:6',
    text: 'The people of Israel again did what was evil in the sight of the Lord and served the Baals and the Ashtaroth, the gods of Syria...',
    reflection: 'Biblical Syria represents neighbors and nations that challenged or interacted with Israel. It reminds us to guard our hearts against adopting the worldly influences around us.',
    category: 'Place'
  },
  {
    word: 'SIDON',
    verse: 'Genesis 10:15',
    text: 'Canaan fathered Sidon his firstborn and Heth...',
    reflection: 'Sidon was an ancient Phoenician port city on the Mediterranean. It is a reminder of God’s global plan; Jesus visited this region and commended the faith of its residents.',
    category: 'Place'
  },
  {
    word: 'JUDEA',
    verse: 'Matthew 2:1',
    text: 'Now after Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the east came to Jerusalem...',
    reflection: 'Judea is the mountainous southern region of the land of Israel, home to Jerusalem and Bethlehem. It is the geographic cradle of the Messiah’s birth and early ministry.',
    category: 'Place'
  },
  {
    word: 'GREEK',
    verse: 'Galatians 3:28',
    text: 'There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.',
    reflection: 'The gospel bridges all cultural, national, and social divides. In Christ, we belong to a single global family united by His blood and co-heirs to His kingdom.',
    category: 'Person'
  },
  {
    word: 'LYDIA',
    verse: 'Acts 16:14',
    text: 'One who heard us was a woman named Lydia, from the city of Thyatira, a seller of purple goods, who was a worshiper of God. The Lord opened her heart to pay attention to what was said by Paul.',
    reflection: 'Lydia was Paul’s first convert in Europe. She used her home and business resources to support the early church, showing the power of hospitality and dedicated industry.',
    category: 'Person'
  },
  {
    word: 'JONAH',
    verse: 'Jonah 1:17',
    text: 'And the Lord appointed a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights.',
    reflection: 'Jonah’s story reminds us that we can never run away from God’s presence or His calling. His discipline is not to destroy us, but to redirect us toward His mercy.',
    category: 'Person'
  },
  {
    word: 'STAFF',
    verse: 'Psalm 23:4',
    text: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
    reflection: 'A shepherd’s staff is used to gently guide the sheep and pull them out of danger. Take comfort today in knowing God’s guidance keeps you on the right path.',
    category: 'Object'
  },
  {
    word: 'TABLE',
    verse: 'Psalm 23:5',
    text: 'You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.',
    reflection: 'In the presence of opposition, God does not just protect us; He honors us, feeds us, and blesses us abundantly, demonstrating His absolute provision and love.',
    category: 'Object'
  },
  {
    word: 'DWELL',
    verse: 'Psalm 23:6',
    text: 'Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.',
    reflection: 'Our ultimate hope is eternal communion with the Lord. We do not just visit His presence; we dwell in His house forever, enveloped in His goodness and mercy.',
    category: 'Concept'
  },
  {
    word: 'HYMNS',
    verse: 'Colossians 3:16',
    text: 'Let the word of Christ dwell in you richly... singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.',
    reflection: 'Worship is a powerful weapon that drives out anxiety and aligns our hearts with truth. Fill your day with songs of praise and thanksgiving to the Lord.',
    category: 'Object'
  },
  {
    word: 'GIFTS',
    verse: 'Romans 12:6',
    text: 'Having gifts that differ according to the grace given to us, let us use them...',
    reflection: 'Every believer is uniquely gifted by the Holy Spirit to serve the body of Christ. Do not bury your talent; use it with joy to bless others and build God’s kingdom.',
    category: 'Concept'
  },
  {
    word: 'MYRRH',
    verse: 'Matthew 2:11',
    text: 'And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.',
    reflection: 'Myrrh, used for embalming and burial, foreshadowed Christ’s sacrificial death. Even at His birth, He was recognized as the Savior who would die to give us life.',
    category: 'Object'
  },
  {
    word: 'SHOUT',
    verse: 'Joshua 6:20',
    text: 'So the people shouted, and the trumpets were blown. As soon as the people heard the sound of the trumpet, the people raised a great shout, and the wall fell down flat...',
    reflection: 'Sometimes, our praise is our battle cry. Shout with joy and victory in faith before the walls of opposition in your life even begin to crumble.',
    category: 'Concept'
  },
  {
    word: 'WALLS',
    verse: 'Hebrews 11:30',
    text: 'By faith the walls of Jericho fell down after they had been encircled for seven days.',
    reflection: 'Jericho’s walls did not fall by physical force, but by quiet obedience and faith. Trust in God’s unconventional strategies; they hold supernatural power.',
    category: 'Object'
  },
  {
    word: 'TRUMP',
    verse: '1 Corinthians 15:52',
    text: 'In a moment, in the twinkling of an eye, at the last trumpet. For the trumpet will sound, and the dead will be raised imperishable, and we shall be changed.',
    reflection: 'The sounding of the trumpet represents the glorious return of our Lord. It is our ultimate victory, when all pain, decay, and death are forever abolished.',
    category: 'Object'
  },
  {
    word: 'SOUND',
    verse: '1 Thessalonians 4:16',
    text: 'For the Lord himself will descend from heaven with a cry of command, with the voice of an archangel, and with the sound of the trumpet of God.',
    reflection: 'His return will not be silent or hidden. It will be a triumphant, resounding event that every eye will see and every ear will hear. Keep your eyes on the skies!',
    category: 'Concept'
  },
  {
    word: 'VOICE',
    verse: 'John 10:27',
    text: 'My sheep hear my voice, and I know them, and they follow me.',
    reflection: 'Amidst the loud clamor of opinions, responsibilities, and fears, train your ear to recognize the gentle, loving voice of your Shepherd through His Word.',
    category: 'Concept'
  },
  {
    word: 'FLOCK',
    verse: 'Luke 12:32',
    text: 'Fear not, little flock, for it is your Father’s good pleasure to give you the kingdom.',
    reflection: 'We may feel small, fragile, or outnumbered, but God is our Father. It gives Him great pleasure to protect, provide for, and share His royal kingdom with us.',
    category: 'Concept'
  },
  {
    word: 'GREEN',
    verse: 'Psalm 23:2',
    text: 'He makes me lie down in green pastures. He leads me beside still waters.',
    reflection: 'God does not design us to live in a state of constant burnout. He invites us into "green pastures" of deep spiritual rest, refreshment, and spiritual restoration.',
    category: 'Concept'
  },
  {
    word: 'QUIET',
    verse: 'Psalm 23:2',
    text: 'He leads me beside still (quiet) waters.',
    reflection: 'Noise and chaos drain our souls. Seek quiet moments in prayer and scripture today, letting the peace of Christ settle the storms of your busy mind.',
    category: 'Concept'
  },
  {
    word: 'SOULS',
    verse: 'Genesis 2:7',
    text: 'Then the Lord God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living soul.',
    reflection: 'Your life is not an accident of nature; your soul was custom-sculpted by God, and His very breath sustains you. You are valuable, purposeful, and beloved.',
    category: 'Concept'
  },
  {
    word: 'AWAKE',
    verse: 'Romans 13:11',
    text: 'Besides this you know the time, that the hour has come for you to wake from sleep. For salvation is nearer to us now than when we first believed.',
    reflection: 'The world is spiritually asleep, but believers are called to be fully awake, alert, and active in love. Live intentionally, knowing Christ’s return is near.',
    category: 'Concept'
  },
  {
    word: 'SLEEP',
    verse: '1 Thessalonians 5:6',
    text: 'So then let us not sleep, as others do, but let us keep awake and be sober.',
    reflection: 'Sober-mindedness and spiritual vigilance protect us from the traps of compromise. Walk in the light, alert to the opportunities to serve and honor God.',
    category: 'Concept'
  },
  {
    word: 'NIGHT',
    verse: '1 Thessalonians 5:5',
    text: 'For you are all children of light, children of the day. We are not of the night or of the darkness.',
    reflection: 'You do not belong to the darkness of confusion, fear, or sin. Walk in the open clarity, security, and holiness of being a child of the Day.',
    category: 'Concept'
  },
  {
    word: 'CREED',
    verse: '1 Corinthians 15:3-4',
    text: 'For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day...',
    reflection: 'The early creeds anchored the church in historical facts: Christ’s death, burial, and resurrection. Keep these truths at the center of your faith.',
    category: 'Doctrine'
  },
  {
    word: 'TITHE',
    verse: 'Malachi 3:10',
    text: 'Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you...',
    reflection: 'Tithing is not about God needing our money; it is about our hearts trusting His provision. Give generously, and watch Him bless your faithfulness.',
    category: 'Doctrine'
  },
  {
    word: 'PSALM',
    verse: 'Psalm 100:1',
    text: 'Make a joyful noise to the Lord, all the earth!',
    reflection: 'The Psalms represent the complete range of human emotion offered up to God. Whether you are rejoicing or weeping, take your heart to the Lord in prayer.',
    category: 'Object'
  },
  {
    word: 'SAINT',
    verse: 'Romans 1:7',
    text: 'To all those in Rome who are loved by God and called to be saints: Grace to you and peace from God our Father and the Lord Jesus Christ.',
    reflection: 'A "saint" in the Bible refers to every single believer set apart by grace. You are holy, chosen, and dearly loved—not by your performance, but by His calling.',
    category: 'Person'
  },
  {
    word: 'SAVES',
    verse: 'Isaiah 12:2',
    text: 'Behold, God is my salvation; I will trust, and will not be afraid; for the Lord God is my strength and my song, and he has become my salvation.',
    reflection: 'Our God is a God who rescues. He saves us from our sins, delivers us from our fears, and sustains us through every trial. Trust Him completely.',
    category: 'Concept'
  },
  {
    word: 'HONOR',
    verse: 'Exodus 20:12',
    text: 'Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you.',
    reflection: 'Honor is a value of the Kingdom. By respecting and honoring our parents and authorities, we align ourselves with God’s command and secure His blessing.',
    category: 'Concept'
  },
  {
    word: 'REAPS',
    verse: 'Galatians 6:9',
    text: 'And let us not grow weary of doing good, for in due season we will reap, if we do not give up.',
    reflection: 'Doing the right thing doesn’t always show immediate results. Be patient; your prayers, obedience, and kindness are seeds that will yield a beautiful harvest.',
    category: 'Concept'
  },
  {
    word: 'GRAVE',
    verse: '1 Corinthians 15:55',
    text: 'O death, where is your victory? O grave, where is your sting?',
    reflection: 'Because Jesus walked out of the tomb, the grave has lost its terror. It is no longer a dead end, but a gateway into everlasting glory with our Lord.',
    category: 'Place'
  },
  {
    word: 'ARISE',
    verse: 'Isaiah 60:1',
    text: 'Arise, shine, for your light has come, and the glory of the Lord has risen upon you.',
    reflection: 'Do not stay down in defeat, depression, or past failures. Arise! Put on the strength of Jesus, and let His radiant life shine through you today.',
    category: 'Concept'
  },
  {
    word: 'JUDGE',
    verse: 'James 4:12',
    text: 'There is only one lawgiver and judge, he who is able to save and to destroy. But who are you to judge your neighbor?',
    reflection: 'Recognizing God as the sole Supreme Judge frees us from the burden of criticizing others. Walk in humility, leaving justice and judgment in His hands.',
    category: 'Person'
  },
  {
    word: 'KINGS',
    verse: 'Revelation 19:16',
    text: 'On his robe and on his thigh he has a name written, King of kings and Lord of lords.',
    reflection: 'No earthly ruler, nation, or power is supreme. Jesus holds absolute sovereignty. Rest in the peace that the King of all kings is the one who defends you.',
    category: 'Person'
  },
  {
    word: 'ABRAM',
    verse: 'Genesis 12:1',
    text: 'Now the Lord said to Abram, "Go from your country and your kindred and your father’s house to the land that I will show you."',
    reflection: 'Abram’s journey began with absolute obedience to go before he even knew the destination. True faith is willing to step out simply because God said "Go".',
    category: 'Person'
  },
  {
    word: 'SARAH',
    verse: 'Genesis 17:15',
    text: 'And God said to Abraham, "As for Sarai your wife, you shall not call her name Sarai, but Sarah shall be her name."',
    reflection: 'Sarah laughed at God’s promise of a child in old age, yet God was faithful anyway. Our doubts do not disqualify God’s power to bring forth miracles.',
    category: 'Person'
  },
  {
    word: 'ISAAC',
    verse: 'Genesis 21:3',
    text: 'Abraham called the name of his son who was born to him, whom Sarah bore him, Isaac.',
    reflection: 'Isaac’s name means "Laughter", symbolizing the joy that comes when God’s promises are fulfilled. Trust that your season of weeping will end in His joy.',
    category: 'Person'
  },
  {
    word: 'JACOB',
    verse: 'Genesis 25:26',
    text: 'Afterward his brother came out, with his hand holding Esau’s heel, so his name was called Jacob.',
    reflection: 'Jacob, the deceiver, wrestled with God and was renamed Israel. God meets us in our struggles, transforms our character, and redirects our identity.',
    category: 'Person'
  },
  {
    word: 'OLIVE',
    verse: 'Genesis 8:11',
    text: 'And the dove came back to him in the evening, and behold, in her mouth was a freshly plucked olive leaf. So Noah knew that the waters had subsided from the earth.',
    reflection: 'The olive branch is a timeless symbol of peace, recovery, and new beginnings. If you are in a season of flooding, watch for the olive leaf—help is on the way.',
    category: 'Object'
  },
  {
    word: 'DOVES',
    verse: 'Matthew 10:16',
    text: 'Behold, I am sending you out as sheep in the midst of wolves, so be wise as serpents and innocent as doves.',
    reflection: 'We are called to navigate a difficult world with a combination of sharp discernment (wisdom) and pure motives (innocence), mirroring Christ’s character.',
    category: 'Object'
  },
  {
    word: 'WRATH',
    verse: 'Romans 12:19',
    text: 'Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, "Vengeance is mine, I will repay, says the Lord."',
    reflection: 'Surrendering our desire for revenge to God’s perfect, holy justice guards our hearts against bitterness and lets us live in His peace.',
    category: 'Concept'
  },
  {
    word: 'PRIDE',
    verse: 'Proverbs 16:18',
    text: 'Pride goes before destruction, and a haughty spirit before a fall.',
    reflection: 'Pride blocks us from receiving God’s grace and learning from others. Walk in humility today, recognizing that everything we have is a gift from Him.',
    category: 'Concept'
  },
  {
    word: 'DEVIL',
    verse: 'James 4:7',
    text: 'Submit yourselves therefore to God. Resist the devil, and he will flee from you.',
    reflection: 'The enemy is powerful, but he is not supreme. Submit your heart to God, align your actions with His truth, stand firm, and watch the enemy flee.',
    category: 'Person'
  },
  {
    word: 'DEMON',
    verse: 'Luke 10:17',
    text: 'The seventy-two returned with joy, saying, "Lord, even the demons are subject to us in your name!"',
    reflection: 'Our authority over spiritual darkness is not based on our own strength, but on the powerful Name of Jesus. Stand confident in His victory.',
    category: 'Person'
  },
  {
    word: 'FLESH',
    verse: 'Galatians 5:17',
    text: 'For the desires of the flesh are against the Spirit, and the desires of the Spirit are against the flesh...',
    reflection: 'The internal struggle is real, but we are not helpless. Feed your spirit with scripture and prayer today, and starves the old desires of the flesh.',
    category: 'Concept'
  },
  {
    word: 'CLOAK',
    verse: 'Luke 22:36',
    text: 'He said to them, "But now let the one who has a moneybag take it, and likewise a knapsack. And let the one who has no sword sell his cloak and buy one."',
    reflection: 'Jesus prepared His disciples for a shift in their ministry. He encourages us to be practical, prepared, and ready for changing seasons of spiritual labor.',
    category: 'Object'
  },
  {
    word: 'FEAST',
    verse: 'Exodus 23:14',
    text: 'Three times in the year you shall keep a feast to me.',
    reflection: 'God instituted feasts to remind Israel of His historical deliverance, encourage community, and celebrate His harvest. Remember to celebrate His works in your life!',
    category: 'Concept'
  },
  {
    word: 'PEARL',
    verse: 'Matthew 13:46',
    text: 'Who, on finding one pearl of great value, went and sold all that he had and bought it.',
    reflection: 'The Kingdom of Heaven is like a pearl of supreme value. Knowing Jesus and belonging to His family is worth letting go of everything else.',
    category: 'Object'
  },
  {
    word: 'MOUNT',
    verse: 'Matthew 5:1',
    text: 'Seeing the crowds, he went up on the mountain, and when he sat down, his disciples came to him.',
    reflection: 'The Sermon on the Mount contains the core ethical teachings of Jesus. Going up the mountain represents leaving the noise below to hear clearly from God.',
    category: 'Place'
  },
  {
    word: 'RIVER',
    verse: 'Revelation 22:1',
    text: 'Then the angel showed me the river of the water of life, bright as crystal, flowing from the throne of God and of the Lamb...',
    reflection: 'The River of Life represents the endless, pure, and life-giving supply of God’s grace and Holy Spirit flowing directly to His children.',
    category: 'Place'
  },
  {
    word: 'STORM',
    verse: 'Mark 4:39',
    text: 'And he awoke and rebuked the wind and said to the sea, "Peace! Be still!" And the wind ceased, and there was a great calm.',
    reflection: 'The storms of life may shake your boat, but they can never overwhelm the Savior who sleeps within it. He has full authority to quiet any storm.',
    category: 'Concept'
  },
  {
    word: 'WAVES',
    verse: 'Matthew 8:27',
    text: 'And the men marveled, saying, "What sort of man is this, that even winds and waves obey him?"',
    reflection: 'The very elements that terrify us are fully subject to the command of Jesus. When your waves rise, look at Jesus rather than looking at the storm.',
    category: 'Concept'
  },
  {
    word: 'GATES',
    verse: 'Psalm 100:4',
    text: 'Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!',
    reflection: 'We do not access God’s presence through grumbling or fear. Thanksgiving is the key that opens His gates, and praise leads us straight into His courts.',
    category: 'Object'
  },
  {
    word: 'HOUSE',
    verse: 'Joshua 24:15',
    text: 'But as for me and my house, we will serve the Lord.',
    reflection: 'Make a conscious, public decision today to align your home, family, and resources with the service of the Lord. It is a decision that protects generations.',
    category: 'Object'
  },
  {
    word: 'BUILD',
    verse: 'Matthew 16:18',
    text: 'And I tell you, you are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it.',
    reflection: 'Jesus is actively building His church. No amount of cultural opposition, spiritual warfare, or historical trial can ever halt His building or conquer His bride.',
    category: 'Concept'
  },
  {
    word: 'PLANT',
    verse: '1 Corinthians 3:6',
    text: 'I planted, Apollos watered, but God gave the growth.',
    reflection: 'This takes the pressure off us! Our job is simply to faithfully plant seeds of love and water them with prayer. God alone holds the power to bring forth growth.',
    category: 'Concept'
  },
  {
    word: 'TREES',
    verse: 'Psalm 1:3',
    text: 'He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither. In all that he does, he prospers.',
    reflection: 'When your roots are deep in God’s Word, you become unshakeable. Even in seasons of drought, your spiritual leaf will remain green and fruitful.',
    category: 'Object'
  },
  {
    word: 'GRASS',
    verse: 'Isaiah 40:8',
    text: 'The grass withers, the flower fades, but the word of our God will stand forever.',
    reflection: 'Earthly trends, political powers, and physical bodies are temporary and fleeting. Invest your time, energy, and heart in the one thing that is eternal: God’s Word.',
    category: 'Object'
  },
  {
    word: 'WINDS',
    verse: 'Matthew 8:27',
    text: 'What sort of man is this, that even winds and waves obey him?',
    reflection: 'The unpredictable winds of circumstances cannot blow you off course when you are anchored in the hands of the One who holds the winds in His fist.',
    category: 'Concept'
  },
  {
    word: 'IMAGE',
    verse: 'Genesis 1:27',
    text: 'So God created man in his own image, in the image of God he created him; male and female he created them.',
    reflection: 'You are an image-bearer of the Living God. This is the source of your ultimate dignity, value, and purpose. Live today reflecting His character to the world.',
    category: 'Concept'
  },
  {
    word: 'SIGNS',
    verse: 'John 2:11',
    text: 'This, the first of his signs, Jesus did at Cana in Galilee, and manifested his glory. And his disciples believed in him.',
    reflection: 'Miracles and signs are not just spectacular events; they are signposts pointing directly to the character, power, and glory of Jesus, inviting us to believe.',
    category: 'Concept'
  },
  {
    word: 'GUIDE',
    verse: 'Psalm 48:14',
    text: 'That this is God, our God forever and ever. He will be our guide forever.',
    reflection: 'You do not have to figure out your entire future on your own. God is committed to walking with you and guiding you step-by-step, all the days of your life.',
    category: 'Person'
  },
  {
    word: 'LEADS',
    verse: 'Psalm 23:2',
    text: 'He leads me beside still waters.',
    reflection: 'The Lord is not a driver who pushes us to exhaustion; He is a Shepherd who leads us gently. Follow His lead today into places of peace and restoration.',
    category: 'Concept'
  },
  {
    word: 'LAMBS',
    verse: 'John 21:15',
    text: 'When they had finished breakfast, Jesus said to Simon Peter... "Feed my lambs."',
    reflection: 'The lambs are the young, vulnerable, or new believers. Jesus calls us to display our love for Him by actively feeding, teaching, and caring for His children.',
    category: 'Object'
  },
  {
    word: 'WHITE',
    verse: 'Revelation 7:9',
    text: 'After this I looked, and behold, a great multitude... standing before the throne and before the Lamb, clothed in white robes...',
    reflection: 'White robes represent the perfect righteousness of Christ that covers us. You are seen by God as spotless, holy, and completely clean through the blood of the Lamb.',
    category: 'Concept'
  },
  {
    word: 'ROBES',
    verse: 'Revelation 7:9',
    text: 'Clothed in white robes, with palm branches in their hands...',
    reflection: 'Robes represent our standing and identity. In Christ, we are not dressed in the rags of our old guilt, but in the royal garments of salvation and praise.',
    category: 'Object'
  },
  {
    word: 'PALMS',
    verse: 'Revelation 7:9',
    text: 'Standing before the throne... with palm branches in their hands...',
    reflection: 'Palm branches are historical symbols of victory, peace, and celebration. Worship today with palm branches in your heart, celebrating His ultimate victory.',
    category: 'Object'
  },
  {
    word: 'SINGS',
    verse: 'Colossians 3:16',
    text: 'Let the word of Christ dwell in you richly... singing with thankfulness in your hearts to God.',
    reflection: 'Singing is a powerful, spiritual discipline. It shifts our eyes from our problems to our Provider, transforming our heart posture into gratitude.',
    category: 'Concept'
  },
  {
    word: 'SWEET',
    verse: 'Psalm 119:103',
    text: 'How sweet are your words to my taste, sweeter than honey to my mouth!',
    reflection: 'God’s word is not a dry instruction manual. It is sweet, comforting, and deeply satisfying food for the soul. Taste and see that the Lord is good!',
    category: 'Concept'
  },
  {
    word: 'SPICE',
    verse: 'Mark 16:1',
    text: 'When the Sabbath was past, Mary Magdalene, Mary the mother of James, and Salome bought spices, so that they might go and anoint him.',
    reflection: 'The women brought spices to honor Jesus’ body, expecting death. But He surprised them with life! God always has a plan that goes far beyond our grief.',
    category: 'Object'
  },
  {
    word: 'MONEY',
    verse: 'Matthew 6:24',
    text: 'No one can serve two masters... You cannot serve God and money.',
    reflection: 'Money makes a useful tool but a terrible master. Keep God alone on the throne of your heart, trusting Him as your Provider rather than your bank account.',
    category: 'Object'
  },
  {
    word: 'COINS',
    verse: 'Matthew 22:19',
    text: 'Show me the coin for the tax. And they brought him a denarius.',
    reflection: 'Jesus said, "Render to Caesar the things that are Caesar’s, and to God the things that are God’s." You bear God’s image; give Him your whole heart.',
    category: 'Object'
  },
  {
    word: 'CHAIN',
    verse: 'Acts 12:7',
    text: 'And behold, an angel of the Lord stood next to him... and the chains fell off his hands.',
    reflection: 'No prison, circumstance, or addiction can hold you when God says "Arise". He has the supernatural power to break every chain in your life.',
    category: 'Object'
  },
  {
    word: 'GUARD',
    verse: 'Acts 12:6',
    text: 'Peter was sleeping between two soldiers, bound with two chains, and guards before the door were guarding the prison.',
    reflection: 'Peter was so secure in God’s hand that he slept soundly the night before his trial. Trust God so completely that you can rest in the middle of your trial.',
    category: 'Person'
  },
  {
    word: 'WATCH',
    verse: 'Matthew 26:41',
    text: 'Watch and pray that you may not enter into temptation. The spirit indeed is willing, but the flesh is weak.',
    reflection: 'Prayer is our spiritual shield. By watching and staying in constant conversation with God, we guard our hearts from the subtle temptations of compromise.',
    category: 'Concept'
  },
  {
    word: 'FLAME',
    verse: 'Hebrews 1:7',
    text: 'Of the angels he says, "He makes his angels winds, and his ministers a flame of fire."',
    reflection: 'God’s ministers are called to be a flame of fire—passionate, bright, and purifying. Let the Holy Spirit kindle a fresh, burning fire in your heart today.',
    category: 'Object'
  },
  {
    word: 'SMOKE',
    verse: 'Revelation 15:8',
    text: 'And the temple was filled with smoke from the glory of God and from his power...',
    reflection: 'Smoke in scripture often represents the dense, overwhelming majesty of God’s holy presence. Stand in awe of His incomprehensible power and majesty today.',
    category: 'Object'
  },
  {
    word: 'CLOUD',
    verse: 'Exodus 13:21',
    text: 'And the Lord went before them by day in a pillar of cloud to lead them along the way...',
    reflection: 'God’s guidance is constant. He goes before us, preparing our way, sheltering us from the heat of trials, and showing us exactly when to step forward.',
    category: 'Object'
  },
  {
    word: 'STARS',
    verse: 'Genesis 1:16',
    text: 'And God made the two great lights... He made the stars also.',
    reflection: '"He made the stars also"—a brief phrase for billions of galaxies! The God who speaks stars into existence is the very Father who knows the hairs on your head.',
    category: 'Object'
  },
  {
    word: 'EARTH',
    verse: 'Genesis 1:1',
    text: 'In the beginning, God created the heavens and the earth.',
    reflection: 'The earth is the Lord’s and everything in it! Every mountain, river, and nation belongs to Him. Rest in the authority of the Creator of the universe.',
    category: 'Place'
  },
  {
    word: 'FLOOD',
    verse: 'Genesis 6:17',
    text: 'For behold, I will bring a flood of waters upon the earth to destroy all flesh...',
    reflection: 'The flood shows God’s sorrow over sin, but the Ark shows His commitment to save. Even in judgment, His heart always builds a door of salvation.',
    category: 'Concept'
  },
  {
    word: 'RAINS',
    verse: 'Matthew 7:25',
    text: 'And the rain fell, and the floods came, and the winds blew and beat on that house, but it did not fall, because it had been founded on the rock.',
    reflection: 'The rains of trial fall on the righteous and the unrighteous alike. The deciding factor is not the storm, but whether your life is founded on the Rock of Christ.',
    category: 'Concept'
  },
  {
    word: 'ROCKS',
    verse: 'Luke 19:40',
    text: 'He answered, "I tell you, if these were silent, the very stones (rocks) would cry out."',
    reflection: 'Creation cannot help but praise its Maker! Do not let the rocks take your place; let your mouth be filled with praise and testimony of His goodness today.',
    category: 'Object'
  },
  {
    word: 'SANDS',
    verse: 'Genesis 22:17',
    text: 'I will surely bless you, and I will surely multiply your offspring as the stars of heaven and as the sand that is on the seashore.',
    reflection: 'God’s promises of multiplication go far beyond our imagination. He is able to take your small offering and multiply it as the countless sands of the sea.',
    category: 'Object'
  },
  {
    word: 'SHORE',
    verse: 'John 21:4',
    text: 'Just as day was breaking, Jesus stood on the shore; yet the disciples did not know that it was Jesus.',
    reflection: 'After a night of fruitless labor, the disciples found Jesus waiting on the shore with breakfast prepared. He is waiting on the shore of your struggle, ready to provide.',
    category: 'Place'
  },
  {
    word: 'BOATS',
    verse: 'Mark 4:38',
    text: 'But he was in the stern, asleep on the cushion. And they woke him and said to him, "Teacher, do you not care that we are perishing?"',
    reflection: 'The disciples panicked, but Jesus slept. His rest was the ultimate proof of His trust in the Father. Rest today, knowing your Boat-master is in complete control.',
    category: 'Object'
  },
  {
    word: 'NAILS',
    verse: 'John 20:25',
    text: 'Unless I see in his hands the mark of the nails, and place my finger into the mark of the nails... I will never believe.',
    reflection: 'Jesus did not reject Thomas’s doubts. He invited him to touch His scars. He is patient with your questions and meets you in your search for absolute assurance.',
    category: 'Object'
  },
  {
    word: 'SPEAR',
    verse: 'John 19:34',
    text: 'But one of the soldiers pierced his side with a spear, and at once there came out blood and water.',
    reflection: 'The spear pierce proved His complete sacrifice. The outflow of blood and water symbolizes redemption and cleansing—a fountain opened for our washing.',
    category: 'Object'
  },
  {
    word: 'WOUND',
    verse: 'Isaiah 53:5',
    text: 'But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.',
    reflection: 'The ultimate exchange: His wounds brought our healing, His suffering secured our peace. Carry this deep sense of gratitude in your heart today.',
    category: 'Concept'
  },
  {
    word: 'HEALS',
    verse: 'Psalm 147:3',
    text: 'He heals the brokenhearted and binds up their wounds.',
    reflection: 'God is not indifferent to your pain. He is the Great Physician who gently touches the broken places of your heart, binding them up with His comfort and love.',
    category: 'Concept'
  },
  {
    word: 'BLIND',
    verse: 'John 9:25',
    text: 'He answered, "Whether he is a sinner I do not know. One thing I do know, that though I was blind, now I see."',
    reflection: 'You don’t need to know all the answers of theology to be a witness. Your simple, unshakeable testimony of "I was blind, but now I see" holds immense power.',
    category: 'Person'
  },
  {
    word: 'LEPER',
    verse: 'Matthew 8:2',
    text: 'And behold, a leper came to him and knelt before him, saying, "Lord, if you will, you can make me clean."',
    reflection: 'In biblical times, lepers were cast out and untouched. But Jesus reached out His hand and touched him! Jesus is never afraid of your mess; He touches you to clean you.',
    category: 'Person'
  },
  {
    word: 'CLEAN',
    verse: 'Psalm 51:10',
    text: 'Create in me a clean heart, O God, and renew a right spirit within me.',
    reflection: 'We cannot clean our own hearts; it requires a creative act of God. Pray David’s prayer today, letting the Holy Spirit sweep away old habits and renew your spirit.',
    category: 'Concept'
  },
  {
    word: 'SNOWS',
    verse: 'Proverbs 31:21',
    text: 'She is not afraid of snow for her household, for all her household are clothed in scarlet.',
    reflection: 'The Proverbs 31 woman represents preparedness and confidence. When your household is spiritually clothed and founded on Christ, you can face any storm without fear.',
    category: 'Object'
  },
  {
    word: 'HEADS',
    verse: 'Luke 21:28',
    text: 'Now when these things begin to take place, straighten up and raise your heads, because your redemption is drawing near.',
    reflection: 'When the world shakes, do not hang your head in defeat or fear. Lift your head high! Our redemption is closer than ever, and our King is coming.',
    category: 'Object'
  },
  {
    word: 'HANDS',
    verse: 'Psalm 24:4',
    text: 'He who has clean hands and a pure heart, who does not lift up his soul to what is false...',
    reflection: 'Clean hands represent our outward actions, while a pure heart represents our inward motives. Strive to walk in integrity, both in what people see and what only God sees.',
    category: 'Object'
  },
  {
    word: 'BONES',
    verse: 'Ezekiel 37:1',
    text: 'The hand of the Lord was upon me... and it set me down in the middle of the valley; it was full of bones.',
    reflection: 'The dry bones represent situations that seem completely dead and hopeless. But when the Spirit of God breathes, even a valley of dry bones rises as a mighty army!',
    category: 'Object'
  },
  {
    word: 'TOMBS',
    verse: 'Matthew 8:28',
    text: 'There met him two demon-possessed men, coming out of the tombs, so fierce that no one could pass that way.',
    reflection: 'The tombs represent places of isolation, decay, and spiritual captivity. But when Jesus arrives, He cast out the darkness and restores peace, bringing life out of death.',
    category: 'Place'
  },
  {
    word: 'QUEEN',
    verse: 'Matthew 12:42',
    text: 'The queen of the South will rise up at the judgment with this generation and condemn it, for she came from the ends of the earth to hear the wisdom of Solomon...',
    reflection: 'The Queen of Sheba traveled massive distances to seek wisdom. How much more should we diligently seek the Lord, who is infinitely greater than Solomon!',
    category: 'Person'
  },
  {
    word: 'MARCH',
    verse: 'Joshua 6:3',
    text: 'You shall march around the city, all the men of war going around the city once. Thus shall you do for seven days.',
    reflection: 'Marching seemed like a foolish military tactic, but obedience always secures God’s victory. Follow His directions, even when they seem unconventional.',
    category: 'Concept'
  }
];

// Curated list of 7 challenge puzzles from easy to hard
export const CHALLENGE_PUZZLES: ChallengePuzzle[] = [
  {
    level: 1,
    word: 'JESUS',
    verse: 'Matthew 1:21',
    text: 'She will bear a son, and you shall call his name Jesus, for he will save his people from their sins.',
    reflection: 'The name Jesus (Yeshua) means "The Lord Saves". He is our Messiah, our Savior, and our Lord. Call upon His name today with gratitude for the salvation He has secured.',
    category: 'Person',
    difficulty: 'Easy'
  },
  {
    level: 2,
    word: 'FAITH',
    verse: 'Hebrews 11:1',
    text: 'Now faith is the assurance of things hoped for, the conviction of things not seen.',
    reflection: 'Faith is the anchor of the Christian life. It enables us to walk with confidence, trusting in God’s unseen hand and unshakeable promises.',
    category: 'Concept',
    difficulty: 'Easy'
  },
  {
    level: 3,
    word: 'GRACE',
    verse: 'Ephesians 2:8',
    text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.',
    reflection: 'Grace is God’s unmerited favor. We did not earn it, yet He gives it freely. Reflect today on how receiving His grace transforms your relationship with Him and others.',
    category: 'Doctrine',
    difficulty: 'Medium'
  },
  {
    level: 4,
    word: 'BIBLE',
    verse: '2 Timothy 3:16',
    text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.',
    reflection: 'The Word of God is alive, active, and inspired. Make it your compass, letting it shape your steps, correct your course, and ground you in eternal truth.',
    category: 'Object',
    difficulty: 'Medium'
  },
  {
    level: 5,
    word: 'ALTAR',
    verse: 'Hebrews 13:10',
    text: 'We have an altar from which those who serve the tent have no right to eat.',
    reflection: 'In the Old Covenant, the altar was a place of constant animal sacrifice. In the New Covenant, Jesus became our single, eternal altar where grace is served.',
    category: 'Object',
    difficulty: 'Hard'
  },
  {
    level: 6,
    word: 'MOSES',
    verse: 'Hebrews 11:24',
    text: 'By faith Moses, when he was grown up, refused to be called the son of Pharaoh’s daughter.',
    reflection: 'Moses chose the suffering of God’s people over the temporary pleasures of Egypt. True faith is willing to compromise worldly prestige to fulfill God’s divine purpose.',
    category: 'Person',
    difficulty: 'Hard'
  },
  {
    level: 7,
    word: 'MYRRH',
    verse: 'Matthew 2:11',
    text: 'And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.',
    reflection: 'Myrrh was an expensive spice used for anointing and embalming, foreshadowing Christ\'s sacrifice and victory over death. Present Him your hearts as a sweet fragrance today.',
    category: 'Object',
    difficulty: 'Very Hard'
  }
];

// Rich, compact list of common 5-letter English words for player guess validation
export const VALID_GUESS_WORDS = new Set([
  // Daily words added first
  ...DAILY_PUZZLES.map(p => p.word),
  ...CHALLENGE_PUZZLES.map(p => p.word),
  
  // Stanford GraphBase 5-letter words
  'AARGH', 'ABACA', 'ABACI', 'ABACK', 'ABAFT', 'ABASE', 'ABASH', 'ABATE', 'ABBEY', 'ABBOT', 'ABEAM', 'ABEND',
  'ABETS', 'ABHOR', 'ABIDE', 'ABLED', 'ABLER', 'ABODE', 'ABORT', 'ABOUT', 'ABOVE', 'ABSIT', 'ABUSE', 'ABUTS',
  'ABUZZ', 'ABYSS', 'ACHED', 'ACHES', 'ACHOO', 'ACIDS', 'ACING', 'ACKED', 'ACMES', 'ACNED', 'ACNES', 'ACORN',
  'ACRES', 'ACRID', 'ACTED', 'ACTIN', 'ACTOR', 'ACUTE', 'ADAGE', 'ADAPT', 'ADDED', 'ADDER', 'ADDLE', 'ADEPT',
  'ADIEU', 'ADIOS', 'ADLIB', 'ADMAN', 'ADMEN', 'ADMIT', 'ADMIX', 'ADOBE', 'ADOPT', 'ADORE', 'ADORN', 'ADULT',
  'ADZES', 'AEGIS', 'AERIE', 'AFFIX', 'AFIRE', 'AFOOT', 'AFORE', 'AFOUL', 'AFTER', 'AGAIN', 'AGAPE', 'AGARS',
  'AGATE', 'AGAVE', 'AGENT', 'AGILE', 'AGING', 'AGLEY', 'AGLOW', 'AGONE', 'AGONY', 'AGORA', 'AGREE', 'AGUES',
  'AHEAD', 'AHHHH', 'AHOLD', 'AHOYS', 'AIDED', 'AIDER', 'AIDES', 'AILED', 'AIMED', 'AIMER', 'AIOLI', 'AIRED',
  'AIRER', 'AISLE', 'AITCH', 'AJUGA', 'ALACK', 'ALARM', 'ALBUM', 'ALDER', 'ALECK', 'ALEPH', 'ALERT', 'ALGAE',
  'ALGAL', 'ALGIN', 'ALIAS', 'ALIBI', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE', 'ALKYD', 'ALKYL', 'ALLAY', 'ALLEY',
  'ALLOT', 'ALLOW', 'ALLOY', 'ALOES', 'ALOFT', 'ALOHA', 'ALONE', 'ALONG', 'ALOOF', 'ALOUD', 'ALPHA', 'ALTAR',
  'ALTER', 'ALTHO', 'ALTOS', 'ALUMS', 'ALWAY', 'AMAHS', 'AMASS', 'AMAZE', 'AMBER', 'AMBIT', 'AMBLE', 'AMEBA',
  'AMEND', 'AMENS', 'AMIDE', 'AMIGO', 'AMINE', 'AMINO', 'AMISS', 'AMITY', 'AMMOS', 'AMONG', 'AMOUR', 'AMPED',
  'AMPLE', 'AMPLY', 'AMUCK', 'AMUSE', 'AMYLS', 'ANDED', 'ANENT', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'ANGST',
  'ANILE', 'ANIMA', 'ANION', 'ANISE', 'ANKHS', 'ANKLE', 'ANNAS', 'ANNEX', 'ANNOY', 'ANNUL', 'ANNUM', 'ANODE',
  'ANOLE', 'ANTED', 'ANTES', 'ANTIC', 'ANTIS', 'ANTSY', 'ANVIL', 'AORTA', 'APACE', 'APART', 'APERS', 'APHID',
  'APHIS', 'APIAN', 'APING', 'APISH', 'APNEA', 'APORT', 'APPLE', 'APPLY', 'APRON', 'APSES', 'APSOS', 'APTLY',
  'AQUAE', 'AQUAS', 'ARBOR', 'ARCED', 'ARDOR', 'AREAL', 'AREAS', 'ARENA', 'ARGON', 'ARGOT', 'ARGUE', 'ARIAS',
  'ARISE', 'ARITY', 'ARMED', 'ARMOR', 'AROMA', 'AROSE', 'ARRAS', 'ARRAY', 'ARROW', 'ARSES', 'ARSON', 'ARTSY',
  'ARUMS', 'ASANA', 'ASCOT', 'ASHEN', 'ASHES', 'ASIDE', 'ASKED', 'ASKER', 'ASKEW', 'ASPEN', 'ASPIC', 'ASSAI',
  'ASSAY', 'ASSED', 'ASSES', 'ASSET', 'ASTER', 'ASTIR', 'ASTRO', 'ATILT', 'ATLAS', 'ATOLL', 'ATOMS', 'ATONE',
  'ATRIA', 'ATTAR', 'ATTIC', 'AUDIO', 'AUDIT', 'AUGER', 'AUGHT', 'AUGUR', 'AUNTS', 'AURAE', 'AURAL', 'AURAS',
  'AURIC', 'AUTOS', 'AVAIL', 'AVANT', 'AVAST', 'AVERS', 'AVERT', 'AVIAN', 'AVOID', 'AVOWS', 'AWAIT', 'AWAKE',
  'AWARD', 'AWARE', 'AWASH', 'AWAYS', 'AWFUL', 'AWING', 'AWOKE', 'AXELS', 'AXIAL', 'AXING', 'AXIOM', 'AXLED',
  'AXLES', 'AXMAN', 'AXMEN', 'AXONS', 'AYINS', 'AZINE', 'AZOIC', 'AZURE', 'BABEL', 'BABES', 'BACKS', 'BACON',
  'BADDY', 'BADGE', 'BADLY', 'BAGEL', 'BAGGY', 'BAHTS', 'BAILS', 'BAIRN', 'BAITS', 'BAIZE', 'BAKED', 'BAKER',
  'BAKES', 'BALDS', 'BALDY', 'BALED', 'BALER', 'BALES', 'BALKS', 'BALKY', 'BALLS', 'BALLY', 'BALMS', 'BALMY',
  'BALSA', 'BANAL', 'BANDS', 'BANDY', 'BANES', 'BANGS', 'BANJO', 'BANKS', 'BANNS', 'BARBS', 'BARDS', 'BARED',
  'BARER', 'BARES', 'BARFS', 'BARFY', 'BARGE', 'BARIC', 'BARKS', 'BARKY', 'BARMS', 'BARMY', 'BARNS', 'BARON',
  'BASAL', 'BASED', 'BASER', 'BASES', 'BASIC', 'BASIL', 'BASIN', 'BASIS', 'BASKS', 'BASSI', 'BASSO', 'BASTE',
  'BATCH', 'BATED', 'BATES', 'BATHE', 'BATHS', 'BATIK', 'BATON', 'BATTY', 'BAUDS', 'BAULK', 'BAWDY', 'BAWLS',
  'BAYED', 'BAYOU', 'BAZAR', 'BEACH', 'BEADS', 'BEADY', 'BEAKS', 'BEAKY', 'BEAMS', 'BEAMY', 'BEANO', 'BEANS',
  'BEARD', 'BEARS', 'BEAST', 'BEATS', 'BEAUS', 'BEAUT', 'BEAUX', 'BEBOP', 'BEBUG', 'BECKS', 'BEDEW', 'BEDIM',
  'BEECH', 'BEEFS', 'BEEFY', 'BEEPS', 'BEERS', 'BEERY', 'BEETS', 'BEFIT', 'BEFOG', 'BEGAN', 'BEGAT', 'BEGET',
  'BEGIN', 'BEGOT', 'BEGUN', 'BEIGE', 'BEING', 'BELAY', 'BELCH', 'BELIE', 'BELLE', 'BELLI', 'BELLS', 'BELLY',
  'BELOW', 'BELTS', 'BENCH', 'BENDS', 'BENTS', 'BERET', 'BERGS', 'BERMS', 'BERRY', 'BERTH', 'BERYL', 'BESET',
  'BESOT', 'BESTS', 'BETAS', 'BETEL', 'BETHS', 'BEVEL', 'BEZEL', 'BHANG', 'BHOYS', 'BIBBS', 'BIBLE', 'BIDDY',
  'BIDED', 'BIDER', 'BIDES', 'BIDET', 'BIERS', 'BIFFS', 'BIFFY', 'BIGGY', 'BIGHT', 'BIGLY', 'BIGOT', 'BIKED',
  'BIKER', 'BIKES', 'BILES', 'BILGE', 'BILGY', 'BILKS', 'BILLS', 'BILLY', 'BIMBO', 'BINDS', 'BINGE', 'BINGO',
  'BIOME', 'BIPED', 'BIPOD', 'BIRCH', 'BIRDS', 'BIRTH', 'BISON', 'BITCH', 'BITER', 'BITES', 'BITSY', 'BITTY',
  'BLABS', 'BLACK', 'BLADE', 'BLAHS', 'BLAME', 'BLAND', 'BLANK', 'BLARE', 'BLASH', 'BLAST', 'BLATS', 'BLAZE',
  'BLEAK', 'BLEAR', 'BLEAT', 'BLEBS', 'BLEED', 'BLEND', 'BLESS', 'BLEST', 'BLIMP', 'BLIND', 'BLINI', 'BLINK',
  'BLIPS', 'BLISS', 'BLITZ', 'BLOAT', 'BLOBS', 'BLOCK', 'BLOCS', 'BLOKE', 'BLOND', 'BLOOD', 'BLOOM', 'BLOTS',
  'BLOWN', 'BLOWS', 'BLOWY', 'BLUED', 'BLUER', 'BLUES', 'BLUFF', 'BLUNT', 'BLURB', 'BLURS', 'BLURT', 'BLUSH',
  'BOARD', 'BOARS', 'BOAST', 'BOATS', 'BOBBY', 'BOCCE', 'BOCCI', 'BOCKS', 'BODED', 'BODES', 'BODGE', 'BOFFO',
  'BOFFS', 'BOGEY', 'BOGGY', 'BOGIE', 'BOGUS', 'BOILS', 'BOLAS', 'BOLLS', 'BOLOS', 'BOLTS', 'BOMBE', 'BOMBS',
  'BONDS', 'BONED', 'BONER', 'BONES', 'BONGO', 'BONGS', 'BONKS', 'BONNE', 'BONNY', 'BONUS', 'BOOBS', 'BOOBY',
  'BOOED', 'BOOKS', 'BOOKY', 'BOOMS', 'BOOMY', 'BOONS', 'BOORS', 'BOOST', 'BOOTH', 'BOOTS', 'BOOTY', 'BOOZE',
  'BOOZY', 'BORAX', 'BORED', 'BORER', 'BORES', 'BORIC', 'BORNE', 'BORON', 'BOSKY', 'BOSOM', 'BOSON', 'BOSSA',
  'BOSSY', 'BOSUN', 'BOTCH', 'BOUGH', 'BOULE', 'BOUND', 'BOUTS', 'BOWED', 'BOWEL', 'BOWER', 'BOWIE', 'BOWLS',
  'BOXED', 'BOXER', 'BOXES', 'BOZOS', 'BRACE', 'BRACK', 'BRACT', 'BRADS', 'BRAES', 'BRAGS', 'BRAID', 'BRAIN',
  'BRAKE', 'BRAND', 'BRANS', 'BRANT', 'BRASH', 'BRASS', 'BRATS', 'BRAVA', 'BRAVE', 'BRAVO', 'BRAWL', 'BRAWN',
  'BRAYS', 'BRAZE', 'BREAD', 'BREAK', 'BREAM', 'BREED', 'BRENT', 'BREVE', 'BREWS', 'BRIAR', 'BRIBE', 'BRICK',
  'BRIDE', 'BRIEF', 'BRIER', 'BRIES', 'BRIGS', 'BRIMS', 'BRINE', 'BRING', 'BRINK', 'BRINY', 'BRISK', 'BROAD',
  'BROIL', 'BROKE', 'BROMO', 'BRONC', 'BRONX', 'BROOD', 'BROOK', 'BROOM', 'BROTH', 'BROWN', 'BROWS', 'BRUIN',
  'BRUIT', 'BRUNG', 'BRUNT', 'BRUSH', 'BRUSK', 'BRUTE', 'BUBBA', 'BUCKS', 'BUDDY', 'BUDGE', 'BUENA', 'BUENO',
  'BUFFA', 'BUFFO', 'BUFFS', 'BUGGY', 'BUGLE', 'BUILD', 'BUILT', 'BULBS', 'BULGE', 'BULGY', 'BULKS', 'BULKY',
  'BULLS', 'BULLY', 'BUMPH', 'BUMPS', 'BUMPY', 'BUNCH', 'BUNCO', 'BUNDS', 'BUNGS', 'BUNKO', 'BUNKS', 'BUNNY',
  'BUNTS', 'BUOYS', 'BURET', 'BURGS', 'BURLS', 'BURLY', 'BURNS', 'BURNT', 'BURPS', 'BURRO', 'BURRS', 'BURRY',
  'BURST', 'BUSBY', 'BUSED', 'BUSES', 'BUSHY', 'BUSKS', 'BUSTS', 'BUSTY', 'BUTCH', 'BUTTE', 'BUTTS', 'BUTYL',
  'BUXOM', 'BUYER', 'BUZZY', 'BWANA', 'BYLAW', 'BYRES', 'BYTES', 'BYWAY', 'CABAL', 'CABBY', 'CABIN', 'CABLE',
  'CACAO', 'CACHE', 'CACTI', 'CADDY', 'CADET', 'CADGE', 'CADRE', 'CAFES', 'CAGED', 'CAGER', 'CAGES', 'CAGEY',
  'CAIRN', 'CAKED', 'CAKES', 'CALIX', 'CALKS', 'CALLA', 'CALLS', 'CALMS', 'CALVE', 'CALYX', 'CAMEL', 'CAMEO',
  'CAMPO', 'CAMPS', 'CAMPY', 'CANAL', 'CANDY', 'CANED', 'CANER', 'CANES', 'CANNA', 'CANNY', 'CANOE', 'CANON',
  'CANST', 'CANTO', 'CANTS', 'CAPED', 'CAPER', 'CAPES', 'CAPON', 'CAPOS', 'CARAT', 'CARDS', 'CARED', 'CARER',
  'CARES', 'CARET', 'CARGO', 'CARNE', 'CARNY', 'CAROB', 'CAROL', 'CAROM', 'CARON', 'CARPS', 'CARPY', 'CARRY',
  'CARTE', 'CARTS', 'CARVE', 'CASAS', 'CASED', 'CASES', 'CASKS', 'CASTE', 'CASTS', 'CASUS', 'CATCH', 'CATER',
  'CATTY', 'CAULK', 'CAULS', 'CAUSE', 'CAVED', 'CAVES', 'CAVIL', 'CAWED', 'CEASE', 'CEDAR', 'CEDED', 'CEDER',
  'CEDES', 'CEILS', 'CELEB', 'CELLO', 'CELLS', 'CENTO', 'CENTS', 'CHAFE', 'CHAFF', 'CHAIN', 'CHAIR', 'CHALK',
  'CHAMP', 'CHANT', 'CHAOS', 'CHAPS', 'CHARD', 'CHARM', 'CHARS', 'CHART', 'CHARY', 'CHASE', 'CHASM', 'CHATS',
  'CHAWS', 'CHEAP', 'CHEAT', 'CHECK', 'CHEEK', 'CHEEP', 'CHEER', 'CHEFS', 'CHERT', 'CHESS', 'CHEST', 'CHEWS',
  'CHEWY', 'CHICK', 'CHIDE', 'CHIEF', 'CHIFF', 'CHILD', 'CHILE', 'CHILI', 'CHILL', 'CHIME', 'CHIMP', 'CHINA',
  'CHINE', 'CHINK', 'CHINO', 'CHINS', 'CHIPS', 'CHIRP', 'CHITS', 'CHIVE', 'CHOCK', 'CHOIR', 'CHOKE', 'CHOMP',
  'CHOOS', 'CHOPS', 'CHORD', 'CHORE', 'CHOSE', 'CHOWS', 'CHUCK', 'CHUFF', 'CHUGS', 'CHUMP', 'CHUMS', 'CHUNK',
  'CHURL', 'CHURN', 'CHUTE', 'CIDER', 'CIGAR', 'CILIA', 'CILLS', 'CINCH', 'CIRCA', 'CIRRI', 'CITED', 'CITES',
  'CIVET', 'CIVIC', 'CIVIL', 'CIVVY', 'CLACK', 'CLADS', 'CLAIM', 'CLAMP', 'CLAMS', 'CLANG', 'CLANK', 'CLANS',
  'CLAPS', 'CLASH', 'CLASP', 'CLASS', 'CLAVE', 'CLAWS', 'CLAYS', 'CLEAN', 'CLEAR', 'CLEAT', 'CLEFS', 'CLEFT',
  'CLERK', 'CLEWS', 'CLICK', 'CLIFF', 'CLIMB', 'CLIME', 'CLING', 'CLINK', 'CLIPS', 'CLOAK', 'CLOCK', 'CLODS',
  'CLOGS', 'CLOMP', 'CLONE', 'CLOPS', 'CLOSE', 'CLOTH', 'CLOTS', 'CLOUD', 'CLOUT', 'CLOVE', 'CLOWN', 'CLOYS',
  'CLUBS', 'CLUCK', 'CLUED', 'CLUES', 'CLUMP', 'CLUNG', 'CLUNK', 'COACH', 'COALS', 'COAST', 'COATI', 'COATS',
  'COBRA', 'COCAS', 'COCCI', 'COCKS', 'COCKY', 'COCOA', 'COCOS', 'CODAS', 'CODED', 'CODER', 'CODES', 'CODEX',
  'CODON', 'COEDS', 'COHOS', 'COIFS', 'COILS', 'COINS', 'COKED', 'COKES', 'COLAS', 'COLDS', 'COLIC', 'COLON',
  'COLOR', 'COLTS', 'COMAS', 'COMBO', 'COMBS', 'COMER', 'COMES', 'COMET', 'COMFY', 'COMIC', 'COMMA', 'COMPS',
  'CONCH', 'CONDO', 'CONED', 'CONES', 'CONEY', 'CONGA', 'CONIC', 'CONKS', 'COOCH', 'COOED', 'COOKS', 'COOKY',
  'COOLS', 'COONS', 'COOPS', 'COOTS', 'COPED', 'COPER', 'COPES', 'COPRA', 'COPSE', 'COQUI', 'CORAL', 'CORDS',
  'CORDY', 'CORED', 'CORER', 'CORES', 'CORGI', 'CORKS', 'CORKY', 'CORMS', 'CORNS', 'CORNU', 'CORNY', 'CORPS',
  'COSET', 'COSTA', 'COSTS', 'COTES', 'COTTA', 'COUCH', 'COUGH', 'COULD', 'COUNT', 'COUPE', 'COUPS', 'COURT',
  'COUTH', 'COVEN', 'COVER', 'COVES', 'COVET', 'COVEY', 'COWED', 'COWER', 'COWLS', 'COWRY', 'COXED', 'COXES',
  'COYER', 'COYLY', 'COYPU', 'COZEN', 'CRABS', 'CRACK', 'CRAFT', 'CRAGS', 'CRAMP', 'CRAMS', 'CRANE', 'CRANK',
  'CRAPS', 'CRASH', 'CRASS', 'CRATE', 'CRAVE', 'CRAWL', 'CRAWS', 'CRAZE', 'CRAZY', 'CREAK', 'CREAM', 'CREDO',
  'CREED', 'CREEK', 'CREEL', 'CREEP', 'CREME', 'CREPE', 'CREPT', 'CRESS', 'CREST', 'CREWS', 'CRIBS', 'CRICK',
  'CRIED', 'CRIER', 'CRIES', 'CRIME', 'CRIMP', 'CRINK', 'CRISP', 'CRITS', 'CROAK', 'CROCK', 'CROCS', 'CROFT',
  'CRONE', 'CRONY', 'CROOK', 'CROON', 'CROPS', 'CROSS', 'CROUP', 'CROWD', 'CROWN', 'CROWS', 'CRUDE', 'CRUDS',
  'CRUEL', 'CRUET', 'CRUFT', 'CRUMB', 'CRUMP', 'CRUSE', 'CRUSH', 'CRUST', 'CRYPT', 'CUBBY', 'CUBED', 'CUBER',
  'CUBES', 'CUBIC', 'CUBIT', 'CUFFS', 'CUING', 'CUKES', 'CULLS', 'CULPA', 'CULTS', 'CUMIN', 'CUNTS', 'CUPID',
  'CUPPA', 'CUPPY', 'CURBS', 'CURDS', 'CURDY', 'CURED', 'CURER', 'CURES', 'CURIA', 'CURIE', 'CURIO', 'CURLS',
  'CURLY', 'CURRY', 'CURSE', 'CURVE', 'CURVY', 'CUSHY', 'CUSPS', 'CUSPY', 'CUTER', 'CUTIE', 'CUTUP', 'CYCAD',
  'CYCLE', 'CYNIC', 'CYSTS', 'CZARS', 'DACHA', 'DADDY', 'DADOS', 'DAFFY', 'DAILY', 'DAIRY', 'DAISY', 'DALES',
  'DALLY', 'DAMES', 'DAMNS', 'DAMPS', 'DANCE', 'DANDY', 'DARED', 'DARER', 'DARES', 'DARKS', 'DARKY', 'DARNS',
  'DARTS', 'DASHY', 'DATED', 'DATER', 'DATES', 'DATUM', 'DAUBS', 'DAUNT', 'DAVIT', 'DAWNS', 'DAZED', 'DAZES',
  'DEADS', 'DEALS', 'DEALT', 'DEANS', 'DEARS', 'DEARY', 'DEATH', 'DEBAR', 'DEBIT', 'DEBTS', 'DEBUG', 'DEBUT',
  'DECAF', 'DECAL', 'DECAY', 'DECKS', 'DECOR', 'DECOY', 'DECRY', 'DEEDS', 'DEEMS', 'DEEPS', 'DEFER', 'DEFOG',
  'DEFUN', 'DEGAS', 'DEGUM', 'DEICE', 'DEIFY', 'DEIGN', 'DEISM', 'DEIST', 'DEITY', 'DELAY', 'DELFT', 'DELIS',
  'DELLS', 'DELTA', 'DELVE', 'DEMIT', 'DEMON', 'DEMOS', 'DEMUR', 'DENIM', 'DENSE', 'DENTS', 'DEPOT', 'DEPTH',
  'DEQUE', 'DERBY', 'DESEX', 'DESKS', 'DETER', 'DEUCE', 'DEVIL', 'DEWED', 'DEWEY', 'DHOWS', 'DIALS', 'DIARY',
  'DIAZO', 'DICED', 'DICER', 'DICES', 'DICEY', 'DICKS', 'DICKY', 'DICOT', 'DICTA', 'DICTU', 'DICUT', 'DIDDY',
  'DIDOS', 'DIDOT', 'DIDST', 'DIEMS', 'DIEST', 'DIETH', 'DIETS', 'DIGIT', 'DIKED', 'DIKES', 'DILDO', 'DILLS',
  'DILLY', 'DIMER', 'DIMES', 'DIMLY', 'DINAR', 'DINED', 'DINER', 'DINES', 'DINGO', 'DINGS', 'DINGY', 'DINKS',
  'DINKY', 'DINTS', 'DIODE', 'DIPPY', 'DIPSO', 'DIRER', 'DIRGE', 'DIRKS', 'DIRTS', 'DIRTY', 'DISCO', 'DISCS',
  'DISHY', 'DISKS', 'DITCH', 'DITTO', 'DITTY', 'DIVAN', 'DIVAS', 'DIVED', 'DIVER', 'DIVES', 'DIVOT', 'DIVVY',
  'DIXIT', 'DIZZY', 'DJINN', 'DOCKS', 'DODGE', 'DODGY', 'DODOS', 'DOERS', 'DOEST', 'DOETH', 'DOFFS', 'DOGES',
  'DOGGO', 'DOGGY', 'DOGIE', 'DOGMA', 'DOILY', 'DOING', 'DOLCE', 'DOLED', 'DOLES', 'DOLLS', 'DOLLY', 'DOLOR',
  'DOLTS', 'DOMED', 'DOMES', 'DONEE', 'DONNA', 'DONOR', 'DONUT', 'DOOMS', 'DOORS', 'DOOZY', 'DOPED', 'DOPER',
  'DOPES', 'DOPEY', 'DORKS', 'DORKY', 'DORMS', 'DOSED', 'DOSER', 'DOSES', 'DOTED', 'DOTER', 'DOTES', 'DOTTY',
  'DOUBT', 'DOUGH', 'DOUSE', 'DOVES', 'DOVEY', 'DOWDY', 'DOWEL', 'DOWER', 'DOWNS', 'DOWNY', 'DOWRY', 'DOWSE',
  'DOXIE', 'DOYEN', 'DOZED', 'DOZEN', 'DOZER', 'DOZES', 'DRABS', 'DRAFT', 'DRAGS', 'DRAIN', 'DRAKE', 'DRAMA',
  'DRAMS', 'DRANK', 'DRAPE', 'DRAWL', 'DRAWN', 'DRAWS', 'DRAYS', 'DREAD', 'DREAM', 'DREAR', 'DRECK', 'DREGS',
  'DRESS', 'DRIBS', 'DRIED', 'DRIER', 'DRIES', 'DRIFT', 'DRILL', 'DRILY', 'DRINK', 'DRIPS', 'DRIVE', 'DROID',
  'DROLL', 'DRONE', 'DROOL', 'DROOP', 'DROPS', 'DROSS', 'DROVE', 'DROWN', 'DRUBS', 'DRUGS', 'DRUID', 'DRUMS',
  'DRUNK', 'DRYAD', 'DRYER', 'DRYLY', 'DUALS', 'DUCAL', 'DUCAT', 'DUCES', 'DUCHY', 'DUCKS', 'DUCKY', 'DUCTS',
  'DUDDY', 'DUDES', 'DUELS', 'DUETS', 'DUFFS', 'DUKES', 'DULLS', 'DULLY', 'DULSE', 'DUMMY', 'DUMPS', 'DUMPY',
  'DUNCE', 'DUNES', 'DUNGS', 'DUNGY', 'DUNKS', 'DUNNO', 'DUOMO', 'DUPED', 'DUPER', 'DUPES', 'DUPLE', 'DURST',
  'DUSKS', 'DUSKY', 'DUSTS', 'DUSTY', 'DUTCH', 'DUVET', 'DWARF', 'DWEEB', 'DWELL', 'DWELT', 'DYADS', 'DYERS',
  'DYING', 'DYKES', 'DYNES', 'EAGER', 'EAGLE', 'EARED', 'EARLS', 'EARLY', 'EARNS', 'EARTH', 'EASED', 'EASEL',
  'EASES', 'EASTS', 'EATEN', 'EATER', 'EAVES', 'EBBED', 'EBONY', 'ECHOS', 'ECLAT', 'EDEMA', 'EDGED', 'EDGER',
  'EDGES', 'EDICT', 'EDIFY', 'EDITS', 'EDUCE', 'EERIE', 'EGADS', 'EGGED', 'EGGER', 'EGRET', 'EIDER', 'EIGHT',
  'EJECT', 'EKING', 'ELAND', 'ELANS', 'ELATE', 'ELBOW', 'ELDER', 'ELECT', 'ELEGY', 'ELFIN', 'ELIDE', 'ELITE',
  'ELOPE', 'ELUDE', 'ELVES', 'EMAIL', 'EMBED', 'EMBER', 'EMCEE', 'EMEND', 'EMERY', 'EMIRS', 'EMITS', 'EMOTE',
  'EMPTY', 'ENACT', 'ENDED', 'ENDER', 'ENDOW', 'ENDUE', 'ENEMA', 'ENEMY', 'ENJOY', 'ENNUI', 'ENROL', 'ENSUE',
  'ENTER', 'ENTRY', 'ENVOI', 'ENVOY', 'EPACT', 'EPEES', 'EPHAH', 'EPHOD', 'EPICS', 'EPOCH', 'EPOXY', 'EPSOM',
  'EQUAL', 'EQUIP', 'ERASE', 'ERECT', 'ERODE', 'ERRED', 'ERROR', 'ERUCT', 'ERUPT', 'ESSAY', 'ESSES', 'ESTER',
  'ESTOP', 'ETEXT', 'ETHER', 'ETHIC', 'ETHOS', 'ETHYL', 'ETUDE', 'EVADE', 'EVENS', 'EVENT', 'EVERY', 'EVICT',
  'EVILS', 'EVOKE', 'EXACT', 'EXALT', 'EXAMS', 'EXCEL', 'EXCON', 'EXEAT', 'EXECS', 'EXERT', 'EXILE', 'EXIST',
  'EXITS', 'EXPAT', 'EXPEL', 'EXPOS', 'EXTOL', 'EXTRA', 'EXUDE', 'EXULT', 'EXURB', 'EYERS', 'EYING', 'EYRIE',
  'FABLE', 'FACED', 'FACER', 'FACES', 'FACET', 'FACIE', 'FACTO', 'FACTS', 'FADDY', 'FADED', 'FADER', 'FADES',
  'FAERY', 'FAGOT', 'FAILS', 'FAINT', 'FAIRE', 'FAIRS', 'FAIRY', 'FAITH', 'FAKED', 'FAKER', 'FAKES', 'FAKIR',
  'FALLS', 'FALSE', 'FAMED', 'FAMES', 'FANCY', 'FANGS', 'FANIN', 'FANNY', 'FARAD', 'FARCE', 'FARED', 'FARES',
  'FARMS', 'FARTS', 'FASTS', 'FATAL', 'FATED', 'FATES', 'FATLY', 'FATSO', 'FATTY', 'FATWA', 'FAULT', 'FAUNA',
  'FAUNS', 'FAVOR', 'FAWNS', 'FAWNY', 'FAXED', 'FAXER', 'FAXES', 'FAZED', 'FAZES', 'FEARS', 'FEAST', 'FEATS',
  'FECAL', 'FECES', 'FEEDS', 'FEELS', 'FEIGN', 'FEINT', 'FEIST', 'FELLA', 'FELLS', 'FELON', 'FELTS', 'FEMME',
  'FEMUR', 'FENCE', 'FENDS', 'FENNY', 'FERAL', 'FERMI', 'FERNS', 'FERNY', 'FERRY', 'FETAL', 'FETCH', 'FETED',
  'FETES', 'FETID', 'FETOR', 'FETUS', 'FEUAR', 'FEUDS', 'FEUED', 'FEVER', 'FEWER', 'FIATS', 'FIBER', 'FIBRE',
  'FICHE', 'FICHU', 'FIEFS', 'FIELD', 'FIEND', 'FIERY', 'FIFES', 'FIFTH', 'FIFTY', 'FIGHT', 'FILAR', 'FILCH',
  'FILED', 'FILER', 'FILES', 'FILET', 'FILLS', 'FILLY', 'FILMS', 'FILMY', 'FILTH', 'FINAL', 'FINCH', 'FINDS',
  'FINED', 'FINER', 'FINES', 'FINIF', 'FINIS', 'FINKS', 'FINNY', 'FIORD', 'FIRED', 'FIRER', 'FIRES', 'FIRMA',
  'FIRMS', 'FIRST', 'FIRTH', 'FISHY', 'FISTS', 'FISTY', 'FITLY', 'FIVER', 'FIVES', 'FIXED', 'FIXER', 'FIXES',
  'FIXIT', 'FIZZY', 'FJORD', 'FLABS', 'FLACK', 'FLAGS', 'FLAIL', 'FLAIR', 'FLAKE', 'FLAKS', 'FLAKY', 'FLAME',
  'FLAMS', 'FLANK', 'FLAPS', 'FLARE', 'FLASH', 'FLASK', 'FLATS', 'FLAWS', 'FLAYS', 'FLEAS', 'FLECK', 'FLEES',
  'FLEET', 'FLESH', 'FLICK', 'FLICS', 'FLIED', 'FLIER', 'FLIES', 'FLING', 'FLINT', 'FLIPS', 'FLIRT', 'FLITS',
  'FLOAT', 'FLOCK', 'FLOES', 'FLOGS', 'FLOOD', 'FLOOR', 'FLOPS', 'FLORA', 'FLOSS', 'FLOUR', 'FLOUT', 'FLOWN',
  'FLOWS', 'FLUBS', 'FLUES', 'FLUFF', 'FLUID', 'FLUKE', 'FLUKY', 'FLUME', 'FLUNG', 'FLUNK', 'FLUSH', 'FLUTE',
  'FLYBY', 'FLYER', 'FOALS', 'FOAMS', 'FOAMY', 'FOCAL', 'FOCUS', 'FOGEY', 'FOGGY', 'FOILS', 'FOIST', 'FOLDS',
  'FOLIA', 'FOLIC', 'FOLIO', 'FOLKS', 'FOLKY', 'FOLLY', 'FONDU', 'FONTS', 'FOODS', 'FOOLS', 'FOOTS', 'FORAY',
  'FORCE', 'FORDS', 'FORES', 'FORGE', 'FORGO', 'FORKS', 'FORKY', 'FORMA', 'FORMS', 'FORTE', 'FORTH', 'FORTS',
  'FORTY', 'FORUM', 'FOSSA', 'FOSSE', 'FOULS', 'FOUND', 'FOUNT', 'FOURS', 'FOVEA', 'FOWLS', 'FOXED', 'FOXES',
  'FOYER', 'FRAIL', 'FRAME', 'FRANC', 'FRANK', 'FRATS', 'FRAUD', 'FRAYS', 'FREAK', 'FREED', 'FREER', 'FREES',
  'FRESH', 'FRETS', 'FRIAR', 'FRIED', 'FRIER', 'FRIES', 'FRIGS', 'FRILL', 'FRISK', 'FRIZZ', 'FROCK', 'FROGS',
  'FROND', 'FRONT', 'FROSH', 'FROST', 'FROTH', 'FROWN', 'FROZE', 'FRUIT', 'FRUMP', 'FRYER', 'FTPED', 'FUCKS',
  'FUDGE', 'FUDGY', 'FUELS', 'FUGAL', 'FUGIT', 'FUGUE', 'FULLS', 'FULLY', 'FUMED', 'FUMER', 'FUMES', 'FUNDS',
  'FUNGI', 'FUNGO', 'FUNKS', 'FUNKY', 'FUNNY', 'FURLS', 'FUROR', 'FURRY', 'FURZE', 'FUSED', 'FUSEE', 'FUSES',
  'FUSSY', 'FUSTY', 'FUTON', 'FUZED', 'FUZES', 'FUZZY', 'GABBY', 'GABLE', 'GAFFE', 'GAFFS', 'GAGES', 'GAILY',
  'GAINS', 'GAITS', 'GALAS', 'GALES', 'GALLS', 'GAMBA', 'GAMED', 'GAMER', 'GAMES', 'GAMEY', 'GAMIC', 'GAMIN',
  'GAMMA', 'GAMUT', 'GANEF', 'GANGS', 'GAOLS', 'GAPED', 'GAPER', 'GAPES', 'GAPPY', 'GARBS', 'GARDE', 'GASES',
  'GASPS', 'GASSY', 'GATED', 'GATES', 'GATOR', 'GAUDY', 'GAUGE', 'GAUNT', 'GAUSS', 'GAUZE', 'GAUZY', 'GAVEL',
  'GAWKS', 'GAWKY', 'GAYER', 'GAYLY', 'GAZED', 'GAZER', 'GAZES', 'GEARS', 'GECKO', 'GEEKS', 'GEESE', 'GELDS',
  'GENES', 'GENET', 'GENIE', 'GENII', 'GENRE', 'GENTS', 'GENUS', 'GEODE', 'GEOID', 'GERMS', 'GESSO', 'GETUP',
  'GHOST', 'GHOTI', 'GHOUL', 'GIANT', 'GIBED', 'GIBER', 'GIBES', 'GIDDY', 'GIFTS', 'GIGAS', 'GIGUE', 'GILDS',
  'GILLS', 'GILTS', 'GIMEL', 'GIMME', 'GIMPS', 'GIMPY', 'GINNY', 'GIPSY', 'GIRDS', 'GIRLS', 'GIRLY', 'GIROS',
  'GIRTH', 'GIRTS', 'GISMO', 'GISTS', 'GIVEN', 'GIVER', 'GIVES', 'GIZMO', 'GLADE', 'GLADS', 'GLAND', 'GLANS',
  'GLARE', 'GLARY', 'GLASS', 'GLAZE', 'GLEAM', 'GLEAN', 'GLEBE', 'GLEES', 'GLENS', 'GLIDE', 'GLINT', 'GLITZ',
  'GLOAT', 'GLOBE', 'GLOBS', 'GLOMS', 'GLOOM', 'GLORY', 'GLOSS', 'GLOVE', 'GLOWS', 'GLUED', 'GLUER', 'GLUES',
  'GLUEY', 'GLUON', 'GLUTS', 'GLYPH', 'GNARL', 'GNASH', 'GNATS', 'GNAWS', 'GNOME', 'GOADS', 'GOALS', 'GOATS',
  'GODLY', 'GOERS', 'GOEST', 'GOETH', 'GOFER', 'GOING', 'GOLDS', 'GOLEM', 'GOLFS', 'GOLLY', 'GONAD', 'GONER',
  'GONGS', 'GONNA', 'GONZO', 'GOODS', 'GOODY', 'GOOEY', 'GOOFS', 'GOOFY', 'GOOKS', 'GOOKY', 'GOONS', 'GOONY',
  'GOOPY', 'GOOSE', 'GOOSY', 'GORED', 'GORES', 'GORGE', 'GORSE', 'GOTHS', 'GOTTA', 'GOUDA', 'GOUGE', 'GOURD',
  'GOUTS', 'GOUTY', 'GOWNS', 'GOYIM', 'GRABS', 'GRACE', 'GRADE', 'GRADS', 'GRAFT', 'GRAIL', 'GRAIN', 'GRAMS',
  'GRAND', 'GRANT', 'GRAPE', 'GRAPH', 'GRAPY', 'GRASP', 'GRASS', 'GRATA', 'GRATE', 'GRAVE', 'GRAVY', 'GRAYS',
  'GRAZE', 'GREAT', 'GREBE', 'GREED', 'GREEK', 'GREEN', 'GREET', 'GREPS', 'GREYS', 'GRIDS', 'GRIEF', 'GRIFT',
  'GRILL', 'GRIME', 'GRIMY', 'GRIND', 'GRINS', 'GRIPE', 'GRIPS', 'GRIST', 'GRITS', 'GROAN', 'GROAT', 'GRODY',
  'GROGS', 'GROIN', 'GROKS', 'GRONK', 'GROOK', 'GROOM', 'GROPE', 'GROSS', 'GROUP', 'GROUT', 'GROVE', 'GROWL',
  'GROWN', 'GROWS', 'GRUBS', 'GRUEL', 'GRUFF', 'GRUMP', 'GRUNT', 'GUANO', 'GUARD', 'GUAVA', 'GUESS', 'GUEST',
  'GUIDE', 'GUILD', 'GUILE', 'GUILT', 'GUISE', 'GULAG', 'GULCH', 'GULES', 'GULFS', 'GULLS', 'GULLY', 'GULPS',
  'GUMBO', 'GUMMY', 'GUNKS', 'GUNKY', 'GUNNY', 'GUPPY', 'GURUS', 'GUSHY', 'GUSTO', 'GUSTS', 'GUSTY', 'GUTSY',
  'GUTTA', 'GUTTY', 'GUYED', 'GWINE', 'GYPPY', 'GYPSY', 'GYROS', 'GYVED', 'GYVES', 'HABIT', 'HACKS', 'HADDA',
  'HADES', 'HADST', 'HAFTA', 'HAFTS', 'HAIKU', 'HAILS', 'HAIRS', 'HAIRY', 'HALED', 'HALER', 'HALES', 'HALLO',
  'HALLS', 'HALMA', 'HALOS', 'HALTS', 'HALVE', 'HAMES', 'HAMMY', 'HAMZA', 'HANDS', 'HANDY', 'HANGS', 'HANKS',
  'HANKY', 'HAPAX', 'HAPLY', 'HAPPY', 'HARDY', 'HAREM', 'HARES', 'HARKS', 'HARMS', 'HARPS', 'HARPY', 'HARRY',
  'HARSH', 'HARTS', 'HARUM', 'HASPS', 'HASTE', 'HASTY', 'HATCH', 'HATED', 'HATER', 'HATES', 'HAULS', 'HAUNT',
  'HAUTE', 'HAVEN', 'HAVES', 'HAVOC', 'HAWED', 'HAWKS', 'HAYED', 'HAYER', 'HAYEY', 'HAZED', 'HAZEL', 'HAZER',
  'HAZES', 'HEADS', 'HEADY', 'HEALS', 'HEAPS', 'HEARD', 'HEARS', 'HEART', 'HEATH', 'HEATS', 'HEAVE', 'HEAVY',
  'HEDGE', 'HEEDS', 'HEELS', 'HEERD', 'HEFTS', 'HEFTY', 'HEIGH', 'HEIRS', 'HEIST', 'HELIX', 'HELLO', 'HELLS',
  'HELMS', 'HELPS', 'HEMPS', 'HEMPY', 'HENCE', 'HENGE', 'HENNA', 'HENRY', 'HERBS', 'HERBY', 'HERDS', 'HEREM',
  'HERES', 'HERON', 'HEROS', 'HERTZ', 'HEWED', 'HEWER', 'HEXAD', 'HEXED', 'HEXER', 'HEXES', 'HICKS', 'HIDER',
  'HIDES', 'HIGHS', 'HIKED', 'HIKER', 'HIKES', 'HILAR', 'HILLS', 'HILLY', 'HILTS', 'HILUM', 'HIMBO', 'HINDS',
  'HINGE', 'HINTS', 'HIPPO', 'HIPPY', 'HIRED', 'HIRER', 'HIRES', 'HITCH', 'HIVED', 'HIVER', 'HIVES', 'HOAGY',
  'HOARD', 'HOARS', 'HOARY', 'HOBBY', 'HOBOS', 'HOCKS', 'HOCUS', 'HODAD', 'HOERS', 'HOGAN', 'HOIST', 'HOKEY',
  'HOKUM', 'HOLDS', 'HOLED', 'HOLER', 'HOLES', 'HOLEY', 'HOLLY', 'HOLON', 'HOMED', 'HOMER', 'HOMES', 'HOMEY',
  'HOMME', 'HOMOS', 'HONED', 'HONER', 'HONES', 'HONEY', 'HONKS', 'HONKY', 'HONOR', 'HOOCH', 'HOODS', 'HOOEY',
  'HOOFS', 'HOOKS', 'HOOKY', 'HOOPS', 'HOOTS', 'HOPED', 'HOPER', 'HOPES', 'HOPPY', 'HORDE', 'HORNS', 'HORNY',
  'HORSE', 'HORSY', 'HOSED', 'HOSES', 'HOSTS', 'HOTEL', 'HOTLY', 'HOUND', 'HOURI', 'HOURS', 'HOUSE', 'HOVEL',
  'HOVER', 'HOWDY', 'HOWLS', 'HUBBA', 'HUBBY', 'HUFFS', 'HUFFY', 'HUGER', 'HULAS', 'HULKS', 'HULKY', 'HULLO',
  'HULLS', 'HUMAN', 'HUMID', 'HUMOR', 'HUMPF', 'HUMPH', 'HUMPS', 'HUMPY', 'HUMUS', 'HUNCH', 'HUNKS', 'HUNKY',
  'HUNTS', 'HURLS', 'HURLY', 'HURRY', 'HURTS', 'HUSKS', 'HUSKY', 'HUSSY', 'HUTCH', 'HUZZA', 'HYDRA', 'HYDRO',
  'HYENA', 'HYING', 'HYMEN', 'HYMNS', 'HYPED', 'HYPER', 'HYPES', 'HYPOS', 'IAMBS', 'ICERS', 'ICHOR', 'ICIER',
  'ICILY', 'ICING', 'ICONS', 'IDEAL', 'IDEAS', 'IDIOM', 'IDIOT', 'IDLED', 'IDLER', 'IDLES', 'IDOLS', 'IDYLL',
  'IDYLS', 'IGLOO', 'IKATS', 'IKONS', 'ILEUM', 'ILEUS', 'ILIAC', 'ILIUM', 'IMAGE', 'IMAGO', 'IMAMS', 'IMBED',
  'IMBUE', 'IMMIX', 'IMPEL', 'IMPLY', 'IMPRO', 'INANE', 'INAPT', 'INCUR', 'INDEX', 'INDIE', 'INEPT', 'INERT',
  'INFER', 'INFIX', 'INFRA', 'INGOT', 'INJUN', 'INKED', 'INKER', 'INLAY', 'INLET', 'INNER', 'INODE', 'INPUT',
  'INSET', 'INTER', 'INTRA', 'INTRO', 'INURE', 'IOCTL', 'IODIC', 'IONIC', 'IOTAS', 'IRATE', 'IRKED', 'IRONS',
  'IRONY', 'ISLES', 'ISLET', 'ISSUE', 'ITCHY', 'ITEMS', 'IVIED', 'IVIES', 'IVORY', 'IXNAY', 'JACKS', 'JADED',
  'JADES', 'JAGGY', 'JAILS', 'JAKES', 'JAMBS', 'JAMMY', 'JANES', 'JAPAN', 'JAUNT', 'JAWED', 'JAZZY', 'JEANS',
  'JEEPS', 'JEERS', 'JELLO', 'JELLS', 'JELLY', 'JENNY', 'JERKS', 'JERKY', 'JERRY', 'JESTS', 'JETTY', 'JEWEL',
  'JIBED', 'JIBER', 'JIBES', 'JIFFS', 'JIFFY', 'JIHAD', 'JILTS', 'JIMMY', 'JINGO', 'JINGS', 'JINKS', 'JINNS',
  'JIVED', 'JIVES', 'JOCKS', 'JOEYS', 'JOHNS', 'JOINS', 'JOINT', 'JOIST', 'JOKED', 'JOKER', 'JOKES', 'JOLLY',
  'JOLTS', 'JOULE', 'JOUST', 'JOWLS', 'JOWLY', 'JOYED', 'JUDGE', 'JUDOS', 'JUICE', 'JUICY', 'JUJUS', 'JUKES',
  'JULEP', 'JUMBO', 'JUMPS', 'JUMPY', 'JUNCO', 'JUNKS', 'JUNKY', 'JUNTA', 'JUROR', 'JUSTE', 'JUTES', 'KABOB',
  'KAIAK', 'KALES', 'KAPOK', 'KAPPA', 'KAPUT', 'KARAT', 'KARMA', 'KAYAK', 'KAYOS', 'KAZOO', 'KEBAB', 'KEBOB',
  'KEELS', 'KEENS', 'KEEPS', 'KEFIR', 'KELLY', 'KELPS', 'KELPY', 'KENAF', 'KEPIS', 'KERBS', 'KERFS', 'KERNS',
  'KETCH', 'KEYED', 'KEYER', 'KHAKI', 'KHANS', 'KICKS', 'KICKY', 'KIDDO', 'KIKES', 'KILLS', 'KILNS', 'KILOS',
  'KILTS', 'KILTY', 'KINDA', 'KINDS', 'KINGS', 'KINKS', 'KINKY', 'KIOSK', 'KIRKS', 'KITED', 'KITES', 'KITHS',
  'KITTY', 'KIVAS', 'KIWIS', 'KLIEG', 'KLUGE', 'KLUGY', 'KLUNK', 'KLUTZ', 'KNACK', 'KNAVE', 'KNEAD', 'KNEED',
  'KNEEL', 'KNEES', 'KNELL', 'KNELT', 'KNIFE', 'KNISH', 'KNITS', 'KNOBS', 'KNOCK', 'KNOLL', 'KNOPS', 'KNOTS',
  'KNOUT', 'KNOWN', 'KNOWS', 'KNURL', 'KOALA', 'KOINE', 'KOOKS', 'KOOKY', 'KOPEK', 'KRAAL', 'KRAUT', 'KRILL',
  'KRONA', 'KRONE', 'KUDOS', 'KUDZU', 'KULAK', 'KYRIE', 'LABEL', 'LABIA', 'LABOR', 'LACED', 'LACER', 'LACES',
  'LACEY', 'LACKS', 'LADED', 'LADEN', 'LADES', 'LADLE', 'LAGER', 'LAIRD', 'LAIRS', 'LAITY', 'LAKER', 'LAKES',
  'LAMAS', 'LAMBS', 'LAMED', 'LAMER', 'LAMES', 'LAMPS', 'LANAI', 'LANCE', 'LANDS', 'LANES', 'LANKY', 'LAPEL',
  'LAPIN', 'LAPIS', 'LAPSE', 'LARCH', 'LARDS', 'LARDY', 'LARGE', 'LARGO', 'LARKS', 'LARVA', 'LASED', 'LASER',
  'LASES', 'LASSO', 'LASTS', 'LATCH', 'LATER', 'LATEX', 'LATHE', 'LATHS', 'LATIN', 'LATUS', 'LAUDE', 'LAUDS',
  'LAUGH', 'LAVAS', 'LAVED', 'LAVER', 'LAVES', 'LAWNS', 'LAWNY', 'LAWZY', 'LAXER', 'LAXLY', 'LAYER', 'LAYUP',
  'LAZED', 'LAZES', 'LEACH', 'LEADS', 'LEAFS', 'LEAFY', 'LEAKS', 'LEAKY', 'LEANS', 'LEANT', 'LEAPS', 'LEAPT',
  'LEARN', 'LEASE', 'LEASH', 'LEAST', 'LEAVE', 'LEDGE', 'LEECH', 'LEEKS', 'LEERS', 'LEERY', 'LEFTS', 'LEFTY',
  'LEGAL', 'LEGGO', 'LEGGY', 'LEGIT', 'LEGOS', 'LEMMA', 'LEMME', 'LEMON', 'LEMUR', 'LENDS', 'LENTO', 'LEPER',
  'LEPTA', 'LETUP', 'LEVEE', 'LEVEL', 'LEVER', 'LEVIS', 'LIARS', 'LIBEL', 'LIBRA', 'LICIT', 'LICKS', 'LIEGE',
  'LIENS', 'LIERS', 'LIEST', 'LIETH', 'LIFER', 'LIFTS', 'LIGHT', 'LIGNE', 'LIKED', 'LIKEN', 'LIKER', 'LIKES',
  'LILAC', 'LILTS', 'LILTY', 'LIMBO', 'LIMBS', 'LIMBY', 'LIMED', 'LIMEN', 'LIMES', 'LIMEY', 'LIMIT', 'LIMNS',
  'LIMOS', 'LIMPS', 'LINED', 'LINEN', 'LINER', 'LINES', 'LINGO', 'LINGS', 'LINKS', 'LINTS', 'LINTY', 'LIONS',
  'LIPID', 'LIPPY', 'LIRAS', 'LISLE', 'LISPS', 'LISTS', 'LITER', 'LITES', 'LITHE', 'LITHO', 'LITRE', 'LIVED',
  'LIVEN', 'LIVER', 'LIVES', 'LIVID', 'LIVRE', 'LLAMA', 'LOADS', 'LOAFS', 'LOAMS', 'LOAMY', 'LOANS', 'LOATH',
  'LOBAR', 'LOBBY', 'LOBED', 'LOBES', 'LOCAL', 'LOCHS', 'LOCKS', 'LOCOS', 'LOCUS', 'LODES', 'LODGE', 'LOESS',
  'LOFTS', 'LOFTY', 'LOGES', 'LOGGY', 'LOGIC', 'LOGIN', 'LOGOS', 'LOINS', 'LOLLS', 'LOLLY', 'LONER', 'LONGS',
  'LOOKS', 'LOOKY', 'LOOMS', 'LOONS', 'LOONY', 'LOOPS', 'LOOPY', 'LOOSE', 'LOOTS', 'LOPED', 'LOPER', 'LOPES',
  'LOPPY', 'LORDS', 'LORDY', 'LORES', 'LORRY', 'LOSER', 'LOSES', 'LOSSY', 'LOTSA', 'LOTTA', 'LOTTO', 'LOTUS',
  'LOUIS', 'LOUSE', 'LOUSY', 'LOUTS', 'LOVED', 'LOVER', 'LOVES', 'LOWED', 'LOWER', 'LOWLY', 'LOXES', 'LOYAL',
  'LUAUS', 'LUBES', 'LUBRA', 'LUCID', 'LUCKS', 'LUCKY', 'LUCRE', 'LULAB', 'LULLS', 'LULUS', 'LUMEN', 'LUMPS',
  'LUMPY', 'LUNAR', 'LUNCH', 'LUNES', 'LUNGE', 'LUNGS', 'LUPUS', 'LURCH', 'LURED', 'LURER', 'LURES', 'LURID',
  'LURKS', 'LUSTS', 'LUSTY', 'LUTED', 'LUTES', 'LUVYA', 'LUXES', 'LYCRA', 'LYING', 'LYMPH', 'LYNCH', 'LYRES',
  'LYRIC', 'MACAW', 'MACED', 'MACER', 'MACES', 'MACHO', 'MACRO', 'MADAM', 'MADLY', 'MAFIA', 'MAGIC', 'MAGMA',
  'MAGNA', 'MAGUS', 'MAHUA', 'MAIDS', 'MAILS', 'MAIMS', 'MAINS', 'MAIZE', 'MAJOR', 'MAKER', 'MAKES', 'MALES',
  'MALLS', 'MALTS', 'MALTY', 'MAMAS', 'MAMBO', 'MAMMA', 'MAMMY', 'MANED', 'MANES', 'MANGE', 'MANGO', 'MANGY',
  'MANIA', 'MANIC', 'MANLY', 'MANNA', 'MANOR', 'MANSE', 'MANTA', 'MAPLE', 'MARCH', 'MARES', 'MARGE', 'MARIA',
  'MARKS', 'MARLS', 'MARRY', 'MARSH', 'MARTS', 'MASER', 'MASHY', 'MASKS', 'MASON', 'MASSE', 'MASTS', 'MATCH',
  'MATED', 'MATER', 'MATES', 'MATEY', 'MATHS', 'MATTE', 'MATZO', 'MAULS', 'MAUVE', 'MAVEN', 'MAVIS', 'MAXIM',
  'MAXIS', 'MAYBE', 'MAYOR', 'MAYST', 'MAZED', 'MAZER', 'MAZES', 'MEADS', 'MEALS', 'MEALY', 'MEANS', 'MEANT',
  'MEANY', 'MEATS', 'MEATY', 'MEBBE', 'MECCA', 'MECUM', 'MEDAL', 'MEDIA', 'MEDIC', 'MEETS', 'MELBA', 'MELDS',
  'MELEE', 'MELON', 'MELTS', 'MEMES', 'MEMOS', 'MENDS', 'MENUS', 'MEOWS', 'MERCY', 'MERGE', 'MERIT', 'MERRY',
  'MERSE', 'MESAS', 'MESNE', 'MESON', 'MESSY', 'METAL', 'METED', 'METER', 'METES', 'METRE', 'METRO', 'MEWED',
  'MEZZO', 'MIAOW', 'MICAS', 'MICKS', 'MICRO', 'MIDDY', 'MIDIS', 'MIDST', 'MIENS', 'MIFFS', 'MIGHT', 'MIKED',
  'MIKES', 'MILCH', 'MILER', 'MILES', 'MILKS', 'MILKY', 'MILLS', 'MIMED', 'MIMEO', 'MIMER', 'MIMES', 'MIMIC',
  'MIMSY', 'MINAS', 'MINCE', 'MINDS', 'MINED', 'MINER', 'MINES', 'MINIM', 'MINIS', 'MINKS', 'MINOR', 'MINTS',
  'MINUS', 'MIRED', 'MIRES', 'MIRTH', 'MISER', 'MISSY', 'MISTS', 'MISTY', 'MITER', 'MITES', 'MITRE', 'MITTS',
  'MIXED', 'MIXER', 'MIXES', 'MIXUP', 'MOANS', 'MOATS', 'MOCHA', 'MOCKS', 'MODAL', 'MODEL', 'MODEM', 'MODES',
  'MODUS', 'MOGUL', 'MOHEL', 'MOIRE', 'MOIST', 'MOLAL', 'MOLAR', 'MOLAS', 'MOLDS', 'MOLDY', 'MOLES', 'MOLLS',
  'MOLLY', 'MOLTO', 'MOLTS', 'MOMMA', 'MOMMY', 'MONAD', 'MONDO', 'MONEY', 'MONIC', 'MONKS', 'MONTE', 'MONTH',
  'MOOCH', 'MOODS', 'MOODY', 'MOOED', 'MOOLA', 'MOONS', 'MOONY', 'MOORS', 'MOOSE', 'MOOTS', 'MOPED', 'MOPER',
  'MOPES', 'MORAL', 'MORAY', 'MOREL', 'MORES', 'MORNS', 'MORON', 'MORPH', 'MORTS', 'MOSEY', 'MOSSY', 'MOSTS',
  'MOTEL', 'MOTES', 'MOTET', 'MOTHS', 'MOTHY', 'MOTIF', 'MOTOR', 'MOTTO', 'MOULD', 'MOULT', 'MOUND', 'MOUNT',
  'MOURN', 'MOUSE', 'MOUSY', 'MOUTH', 'MOVED', 'MOVER', 'MOVES', 'MOVIE', 'MOWED', 'MOWER', 'MOXIE', 'MRADS',
  'MUCHO', 'MUCKS', 'MUCKY', 'MUCUS', 'MUDDY', 'MUFFS', 'MUFTI', 'MUGGY', 'MUJIK', 'MULCH', 'MULCT', 'MULES',
  'MULEY', 'MULLS', 'MUMBO', 'MUMMY', 'MUMPS', 'MUNCH', 'MUNGE', 'MUNGS', 'MUNGY', 'MUONS', 'MURAL', 'MURKS',
  'MURKY', 'MUSED', 'MUSER', 'MUSES', 'MUSHY', 'MUSIC', 'MUSKS', 'MUSKY', 'MUSOS', 'MUSSY', 'MUSTA', 'MUSTS',
  'MUSTY', 'MUTED', 'MUTER', 'MUTES', 'MUTTS', 'MUXES', 'MYLAR', 'MYNAH', 'MYNAS', 'MYRRH', 'MYTHS', 'NABLA',
  'NABOB', 'NACHO', 'NADIR', 'NAIAD', 'NAILS', 'NAIVE', 'NAKED', 'NAMED', 'NAMER', 'NAMES', 'NANNY', 'NAPES',
  'NAPPY', 'NARCO', 'NARCS', 'NARDS', 'NARES', 'NASAL', 'NASTY', 'NATAL', 'NATCH', 'NATES', 'NATTY', 'NAVAL',
  'NAVEL', 'NAVES', 'NEARS', 'NEATH', 'NEATO', 'NECKS', 'NEEDS', 'NEEDY', 'NEGRO', 'NEIGH', 'NEONS', 'NERDS',
  'NERDY', 'NERFS', 'NERTS', 'NERVE', 'NERVY', 'NESTS', 'NEVER', 'NEWEL', 'NEWER', 'NEWLY', 'NEWSY', 'NEWTS',
  'NEXUS', 'NICAD', 'NICER', 'NICHE', 'NICKS', 'NIECE', 'NIFTY', 'NIGHT', 'NIHIL', 'NIMBI', 'NINES', 'NINJA',
  'NINNY', 'NINTH', 'NIPPY', 'NISEI', 'NITER', 'NITRO', 'NITTY', 'NIXED', 'NIXES', 'NIXIE', 'NOBBY', 'NOBLE',
  'NOBLY', 'NODAL', 'NODDY', 'NODES', 'NOELS', 'NOHOW', 'NOIRE', 'NOISE', 'NOISY', 'NOMAD', 'NONCE', 'NONES',
  'NONNY', 'NOOKS', 'NOOKY', 'NOONS', 'NOOSE', 'NORMS', 'NORTH', 'NOSED', 'NOSES', 'NOSEY', 'NOTCH', 'NOTED',
  'NOTER', 'NOTES', 'NOUNS', 'NOVAE', 'NOVAS', 'NOVEL', 'NOWAY', 'NUDER', 'NUDES', 'NUDGE', 'NUDIE', 'NUKED',
  'NUKES', 'NULLS', 'NUMBS', 'NURBS', 'NURSE', 'NUTSY', 'NUTTY', 'NYLON', 'NYMPH', 'OAKEN', 'OAKUM', 'OARED',
  'OASES', 'OASIS', 'OATEN', 'OATHS', 'OBEAH', 'OBESE', 'OBEYS', 'OBITS', 'OBOES', 'OCCUR', 'OCEAN', 'OCHER',
  'OCHRE', 'OCTAL', 'OCTET', 'ODDER', 'ODDLY', 'ODIUM', 'ODORS', 'ODOUR', 'OFFAL', 'OFFED', 'OFFEN', 'OFFER',
  'OFTEN', 'OGLED', 'OGLER', 'OGLES', 'OGRES', 'OHHHH', 'OHMIC', 'OILED', 'OILER', 'OINKS', 'OINKY', 'OKAPI',
  'OKAYS', 'OKRAS', 'OLDEN', 'OLDER', 'OLDIE', 'OLEOS', 'OLIOS', 'OLIVE', 'OMBRE', 'OMEGA', 'OMENS', 'OMITS',
  'ONCET', 'ONION', 'ONSET', 'OODLE', 'OOMPH', 'OOZED', 'OOZES', 'OPALS', 'OPENS', 'OPERA', 'OPINE', 'OPIUM',
  'OPTED', 'OPTIC', 'ORALS', 'ORATE', 'ORBED', 'ORBIT', 'ORCAS', 'ORDER', 'ORGAN', 'ORING', 'ORLON', 'ORTHO',
  'OSIER', 'OTHER', 'OTTER', 'OUGHT', 'OUIJA', 'OUNCE', 'OUSEL', 'OUSTS', 'OUTDO', 'OUTEN', 'OUTER', 'OUTGO',
  'OUTTA', 'OUZEL', 'OVALS', 'OVARY', 'OVATE', 'OVENS', 'OVERS', 'OVERT', 'OVOID', 'OVULE', 'OWEST', 'OWETH',
  'OWING', 'OWLET', 'OWNED', 'OWNER', 'OXBOW', 'OXEYE', 'OXIDE', 'OXLIP', 'OZONE', 'PACED', 'PACER', 'PACES',
  'PACKS', 'PACTS', 'PADDY', 'PADRE', 'PAEAN', 'PAGAN', 'PAGED', 'PAGER', 'PAGES', 'PAILS', 'PAINS', 'PAINT',
  'PAIRS', 'PALED', 'PALER', 'PALES', 'PALLS', 'PALLY', 'PALMS', 'PALMY', 'PALSY', 'PAMPA', 'PANDA', 'PANED',
  'PANEL', 'PANES', 'PANGA', 'PANGS', 'PANIC', 'PANSY', 'PANTS', 'PANTY', 'PAPAL', 'PAPAS', 'PAPAW', 'PAPER',
  'PAPPY', 'PARAS', 'PARCH', 'PARDS', 'PARED', 'PAREN', 'PARER', 'PARES', 'PARKA', 'PARKS', 'PARRY', 'PARSE',
  'PARTS', 'PARTY', 'PASHA', 'PASSE', 'PASTA', 'PASTE', 'PASTS', 'PASTY', 'PATCH', 'PATEN', 'PATER', 'PATES',
  'PATHS', 'PATIO', 'PATSY', 'PATTY', 'PAUSE', 'PAVAN', 'PAVED', 'PAVER', 'PAVES', 'PAWED', 'PAWER', 'PAWKY',
  'PAWLS', 'PAWNS', 'PAYED', 'PAYEE', 'PAYER', 'PEACE', 'PEACH', 'PEAKS', 'PEAKY', 'PEALS', 'PEARL', 'PEARS',
  'PEASE', 'PEATS', 'PEATY', 'PECAN', 'PECKS', 'PEDAL', 'PEEKS', 'PEELS', 'PEENS', 'PEEPS', 'PEERS', 'PEEVE',
  'PEKOE', 'PELTS', 'PENAL', 'PENCE', 'PENDS', 'PENES', 'PENGO', 'PENIS', 'PENNY', 'PEONS', 'PEONY', 'PEPPY',
  'PERCH', 'PERDU', 'PERIL', 'PERKS', 'PERKY', 'PERMS', 'PESKY', 'PESOS', 'PESTO', 'PESTS', 'PETAL', 'PETER',
  'PETIT', 'PETRI', 'PETTY', 'PEWEE', 'PEWIT', 'PFFFT', 'PHAGE', 'PHASE', 'PHIAL', 'PHLOX', 'PHONE', 'PHONY',
  'PHOTO', 'PHYLA', 'PIANO', 'PICAS', 'PICKS', 'PICKY', 'PICOT', 'PIECE', 'PIERS', 'PIETA', 'PIETY', 'PIGGY',
  'PIGMY', 'PIING', 'PIKER', 'PIKES', 'PILAF', 'PILAU', 'PILED', 'PILES', 'PILLS', 'PILOT', 'PIMPS', 'PINCH',
  'PINED', 'PINES', 'PINEY', 'PINGS', 'PINKO', 'PINKS', 'PINKY', 'PINTO', 'PINTS', 'PINUP', 'PIONS', 'PIOUS',
  'PIPED', 'PIPER', 'PIPES', 'PIPET', 'PIQUE', 'PISMO', 'PITAS', 'PITCH', 'PITHS', 'PITHY', 'PITON', 'PIVOT',
  'PIXEL', 'PIXIE', 'PIZZA', 'PLACE', 'PLAID', 'PLAIN', 'PLAIT', 'PLANE', 'PLANK', 'PLANS', 'PLANT', 'PLASH',
  'PLASM', 'PLATE', 'PLATS', 'PLAYA', 'PLAYS', 'PLAZA', 'PLEAD', 'PLEAS', 'PLEAT', 'PLEBE', 'PLEBS', 'PLEIN',
  'PLENA', 'PLIED', 'PLIES', 'PLINK', 'PLODS', 'PLONK', 'PLOPS', 'PLOTS', 'PLOWS', 'PLOYS', 'PLUCK', 'PLUGS',
  'PLUMB', 'PLUME', 'PLUMP', 'PLUMS', 'PLUMY', 'PLUNK', 'PLUSH', 'PLYER', 'POACH', 'POCKS', 'POCKY', 'PODGY',
  'PODIA', 'POEMS', 'POESY', 'POETS', 'POINT', 'POISE', 'POKED', 'POKER', 'POKES', 'POKEY', 'POLAR', 'POLED',
  'POLER', 'POLES', 'POLIO', 'POLIS', 'POLKA', 'POLLS', 'POLLY', 'POLOS', 'POLYP', 'POMPS', 'PONDS', 'PONES',
  'POOCH', 'POOEY', 'POOHS', 'POOLS', 'POOPS', 'POPES', 'POPPY', 'PORCH', 'PORED', 'PORES', 'PORGY', 'PORKS',
  'PORKY', 'PORNO', 'PORTS', 'POSED', 'POSER', 'POSES', 'POSET', 'POSIT', 'POSSE', 'POSTE', 'POSTS', 'POTTY',
  'POUCH', 'POUFS', 'POUND', 'POURS', 'POUTS', 'POWER', 'POXED', 'POXES', 'PRAMS', 'PRANK', 'PRATE', 'PRATS',
  'PRAWN', 'PRAYS', 'PREEN', 'PREPS', 'PRESS', 'PREST', 'PREXY', 'PREYS', 'PRICE', 'PRICK', 'PRIDE', 'PRIED',
  'PRIER', 'PRIES', 'PRIGS', 'PRIMA', 'PRIME', 'PRIMO', 'PRIMP', 'PRIMS', 'PRINK', 'PRINT', 'PRIOR', 'PRISE',
  'PRISM', 'PRIVY', 'PRIZE', 'PROBE', 'PRODS', 'PROEM', 'PROFS', 'PROMO', 'PROMS', 'PRONE', 'PRONG', 'PROOF',
  'PROPS', 'PROSE', 'PROSY', 'PROUD', 'PROVE', 'PROWL', 'PROWS', 'PROXY', 'PRUDE', 'PRUNE', 'PRUTA', 'PRYER',
  'PSALM', 'PSEUD', 'PSHAW', 'PSOAS', 'PSSST', 'PSYCH', 'PUBES', 'PUBIC', 'PUBIS', 'PUCKS', 'PUDGY', 'PUFFS',
  'PUFFY', 'PUKED', 'PUKES', 'PUKKA', 'PULLS', 'PULPS', 'PULPY', 'PULSE', 'PUMAS', 'PUMPS', 'PUNCH', 'PUNKS',
  'PUNKY', 'PUNNY', 'PUNTS', 'PUPAE', 'PUPAL', 'PUPAS', 'PUPIL', 'PUPPY', 'PUREE', 'PURER', 'PURGE', 'PURLS',
  'PURRS', 'PURSE', 'PURTY', 'PUSHY', 'PUSSY', 'PUTTS', 'PUTTY', 'PYGMY', 'PYLON', 'PYRES', 'PYXIE', 'QOPHS',
  'QUACK', 'QUADS', 'QUAFF', 'QUAIL', 'QUAIS', 'QUAKE', 'QUALM', 'QUALS', 'QUARK', 'QUART', 'QUASH', 'QUASI',
  'QUAYS', 'QUEEN', 'QUEER', 'QUELL', 'QUERY', 'QUEST', 'QUEUE', 'QUICK', 'QUIDS', 'QUIET', 'QUIFF', 'QUILL',
  'QUILT', 'QUINT', 'QUIPS', 'QUIPU', 'QUIRE', 'QUIRK', 'QUIRT', 'QUITE', 'QUITS', 'QUOIN', 'QUOIT', 'QUOTA',
  'QUOTE', 'QUOTH', 'RABBI', 'RABID', 'RACED', 'RACER', 'RACES', 'RACKS', 'RADAR', 'RADII', 'RADIO', 'RADIX',
  'RADON', 'RAFTS', 'RAGED', 'RAGES', 'RAIDS', 'RAILS', 'RAINS', 'RAINY', 'RAISE', 'RAJAH', 'RAJAS', 'RAKED',
  'RAKER', 'RAKES', 'RALLY', 'RAMPS', 'RANCH', 'RANDS', 'RANDY', 'RANGE', 'RANGY', 'RANKS', 'RANTS', 'RAPED',
  'RAPER', 'RAPES', 'RAPID', 'RARER', 'RASAE', 'RASPS', 'RASPY', 'RATED', 'RATER', 'RATES', 'RATHS', 'RATIO',
  'RATTY', 'RAVED', 'RAVEL', 'RAVEN', 'RAVER', 'RAVES', 'RAWER', 'RAWLY', 'RAYED', 'RAYON', 'RAZED', 'RAZER',
  'RAZES', 'RAZOR', 'REACH', 'REACT', 'READS', 'READY', 'REALM', 'REALS', 'REAMS', 'REAPS', 'REARM', 'REARS',
  'REBAR', 'REBEL', 'REBID', 'REBOX', 'REBUS', 'REBUT', 'RECAP', 'RECTA', 'RECTO', 'RECUR', 'RECUT', 'REDID',
  'REDIP', 'REDLY', 'REDOX', 'REDUX', 'REEDS', 'REEDY', 'REEFS', 'REEKS', 'REEKY', 'REELS', 'REEVE', 'REFER',
  'REFIT', 'REFIX', 'REFLY', 'REFRY', 'REGAL', 'REHAB', 'REIFY', 'REIGN', 'REINS', 'RELAX', 'RELAY', 'RELET',
  'RELIC', 'REMAN', 'REMAP', 'REMIT', 'REMIX', 'RENAL', 'RENDS', 'RENEW', 'RENTE', 'RENTS', 'REPAY', 'REPEL',
  'REPLY', 'REPRO', 'RERAN', 'RERUN', 'RESAW', 'RESAY', 'RESET', 'RESEW', 'RESIN', 'RESTS', 'RETCH', 'RETRO',
  'RETRY', 'REUSE', 'REVEL', 'REVET', 'REVUE', 'REWED', 'RHEAS', 'RHEUM', 'RHINO', 'RHUMB', 'RHYME', 'RIALS',
  'RIBBY', 'RICED', 'RICER', 'RICES', 'RIDER', 'RIDES', 'RIDGE', 'RIDGY', 'RIFER', 'RIFLE', 'RIFTS', 'RIGHT',
  'RIGID', 'RIGOR', 'RILED', 'RILES', 'RILLE', 'RILLS', 'RIMED', 'RIMER', 'RIMES', 'RINDS', 'RINGS', 'RINKS',
  'RINSE', 'RIOTS', 'RIPEN', 'RIPER', 'RISEN', 'RISER', 'RISES', 'RISKS', 'RISKY', 'RITES', 'RITZY', 'RIVAL',
  'RIVED', 'RIVEN', 'RIVER', 'RIVES', 'RIVET', 'ROACH', 'ROADS', 'ROAMS', 'ROANS', 'ROARS', 'ROAST', 'ROBED',
  'ROBES', 'ROBIN', 'ROBLE', 'ROBOT', 'ROCKS', 'ROCKY', 'RODEO', 'ROGER', 'ROGUE', 'ROIDS', 'ROILS', 'ROILY',
  'ROLES', 'ROLLS', 'ROMAN', 'ROMPS', 'RONDO', 'ROODS', 'ROOFS', 'ROOKS', 'ROOKY', 'ROOMS', 'ROOMY', 'ROOST',
  'ROOTS', 'ROOTY', 'ROPED', 'ROPER', 'ROPES', 'ROSES', 'ROSIN', 'ROTOR', 'ROUGE', 'ROUGH', 'ROUND', 'ROUSE',
  'ROUST', 'ROUTE', 'ROUTS', 'ROVED', 'ROVER', 'ROVES', 'ROWAN', 'ROWDY', 'ROWED', 'ROWER', 'ROYAL', 'RUBES',
  'RUBLE', 'RUCHE', 'RUDDY', 'RUDER', 'RUFFS', 'RUGBY', 'RUING', 'RUINS', 'RULED', 'RULER', 'RULES', 'RUMBA',
  'RUMEN', 'RUMMY', 'RUMOR', 'RUMPS', 'RUNES', 'RUNGS', 'RUNIC', 'RUNNY', 'RUNTS', 'RUNTY', 'RUPEE', 'RURAL',
  'RUSES', 'RUSKS', 'RUSSE', 'RUSTS', 'RUSTY', 'RUTTY', 'SABER', 'SABLE', 'SABRA', 'SABRE', 'SACKS', 'SADLY',
  'SAFER', 'SAFES', 'SAGAS', 'SAGER', 'SAGES', 'SAHIB', 'SAILS', 'SAINT', 'SAITH', 'SAKES', 'SALAD', 'SALES',
  'SALLY', 'SALON', 'SALSA', 'SALTS', 'SALTY', 'SALVE', 'SALVO', 'SAMBA', 'SANDS', 'SANDY', 'SANER', 'SAPPY',
  'SARAN', 'SARGE', 'SARIS', 'SASSY', 'SATED', 'SATES', 'SATIN', 'SATYR', 'SAUCE', 'SAUCY', 'SAUNA', 'SAUTE',
  'SAVED', 'SAVER', 'SAVES', 'SAVOR', 'SAVVY', 'SAWED', 'SAWER', 'SAXES', 'SAYER', 'SCABS', 'SCADS', 'SCALD',
  'SCALE', 'SCALP', 'SCALY', 'SCAMP', 'SCAMS', 'SCANS', 'SCANT', 'SCARE', 'SCARF', 'SCARP', 'SCARS', 'SCARY',
  'SCATS', 'SCENE', 'SCENT', 'SCHMO', 'SCHWA', 'SCION', 'SCOFF', 'SCOLD', 'SCONE', 'SCOOP', 'SCOOT', 'SCOPE',
  'SCOPS', 'SCORE', 'SCORN', 'SCOUR', 'SCOUT', 'SCOWL', 'SCOWS', 'SCRAM', 'SCRAP', 'SCREW', 'SCRIM', 'SCRIP',
  'SCROD', 'SCRUB', 'SCRUM', 'SCUBA', 'SCUDI', 'SCUDO', 'SCUDS', 'SCUFF', 'SCULL', 'SCUMS', 'SCURF', 'SCUSE',
  'SCUZZ', 'SEALS', 'SEAMS', 'SEAMY', 'SEARS', 'SEATS', 'SEBUM', 'SECCO', 'SECTS', 'SEDAN', 'SEDER', 'SEDGE',
  'SEDGY', 'SEDUM', 'SEEDS', 'SEEDY', 'SEEKS', 'SEEMS', 'SEEPS', 'SEERS', 'SEEST', 'SEETH', 'SEGUE', 'SEINE',
  'SEIZE', 'SELAH', 'SELFS', 'SELLS', 'SEMEN', 'SEMIS', 'SENDS', 'SENSE', 'SEPAL', 'SEPIA', 'SEPOY', 'SEPTA',
  'SERFS', 'SERGE', 'SERIF', 'SERUM', 'SERVE', 'SERVO', 'SETUP', 'SEVEN', 'SEVER', 'SEWED', 'SEWER', 'SEXED',
  'SEXES', 'SHACK', 'SHADE', 'SHADS', 'SHADY', 'SHAFT', 'SHAGS', 'SHAHS', 'SHAKE', 'SHAKO', 'SHAKY', 'SHALE',
  'SHALL', 'SHALT', 'SHAME', 'SHAMS', 'SHANK', 'SHAPE', 'SHARD', 'SHARE', 'SHARK', 'SHARP', 'SHAVE', 'SHAWL',
  'SHAWM', 'SHAYS', 'SHEAF', 'SHEAR', 'SHEDS', 'SHEEN', 'SHEEP', 'SHEER', 'SHEET', 'SHEIK', 'SHELF', 'SHELL',
  'SHERD', 'SHEWS', 'SHIED', 'SHIER', 'SHIES', 'SHIFT', 'SHIKI', 'SHILL', 'SHIMS', 'SHINE', 'SHINS', 'SHINY',
  'SHIPS', 'SHIRE', 'SHIRK', 'SHIRR', 'SHIRT', 'SHISH', 'SHITS', 'SHLEP', 'SHMOO', 'SHNOR', 'SHOAL', 'SHOAT',
  'SHOCK', 'SHOED', 'SHOER', 'SHOES', 'SHOJI', 'SHONE', 'SHOOK', 'SHOOS', 'SHOOT', 'SHOPS', 'SHORE', 'SHORN',
  'SHORT', 'SHOTS', 'SHOUT', 'SHOVE', 'SHOWN', 'SHOWS', 'SHOWY', 'SHRED', 'SHREW', 'SHRUB', 'SHRUG', 'SHUCK',
  'SHUNS', 'SHUNT', 'SHUSH', 'SHUTE', 'SHUTS', 'SHYER', 'SHYLY', 'SIBYL', 'SICKO', 'SICKS', 'SIDED', 'SIDES',
  'SIDLE', 'SIEGE', 'SIEVE', 'SIFTS', 'SIGHS', 'SIGHT', 'SIGMA', 'SIGNS', 'SILKS', 'SILKY', 'SILLS', 'SILLY',
  'SILOS', 'SILTS', 'SILTY', 'SINCE', 'SINES', 'SINEW', 'SINGE', 'SINGS', 'SINKS', 'SINUS', 'SIRED', 'SIREE',
  'SIREN', 'SIRES', 'SIRUP', 'SISAL', 'SISSY', 'SITAR', 'SITED', 'SITES', 'SITUS', 'SIXES', 'SIXTH', 'SIXTY',
  'SIZED', 'SIZER', 'SIZES', 'SKATE', 'SKEET', 'SKEIN', 'SKEWS', 'SKIDS', 'SKIED', 'SKIER', 'SKIES', 'SKIFF',
  'SKILL', 'SKIMP', 'SKIMS', 'SKINS', 'SKINT', 'SKIPS', 'SKIRT', 'SKITS', 'SKOAL', 'SKULK', 'SKULL', 'SKUNK',
  'SKYED', 'SLABS', 'SLACK', 'SLAGS', 'SLAIN', 'SLAKE', 'SLAMS', 'SLANG', 'SLANT', 'SLAPS', 'SLASH', 'SLATE',
  'SLATS', 'SLAVE', 'SLAWS', 'SLAYS', 'SLEDS', 'SLEEK', 'SLEEP', 'SLEET', 'SLEPT', 'SLEWS', 'SLICE', 'SLICK',
  'SLIDE', 'SLIER', 'SLILY', 'SLIME', 'SLIMS', 'SLIMY', 'SLING', 'SLINK', 'SLIPS', 'SLITS', 'SLOBS', 'SLOES',
  'SLOGS', 'SLOMO', 'SLOOP', 'SLOPE', 'SLOPS', 'SLOSH', 'SLOTH', 'SLOTS', 'SLOWS', 'SLUED', 'SLUES', 'SLUFF',
  'SLUGS', 'SLUMP', 'SLUMS', 'SLUNG', 'SLUNK', 'SLURP', 'SLURS', 'SLUSH', 'SLUTS', 'SLYER', 'SLYLY', 'SMACK',
  'SMALL', 'SMART', 'SMASH', 'SMEAR', 'SMELL', 'SMELT', 'SMILE', 'SMIRK', 'SMITE', 'SMITH', 'SMOCK', 'SMOGS',
  'SMOKE', 'SMOKY', 'SMOTE', 'SMURF', 'SMUTS', 'SNACK', 'SNAFU', 'SNAGS', 'SNAIL', 'SNAKE', 'SNAKY', 'SNAPS',
  'SNARE', 'SNARF', 'SNARK', 'SNARL', 'SNEAK', 'SNEER', 'SNIDE', 'SNIFF', 'SNIPE', 'SNIPS', 'SNITS', 'SNOBS',
  'SNOOD', 'SNOOK', 'SNOOP', 'SNOOT', 'SNORE', 'SNORT', 'SNOTS', 'SNOUT', 'SNOWS', 'SNOWY', 'SNUBS', 'SNUCK',
  'SNUFF', 'SNUGS', 'SOAKS', 'SOAPS', 'SOAPY', 'SOARS', 'SOBER', 'SOCKO', 'SOCKS', 'SOCLE', 'SODAS', 'SOFAS',
  'SOFTS', 'SOFTY', 'SOGGY', 'SOILS', 'SOLAR', 'SOLED', 'SOLES', 'SOLID', 'SOLON', 'SOLOS', 'SOLUM', 'SOLVE',
  'SOMAS', 'SONAR', 'SONGS', 'SONIC', 'SONLY', 'SONNY', 'SOOTH', 'SOOTS', 'SOOTY', 'SOPPY', 'SORER', 'SORES',
  'SORRY', 'SORTA', 'SORTS', 'SOULS', 'SOUND', 'SOUPS', 'SOUPY', 'SOURS', 'SOUSE', 'SOUTH', 'SOWED', 'SOWER',
  'SOYAS', 'SPACE', 'SPACY', 'SPADE', 'SPAKE', 'SPANG', 'SPANK', 'SPANS', 'SPARE', 'SPARK', 'SPARS', 'SPASM',
  'SPATE', 'SPATS', 'SPAWN', 'SPAYS', 'SPAZZ', 'SPEAK', 'SPEAR', 'SPECK', 'SPECS', 'SPEED', 'SPELL', 'SPELT',
  'SPEND', 'SPENT', 'SPERM', 'SPEWS', 'SPICE', 'SPICS', 'SPICY', 'SPIED', 'SPIEL', 'SPIER', 'SPIES', 'SPIFF',
  'SPIKE', 'SPIKY', 'SPILL', 'SPILT', 'SPINA', 'SPINE', 'SPINS', 'SPINY', 'SPIRE', 'SPITE', 'SPITS', 'SPITZ',
  'SPIVS', 'SPLAT', 'SPLAY', 'SPLIT', 'SPOIL', 'SPOKE', 'SPOOF', 'SPOOK', 'SPOOL', 'SPOON', 'SPOOR', 'SPORE',
  'SPORT', 'SPOTS', 'SPOUT', 'SPRAT', 'SPRAY', 'SPREE', 'SPRIG', 'SPRIT', 'SPROG', 'SPRUE', 'SPUDS', 'SPUED',
  'SPUME', 'SPUMY', 'SPUNK', 'SPURN', 'SPURS', 'SPURT', 'SPUTA', 'SQUAB', 'SQUAD', 'SQUAT', 'SQUAW', 'SQUIB',
  'SQUID', 'STABS', 'STACK', 'STAFF', 'STAGE', 'STAGS', 'STAGY', 'STAID', 'STAIN', 'STAIR', 'STAKE', 'STALE',
  'STALK', 'STALL', 'STAMP', 'STAND', 'STANK', 'STAPH', 'STARE', 'STARK', 'STARS', 'START', 'STASH', 'STATE',
  'STATS', 'STAVE', 'STAYS', 'STEAD', 'STEAK', 'STEAL', 'STEAM', 'STEED', 'STEEL', 'STEEP', 'STEER', 'STEIN',
  'STELA', 'STELE', 'STEMS', 'STENO', 'STEPS', 'STERN', 'STETS', 'STEWS', 'STICK', 'STIED', 'STIES', 'STIFF',
  'STILE', 'STILL', 'STILT', 'STING', 'STINK', 'STINT', 'STIRS', 'STOAE', 'STOAS', 'STOAT', 'STOCK', 'STOGY',
  'STOIC', 'STOKE', 'STOLE', 'STOMA', 'STOMP', 'STONE', 'STONY', 'STOOD', 'STOOL', 'STOOP', 'STOPS', 'STORE',
  'STORK', 'STORM', 'STORY', 'STOUP', 'STOUT', 'STOVE', 'STOWS', 'STRAP', 'STRAW', 'STRAY', 'STREP', 'STREW',
  'STRIP', 'STROP', 'STRUM', 'STRUT', 'STUBS', 'STUCK', 'STUDS', 'STUDY', 'STUFF', 'STUMP', 'STUNG', 'STUNK',
  'STUNS', 'STUNT', 'STYES', 'STYLE', 'STYLI', 'SUAVE', 'SUCKS', 'SUDSY', 'SUEDE', 'SUERS', 'SUETS', 'SUETY',
  'SUGAR', 'SUING', 'SUITE', 'SUITS', 'SULFA', 'SULKS', 'SULKY', 'SULLY', 'SUMAC', 'SUMMA', 'SUMPS', 'SUNNY',
  'SUNUP', 'SUPER', 'SUPES', 'SUPRA', 'SURAS', 'SURDS', 'SURER', 'SURFS', 'SURGE', 'SURLY', 'SUSHI', 'SUTRA',
  'SWABS', 'SWAGS', 'SWAIN', 'SWAMI', 'SWAMP', 'SWANK', 'SWANS', 'SWAPS', 'SWARD', 'SWARE', 'SWARF', 'SWARM',
  'SWART', 'SWASH', 'SWATH', 'SWATS', 'SWAYS', 'SWEAR', 'SWEAT', 'SWEDE', 'SWEEP', 'SWEET', 'SWELL', 'SWEPT',
  'SWIFT', 'SWIGS', 'SWILL', 'SWIMS', 'SWINE', 'SWING', 'SWIPE', 'SWIRL', 'SWISH', 'SWISS', 'SWIVE', 'SWOON',
  'SWOOP', 'SWORD', 'SWORE', 'SWORN', 'SWUNG', 'SYLPH', 'SYNCH', 'SYNCS', 'SYNOD', 'SYRUP', 'TABBY', 'TABLE',
  'TABOO', 'TABOR', 'TABUS', 'TACET', 'TACIT', 'TACKS', 'TACKY', 'TACOS', 'TACTS', 'TAELS', 'TAFFY', 'TAGUA',
  'TAILS', 'TAINT', 'TAKEN', 'TAKER', 'TAKES', 'TALCS', 'TALES', 'TALKS', 'TALKY', 'TALLY', 'TALON', 'TALUS',
  'TAMED', 'TAMER', 'TAMES', 'TAMPS', 'TANGO', 'TANGS', 'TANGY', 'TANKS', 'TANSY', 'TAPED', 'TAPER', 'TAPES',
  'TAPIR', 'TAPIS', 'TARDY', 'TARED', 'TARES', 'TARNS', 'TAROS', 'TAROT', 'TARPS', 'TARRY', 'TARTS', 'TASKS',
  'TASTE', 'TASTY', 'TATER', 'TATTY', 'TAUNT', 'TAUPE', 'TAWNY', 'TAXED', 'TAXER', 'TAXES', 'TAXIS', 'TAXOL',
  'TAXON', 'TEACH', 'TEAKS', 'TEALS', 'TEAMS', 'TEARS', 'TEARY', 'TEASE', 'TEATS', 'TECHS', 'TECHY', 'TECUM',
  'TEDDY', 'TEEMS', 'TEENS', 'TEENY', 'TEETH', 'TELEX', 'TELLS', 'TELLY', 'TEMPI', 'TEMPO', 'TEMPS', 'TEMPT',
  'TENCH', 'TENDS', 'TENET', 'TENON', 'TENOR', 'TENSE', 'TENTH', 'TENTS', 'TEPEE', 'TEPID', 'TERCE', 'TERMS',
  'TERNS', 'TERRA', 'TERRY', 'TERSE', 'TESLA', 'TESTS', 'TESTY', 'TETRA', 'TEXAS', 'TEXTS', 'THANE', 'THANK',
  'THANX', 'THATS', 'THAWS', 'THEES', 'THEFT', 'THEIR', 'THEME', 'THENS', 'THERE', 'THERM', 'THESE', 'THETA',
  'THEWS', 'THICK', 'THIEF', 'THIGH', 'THINE', 'THING', 'THINK', 'THINS', 'THIRD', 'THONG', 'THORN', 'THOSE',
  'THOUS', 'THREE', 'THREW', 'THROB', 'THROE', 'THROW', 'THRUM', 'THUDS', 'THUGS', 'THUMB', 'THUMP', 'THUNK',
  'THWAP', 'THYME', 'TIARA', 'TIBIA', 'TICKS', 'TIDAL', 'TIDED', 'TIDES', 'TIERS', 'TIFFS', 'TIGER', 'TIGHT',
  'TIKES', 'TIKIS', 'TILDE', 'TILED', 'TILER', 'TILES', 'TILLS', 'TILTH', 'TILTS', 'TIMED', 'TIMER', 'TIMES',
  'TIMID', 'TINES', 'TINGE', 'TINGS', 'TINNY', 'TINTS', 'TIPPY', 'TIPSY', 'TIRED', 'TIRES', 'TIROS', 'TITAN',
  'TITER', 'TITHE', 'TITLE', 'TITRE', 'TITTY', 'TIZZY', 'TOADS', 'TOADY', 'TOAST', 'TODAY', 'TODDY', 'TOFFS',
  'TOFFY', 'TOGAS', 'TOILE', 'TOILS', 'TOKED', 'TOKEN', 'TOKER', 'TOKES', 'TOLLS', 'TOMBS', 'TOMES', 'TOMMY',
  'TONAL', 'TONED', 'TONER', 'TONES', 'TONGS', 'TONIC', 'TOOLS', 'TOONS', 'TOOTH', 'TOOTS', 'TOPAZ', 'TOPED',
  'TOPER', 'TOPES', 'TOPIC', 'TOPOI', 'TOPOS', 'TOQUE', 'TORAH', 'TORCH', 'TORIC', 'TORSI', 'TORSO', 'TORTE',
  'TORTS', 'TORUS', 'TOTAL', 'TOTED', 'TOTEM', 'TOTER', 'TOTES', 'TOTTY', 'TOUCH', 'TOUGH', 'TOURS', 'TOUTS',
  'TOVES', 'TOWED', 'TOWEL', 'TOWER', 'TOWNS', 'TOXIC', 'TOXIN', 'TOYED', 'TOYER', 'TOYON', 'TRACE', 'TRACK',
  'TRACT', 'TRADE', 'TRAIL', 'TRAIN', 'TRAIT', 'TRAMP', 'TRAMS', 'TRANS', 'TRAPS', 'TRASH', 'TRAWL', 'TRAYS',
  'TREAD', 'TREAP', 'TREAT', 'TREED', 'TREES', 'TREKS', 'TREND', 'TRESS', 'TREWS', 'TREYS', 'TRIAD', 'TRIAL',
  'TRIBE', 'TRIBS', 'TRICE', 'TRICK', 'TRIED', 'TRIER', 'TRIES', 'TRIKE', 'TRILL', 'TRIMS', 'TRIOS', 'TRIPE',
  'TRIPS', 'TRITE', 'TROLL', 'TROMP', 'TROOP', 'TROTH', 'TROTS', 'TROUT', 'TROVE', 'TROWS', 'TRUCE', 'TRUCK',
  'TRUED', 'TRUER', 'TRUES', 'TRULY', 'TRUMP', 'TRUNK', 'TRUSS', 'TRUST', 'TRUTH', 'TRYST', 'TSARS', 'TUANS',
  'TUBAL', 'TUBAS', 'TUBBY', 'TUBED', 'TUBER', 'TUBES', 'TUCKS', 'TUFAS', 'TUFTS', 'TUFTY', 'TULIP', 'TULLE',
  'TUMMY', 'TUMOR', 'TUNAS', 'TUNED', 'TUNER', 'TUNES', 'TUNIC', 'TUNNY', 'TUPLE', 'TURBO', 'TURDS', 'TURDY',
  'TURFS', 'TURFY', 'TURNS', 'TURPS', 'TUSKS', 'TUSKY', 'TUTOR', 'TUTTI', 'TUTUS', 'TUXES', 'TWAIN', 'TWANG',
  'TWATS', 'TWEAK', 'TWEED', 'TWEET', 'TWERP', 'TWICE', 'TWIGS', 'TWILL', 'TWINE', 'TWINK', 'TWINS', 'TWINY',
  'TWIRL', 'TWIRP', 'TWIST', 'TWITS', 'TWIXT', 'TYING', 'TYKES', 'TYPAL', 'TYPED', 'TYPES', 'TYPOS', 'TYRES',
  'TYROS', 'TZARS', 'UDDER', 'UKASE', 'ULCER', 'ULNAR', 'ULNAS', 'ULTRA', 'UMBEL', 'UMBER', 'UMBRA', 'UMIAK',
  'UMPED', 'UMPTY', 'UNAPT', 'UNARC', 'UNARM', 'UNARY', 'UNATE', 'UNBAN', 'UNBAR', 'UNBOX', 'UNCAP', 'UNCLE',
  'UNCUT', 'UNDER', 'UNDID', 'UNDUE', 'UNFED', 'UNFIT', 'UNFIX', 'UNHIP', 'UNHIT', 'UNIFY', 'UNION', 'UNITE',
  'UNITS', 'UNITY', 'UNJAM', 'UNLIT', 'UNMAN', 'UNMAP', 'UNMET', 'UNPEG', 'UNPIN', 'UNRIG', 'UNSAY', 'UNSEE',
  'UNSET', 'UNSEW', 'UNSEX', 'UNTIE', 'UNTIL', 'UNWED', 'UNWON', 'UNZIP', 'UPEND', 'UPPED', 'UPPER', 'UPSET',
  'URBAN', 'UREAS', 'URGED', 'URGER', 'URGES', 'URINE', 'USAGE', 'USERS', 'USHER', 'USING', 'USUAL', 'USURP',
  'USURY', 'UTERI', 'UTERO', 'UTTER', 'UVULA', 'VACUA', 'VACUO', 'VAGUE', 'VAGUS', 'VAILS', 'VALES', 'VALET',
  'VALID', 'VALOR', 'VALUE', 'VALVE', 'VAMPS', 'VANED', 'VANES', 'VAPES', 'VAPID', 'VAPOR', 'VARIA', 'VASES',
  'VAULT', 'VAUNT', 'VEALS', 'VEEPS', 'VEERS', 'VEGAN', 'VEILS', 'VEINS', 'VEINY', 'VELAR', 'VELDS', 'VELDT',
  'VENAL', 'VENDS', 'VENOM', 'VENTS', 'VENUE', 'VERBS', 'VERGE', 'VERSA', 'VERSE', 'VERSO', 'VERST', 'VERVE',
  'VESTS', 'VETCH', 'VEXED', 'VEXES', 'VIALS', 'VIAND', 'VIBES', 'VICAR', 'VICES', 'VIDEO', 'VIERS', 'VIEWS',
  'VIGIL', 'VIGOR', 'VILER', 'VILLA', 'VILLE', 'VILLI', 'VINCA', 'VINED', 'VINES', 'VINYL', 'VIOLA', 'VIOLS',
  'VIPER', 'VIRAL', 'VIREO', 'VIRES', 'VIRUS', 'VISAS', 'VISED', 'VISES', 'VISIT', 'VISOR', 'VISTA', 'VITAE',
  'VITAL', 'VITAM', 'VITAS', 'VITRO', 'VIVAS', 'VIVID', 'VIVRE', 'VIXEN', 'VIZOR', 'VOCAB', 'VOCAL', 'VODKA',
  'VOGUE', 'VOICE', 'VOIDS', 'VOILA', 'VOILE', 'VOLTS', 'VOMIT', 'VOTED', 'VOTER', 'VOTES', 'VOUCH', 'VOWED',
  'VOWEL', 'VOWER', 'VOXEL', 'VROOM', 'VULVA', 'VYING', 'WACKO', 'WACKY', 'WADED', 'WADER', 'WADES', 'WADIS',
  'WAFER', 'WAFTS', 'WAGED', 'WAGER', 'WAGES', 'WAGON', 'WAHOO', 'WAIFS', 'WAILS', 'WAIST', 'WAITS', 'WAIVE',
  'WAKED', 'WAKEN', 'WAKER', 'WAKES', 'WALED', 'WALES', 'WALKS', 'WALLS', 'WALTZ', 'WANDS', 'WANED', 'WANES',
  'WANLY', 'WANNA', 'WANTA', 'WANTS', 'WARDS', 'WARES', 'WARMS', 'WARNS', 'WARPS', 'WARTS', 'WARTY', 'WASHY',
  'WASPS', 'WASPY', 'WASSA', 'WASTE', 'WATCH', 'WATER', 'WATSA', 'WATTS', 'WAVED', 'WAVER', 'WAVES', 'WAXED',
  'WAXEN', 'WAXER', 'WAXES', 'WAZOO', 'WEALD', 'WEALS', 'WEANS', 'WEARS', 'WEARY', 'WEAVE', 'WEBBY', 'WEBER',
  'WEDGE', 'WEDGY', 'WEEDS', 'WEEDY', 'WEEKS', 'WEENY', 'WEEPS', 'WEEPY', 'WEEST', 'WEFTS', 'WEIGH', 'WEIRD',
  'WEIRS', 'WELCH', 'WELDS', 'WELLS', 'WELSH', 'WELTS', 'WENCH', 'WENDS', 'WESTS', 'WETLY', 'WHACK', 'WHALE',
  'WHAMS', 'WHANG', 'WHARF', 'WHATS', 'WHEAL', 'WHEAT', 'WHEEE', 'WHEEL', 'WHELK', 'WHELM', 'WHELP', 'WHENS',
  'WHERE', 'WHETS', 'WHEWS', 'WHEYS', 'WHICH', 'WHIFF', 'WHILE', 'WHIMS', 'WHINE', 'WHINY', 'WHIPS', 'WHIPT',
  'WHIRL', 'WHIRR', 'WHIRS', 'WHISH', 'WHISK', 'WHIST', 'WHITE', 'WHITS', 'WHIZZ', 'WHOAS', 'WHOLE', 'WHOMP',
  'WHOOO', 'WHOOP', 'WHOPS', 'WHORE', 'WHORL', 'WHOSE', 'WHOSO', 'WHUMP', 'WICKS', 'WIDEN', 'WIDER', 'WIDOW',
  'WIDTH', 'WIELD', 'WIFEY', 'WILCO', 'WILDS', 'WILED', 'WILES', 'WILLS', 'WILTS', 'WIMPS', 'WIMPY', 'WINCE',
  'WINCH', 'WINDS', 'WINDY', 'WINED', 'WINES', 'WINEY', 'WINGS', 'WINKS', 'WINOS', 'WIPED', 'WIPER', 'WIPES',
  'WIRED', 'WIRER', 'WIRES', 'WISED', 'WISER', 'WISES', 'WISPS', 'WISPY', 'WISTS', 'WITCH', 'WITHS', 'WITTY',
  'WIVES', 'WIZEN', 'WOKEN', 'WOLDS', 'WOMAN', 'WOMBS', 'WOMEN', 'WONKS', 'WONKY', 'WONTS', 'WOODS', 'WOODY',
  'WOOED', 'WOOER', 'WOOFS', 'WOOLS', 'WOOLY', 'WOOSH', 'WOOZY', 'WORDS', 'WORDY', 'WORKS', 'WORLD', 'WORMS',
  'WORMY', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WORTS', 'WOULD', 'WOUND', 'WOVEN', 'WOWED', 'WOWEE', 'WRACK',
  'WRAPS', 'WRATH', 'WREAK', 'WRECK', 'WRENS', 'WREST', 'WRIER', 'WRING', 'WRIST', 'WRITE', 'WRITS', 'WRONG',
  'WROTE', 'WROTH', 'WRUNG', 'WRYER', 'WRYLY', 'WURST', 'XENON', 'XEROX', 'XORED', 'XYLEM', 'YACHT', 'YAHOO',
  'YANKS', 'YARDS', 'YARNS', 'YAWED', 'YAWLS', 'YAWNS', 'YAWNY', 'YAWPS', 'YEARN', 'YEARS', 'YEAST', 'YECCH',
  'YELLA', 'YELLS', 'YELPS', 'YENTA', 'YERBA', 'YESES', 'YIELD', 'YIKES', 'YIPES', 'YOBBO', 'YODEL', 'YOGAS',
  'YOGIC', 'YOGIS', 'YOKED', 'YOKEL', 'YOKES', 'YOLKS', 'YOLKY', 'YORES', 'YOUNG', 'YOURN', 'YOURS', 'YOUSE',
  'YOUTH', 'YOWLS', 'YOYOS', 'YUCCA', 'YUCKY', 'YUKKY', 'YULES', 'YUMMY', 'YURTS', 'ZAPPY',   'ZONAL', 'ZONED', 'ZONES', 'ZONKS', 'ZOOEY', 'ZOOKS', 'ZOOMS', 'ZOWIE'
]);

// Helper to get daily puzzle based on date
export function getDailyPuzzle(date: Date = new Date()): { puzzle: DailyPuzzle; index: number; dateString: string } {
  // Use local timezone date string as seed
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;
  
  // Create a stable hash based on date string
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = dateString.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash) % DAILY_PUZZLES.length;
  return {
    puzzle: DAILY_PUZZLES[index],
    index: index + 1, // 1-indexed for puzzle numbers
    dateString
  };
}

// Helper to get archive puzzles (ordered sequentially)
export function getArchivePuzzles(): { dateString: string; puzzle: DailyPuzzle; number: number }[] {
  const result: { dateString: string; puzzle: DailyPuzzle; number: number }[] = [];
  const today = new Date();
  
  // Return the last 30 days as archive options
  for (let i = 1; i <= 30; i++) {
    const prevDate = new Date();
    prevDate.setDate(today.getDate() - i);
    
    const { puzzle, index, dateString } = getDailyPuzzle(prevDate);
    result.push({
      dateString,
      puzzle,
      number: index
    });
  }
  
  return result;
}
