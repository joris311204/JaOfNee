// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Lief Schatje",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "De belangrijkste vraag van je leven😀​😍​🤔​ ",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🦕​', '🦖​',]                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Ben je verliefd op me??????",                                    // First interaction
            yesBtn: "WAT NATUURLIJK MAFKEES",                                             // Text for "Yes" button
            noBtn: "WAT DE HELLY NATUURLIJK",                                               // Text for "No" button
            secretAnswer: "JA DUH + gratis kusje als je op mij klikt"           // Secret hover message
        },
        second: {
            text: "Hoe verliefd ben je op mee???????????????",                          // For the love meter
            startText: "ZO VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEL",                                   // Text before the percentage
            nextBtn: "Klik op mij voor nog een kusje, maar alleen als je klaar bent met de slider"                                         // Text for the next button
        },
        third: {
            text: "WIL JE MIJN VALENTIJN ZIJN???????!!?!?!?!?!!? PLEAAAAAAAASSEEEE 🌹", // The big question!
            yesBtn: "OMG JA JE BENT MIJN ALLES",                                             // Text for "Yes" button
            noBtn: "nee ieuw"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "wat de flip das heel veel, misschien hou jij toch het allermeest van mij❓​‼️",  // Shows when they go past 5000%
        high: "IK HOU NOG STEEDS HET ALLERMEEST VAN JOU 😈​😈​😈​",              // Shows when they go past 1000%
        normal: "WAJOW DAS VEEL 😲​😲​😲"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YAAAAHOOOOOOOOOOOOOOOO ",
        message: "HET IS NU TIJD VOOR JE TWEE GRATIS KUSJESSSSS",
        emojis: "🦕​🦖​🫦​❤️​🫂​"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffb6c1",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffec5c",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#731cb5",     // Button color (should stand out against the background)
        buttonHover: "#ca9aef",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#f3e9fc"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/drpnjex7p/video/upload/v1769605736/Helpless_djpdhv.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
