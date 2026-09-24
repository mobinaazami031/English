/* =========================================================
   ROBO: MISSION FUTURE
   JavaScript compatible with the provided index.html
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DATA
    ===================================================== */

    const missions = [
        {
            id: 0,
            number: "01",
            title: "Energy Run",
            subtitle: "Clean Energy",
            icon: "⚡",

            lessons: [
                {
                    title: "What is Clean Energy?",
                    text: "Clean energy comes from natural sources, like sunlight and wind.",
                    easy: "Clean energy comes from nature.",
                    key: "Clean energy is energy from natural sources.",
                    vocabulary: "clean — natural — energy",
                    icon: "⚡"
                },
                {
                    title: "Solar Energy",
                    text: "Solar energy comes from the sun. Solar panels change sunlight into electricity.",
                    easy: "The sun gives us solar energy.",
                    key: "Solar panels use sunlight to make electricity.",
                    vocabulary: "solar — sun — electricity",
                    icon: "☀️"
                },
                {
                    title: "Wind Energy",
                    text: "Wind turbines use moving air to make clean electricity.",
                    easy: "Wind can make electricity.",
                    key: "Wind turbines turn wind into electricity.",
                    vocabulary: "wind — turbine — power",
                    icon: "🌬️"
                }
            ],

            quiz: {
                question: "Which source of energy comes from the sun?",
                answers: [
                    ["wind", "A — Wind"],
                    ["solar", "B — Solar"],
                    ["rock", "C — Rock"]
                ],
                correct: "solar",
                boost: "Solar energy comes from the sun.",
                easy: "Solar energy is energy from the sun."
            },

            gameTitle: "Energy Run",
            gameGoal: "Collect clean energy!",
            gameItems: ["☀️", "⚡", "🌱", "💧", "⚡", "☀️"]
        },

        {
            id: 1,
            number: "02",
            title: "AI Lab",
            subtitle: "Artificial Intelligence",
            icon: "🧠",

            lessons: [
                {
                    title: "What is AI?",
                    text: "Artificial intelligence, or AI, helps computers learn and solve problems.",
                    easy: "AI helps computers learn.",
                    key: "AI helps computers learn from information.",
                    vocabulary: "artificial — intelligence — learn",
                    icon: "🧠"
                },
                {
                    title: "AI Around Us",
                    text: "We can find AI in phones, games, search engines, and many smart devices.",
                    easy: "AI is used in many smart devices.",
                    key: "AI is already part of everyday technology.",
                    vocabulary: "phone — smart — device",
                    icon: "📱"
                },
                {
                    title: "AI and People",
                    text: "AI can help people work faster, but people still make important decisions.",
                    easy: "AI helps people, but people make decisions.",
                    key: "AI is a tool that can help people.",
                    vocabulary: "help — people — decision",
                    icon: "🤝"
                }
            ],

            quiz: {
                question: "What can AI help computers do?",
                answers: [
                    ["sleep", "A — Sleep"],
                    ["learn", "B — Learn"],
                    ["eat", "C — Eat"]
                ],
                correct: "learn",
                boost: "AI can help computers learn from information.",
                easy: "AI helps computers learn."
            },

            gameTitle: "AI Lab",
            gameGoal: "Collect smart data!",
            gameItems: ["🧠", "💡", "💻", "🔵", "🧠", "💡"]
        },

        {
            id: 2,
            number: "03",
            title: "Smart Home",
            subtitle: "Smart Technology",
            icon: "🏠",

            lessons: [
                {
                    title: "What is a Smart Home?",
                    text: "A smart home uses connected devices to make everyday life easier.",
                    easy: "A smart home uses smart devices.",
                    key: "Smart devices can connect and work together.",
                    vocabulary: "smart — home — device",
                    icon: "🏠"
                },
                {
                    title: "Smart Devices",
                    text: "Smart lights, speakers, cameras, and thermostats can connect to a network.",
                    easy: "Many home devices can connect to the internet.",
                    key: "Smart devices can communicate through a network.",
                    vocabulary: "light — speaker — camera",
                    icon: "💡"
                },
                {
                    title: "The Future Home",
                    text: "Future homes may save energy and automatically help people with daily tasks.",
                    easy: "Future homes can save energy.",
                    key: "Smart technology can make homes more efficient.",
                    vocabulary: "future — save — efficient",
                    icon: "🏡"
                }
            ],

            quiz: {
                question: "What can a smart home use?",
                answers: [
                    ["smart devices", "A — Smart devices"],
                    ["only books", "B — Only books"],
                    ["only bicycles", "C — Only bicycles"]
                ],
                correct: "smart devices",
                boost: "Smart homes use connected smart devices.",
                easy: "Smart homes use smart devices."
            },

            gameTitle: "Smart Home",
            gameGoal: "Connect smart devices!",
            gameItems: ["💡", "📱", "📷", "🔌", "🏠", "💡"]
        },

        {
            id: 3,
            number: "04",
            title: "Future Road",
            subtitle: "Self-Driving Cars",
            icon: "🚗",

            lessons: [
                {
                    title: "What is a Self-Driving Car?",
                    text: "A self-driving car uses cameras, sensors, and computers to understand the road.",
                    easy: "A self-driving car can understand the road.",
                    key: "Sensors and computers help the car understand its surroundings.",
                    vocabulary: "car — sensor — road",
                    icon: "🚗"
                },
                {
                    title: "How Does It Work?",
                    text: "Sensors collect information about other cars, people, signs, and the road.",
                    easy: "Sensors collect information.",
                    key: "Sensors help cars see what is around them.",
                    vocabulary: "sensor — information — sign",
                    icon: "📡"
                },
                {
                    title: "The Future of Driving",
                    text: "Self-driving technology may change transportation and help people travel in new ways.",
                    easy: "Future cars may drive themselves.",
                    key: "Self-driving technology could change transportation.",
                    vocabulary: "drive — travel — transportation",
                    icon: "🛣️"
                }
            ],

            quiz: {
                question: "What helps a self-driving car understand the road?",
                answers: [
                    ["sensors", "A — Sensors"],
                    ["books", "B — Books"],
                    ["paint", "C — Paint"]
                ],
                correct: "sensors",
                boost: "Sensors help self-driving cars understand their surroundings.",
                easy: "Sensors help the car see the road."
            },

            gameTitle: "Future Road",
            gameGoal: "Avoid obstacles and reach the future!",
            gameItems: ["🚦", "⚡", "🛣️", "🔋", "🚦", "⭐"]
        },

        {
            id: 4,
            number: "05",
            title: "Save the Future",
            subtitle: "Technology & Environment",
            icon: "🌍",

            lessons: [
                {
                    title: "Technology and Nature",
                    text: "Technology can help people protect nature and use resources more carefully.",
                    easy: "Technology can help nature.",
                    key: "Technology can help protect the environment.",
                    vocabulary: "nature — protect — technology",
                    icon: "🌍"
                },
                {
                    title: "Green Technology",
                    text: "Solar panels, electric cars, and smart systems can help reduce pollution.",
                    easy: "Green technology can reduce pollution.",
                    key: "Clean technology can support a healthier environment.",
                    vocabulary: "green — pollution — electric",
                    icon: "🌱"
                },
                {
                    title: "Our Future",
                    text: "The future depends on how people use technology and care for our planet.",
                    easy: "People can use technology responsibly.",
                    key: "Technology and responsible choices can shape our future.",
                    vocabulary: "future — planet — responsible",
                    icon: "🌎"
                }
            ],

            quiz: {
                question: "What can green technology help reduce?",
                answers: [
                    ["pollution", "A — Pollution"],
                    ["sunlight", "B — Sunlight"],
                    ["trees", "C — Trees"]
                ],
                correct: "pollution",
                boost: "Green technology can help reduce pollution.",
                easy: "Green technology can make pollution lower."
            },

            gameTitle: "Save the Future",
            gameGoal: "Collect green energy and save the planet!",
            gameItems: ["🌱", "🌍", "♻️", "☀️", "🌳", "💧"]
        }
    ];


    /* =====================================================
       STATE
    ===================================================== */

    let currentMission = 0;
    let currentLesson = 0;

    let totalXP = Number(localStorage.getItem("roboXP")) || 0;
    let totalScore = Number(localStorage.getItem("roboScore")) || 0;

    let unlockedMission =
        Number(localStorage.getItem("roboUnlocked")) || 0;

    let currentScore = 0;
    let lives = 3;
    let energy = 0;

    let voiceSpeed = 0.8;
    let soundEnabled = true;

    let gameRunning = false;
    let gameInterval = null;

    let playerPosition = 50;
    let jumpActive = false;

    const XP_PER_MISSION = 400;


    /* =====================================================
       ELEMENT HELPERS
    ===================================================== */

    const $ = (id) => document.getElementById(id);

    function showScreen(id) {

        document.querySelectorAll(".screen").forEach(screen => {
            screen.classList.remove("active");
        });

        const target = $(id);

        if (target) {
            target.classList.add("active");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function hide(element) {
        if (element) {
            element.classList.add("hidden");
        }
    }


    function show(element) {
        if (element) {
            element.classList.remove("hidden");
        }
    }


    /* =====================================================
       TOP BAR
    ===================================================== */

    function updateTopBar() {

        $("missionNumber").textContent =
            `MISSION ${missions[currentMission].number}`;

        $("progressText").textContent =
            `${currentMission + 1} / ${missions.length}`;

        $("xpDisplay").textContent =
            `✦ XP ${totalXP}`;
    }


    /* =====================================================
       TOAST
    ===================================================== */

    function toast(message, icon = "✓") {

        const toastBox = $("toast");

        $("toastMessage").textContent = message;
        $("toastIcon").textContent = icon;

        toastBox.classList.add("show");

        clearTimeout(window.toastTimer);

        window.toastTimer = setTimeout(() => {
            toastBox.classList.remove("show");
        }, 2500);
    }


    /* =====================================================
       MODALS
    ===================================================== */

    function openModal(id) {
        const modal = $(id);

        if (modal) {
            modal.classList.remove("hidden");
        }
    }


    function closeModal(id) {
        const modal = $(id);

        if (modal) {
            modal.classList.add("hidden");
        }
    }


    document.querySelectorAll("[data-close]").forEach(button => {

        button.addEventListener("click", () => {

            const modalId = button.dataset.close;

            closeModal(modalId);

        });

    });


    document.querySelectorAll(".modal").forEach(modal => {

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                modal.classList.add("hidden");
            }

        });

    });


    /* =====================================================
       SPEECH
    ===================================================== */

    function speak(text) {

        if (!soundEnabled) {
            return;
        }

        if (!("speechSynthesis" in window)) {
            toast("Voice is not supported in this browser.", "🔇");
            return;
        }

        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "en-US";
        speech.rate = voiceSpeed;
        speech.pitch = 1;
        speech.volume = 1;

        window.speechSynthesis.speak(speech);
    }


    function speakCurrentLesson() {

        const lesson =
            missions[currentMission].lessons[currentLesson];

        speak(lesson.text);

        toast("Robo is speaking...", "🔊");
    }


    /* =====================================================
       SOUND BUTTON
    ===================================================== */

    $("soundBtn").addEventListener("click", () => {

        soundEnabled = !soundEnabled;

        $("soundBtn").textContent =
            soundEnabled ? "🔊" : "🔇";

        if (!soundEnabled) {
            window.speechSynthesis?.cancel();
            toast("Sound is off.", "🔇");
        } else {
            toast("Sound is on.", "🔊");
        }

    });


    /* =====================================================
       SPEED BUTTONS
    ===================================================== */

    document.querySelectorAll(".speed-btn").forEach(button => {

        button.addEventListener("click", () => {

            voiceSpeed = Number(button.dataset.speed);

            document.querySelectorAll(".speed-btn")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            toast(`Voice speed: ${voiceSpeed}×`, "🔊");

        });

    });


    /* =====================================================
       HOME
    ===================================================== */

    $("startMissionBtn").addEventListener("click", () => {

        updateMissionMap();

        showScreen("mapScreen");

        toast("Choose your mission!", "🚀");

    });


    $("howToPlayBtn").addEventListener("click", () => {

        showScreen("howToPlayScreen");

    });


    $("backFromHowBtn").addEventListener("click", () => {

        showScreen("homeScreen");

    });


    $("letsGoBtn").addEventListener("click", () => {

        updateMissionMap();

        showScreen("mapScreen");

    });


    $("homeFromMapBtn").addEventListener("click", () => {

        showScreen("homeScreen");

    });


    /* =====================================================
       HELP
    ===================================================== */

    $("helpBtn").addEventListener("click", () => {

        $("guideModalText").textContent =
            "Learn the lesson, listen to Robo, play the mini-game, and answer the knowledge check. Finish all five missions to reach the Future City.";

        openModal("guideModal");

    });


    $("roboGuideBtn").addEventListener("click", () => {

        $("guideModalText").textContent =
            "First listen to the lesson. Then play the game and answer the question. You can use Easy English whenever you need help.";

        openModal("guideModal");

    });


    /* =====================================================
       MISSION MAP
    ===================================================== */

    function updateMissionMap() {

        document.querySelectorAll(".mission-card")
            .forEach(card => {

                const id = Number(card.dataset.mission);

                card.classList.remove("locked", "unlocked", "completed");

                if (id < unlockedMission) {

                    card.classList.add("completed");

                    const status =
                        card.querySelector(".mission-status");

                    if (status) {
                        status.textContent = "✓";
                    }

                } else if (id === unlockedMission) {

                    card.classList.add("unlocked");

                    const status =
                        card.querySelector(".mission-status");

                    if (status) {
                        status.textContent = "▶";
                    }

                } else {

                    card.classList.add("locked");

                    const status =
                        card.querySelector(".mission-status");

                    if (status) {
                        status.textContent = "🔒";
                    }

                }

            });

    }


    document.querySelectorAll(".mission-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                const missionId =
                    Number(card.dataset.mission);

                if (missionId > unlockedMission) {

                    toast(
                        "Complete the previous mission first!",
                        "🔒"
                    );

                    return;
                }

                startMission(missionId);

            });

        });


    /* =====================================================
       START MISSION
    ===================================================== */

    function startMission(id) {

        currentMission = id;
        currentLesson = 0;

        currentScore = 0;
        lives = 3;
        energy = 0;

        updateTopBar();
        updateMissionContent();

        showLesson();

        showScreen("missionScreen");

        toast(
            `${missions[id].title} started!`,
            missions[id].icon
        );

    }


    /* =====================================================
       MISSION CONTENT
    ===================================================== */

    function updateMissionContent() {

        const mission = missions[currentMission];

        $("missionEyebrow").textContent =
            `MISSION ${mission.number}`;

        $("missionTitle").textContent =
            mission.title;

        $("missionSubtitle").textContent =
            mission.subtitle;

        $("gameTitle").textContent =
            mission.gameTitle;

        $("gameGoal").textContent =
            mission.gameGoal;

        $("missionGuideTitle").textContent =
            mission.gameTitle;

        $("missionGuideText").textContent =
            mission.gameGoal;

    }


    /* =====================================================
       LESSON
    ===================================================== */

    function showLesson() {

        const mission =
            missions[currentMission];

        const lesson =
            mission.lessons[currentLesson];

        $("lessonCounter").textContent =
            `${currentLesson + 1} / ${mission.lessons.length}`;

        $("lessonTitle").textContent =
            lesson.title;

        $("lessonText").textContent =
            lesson.text;

        $("lessonIcon").textContent =
            lesson.icon;

        $("keyIdea").textContent =
            lesson.key;

        $("vocabulary").textContent =
            lesson.vocabulary;

        $("roboMessage").textContent =
            `Let's learn about ${mission.subtitle.toLowerCase()}. Listen carefully!`;

        const progress =
            ((currentLesson + 1) / mission.lessons.length) * 100;

        $("lessonProgressBar").style.width =
            `${progress}%`;

        hide($("gameArea"));
        hide($("quizArea"));
        hide($("completeArea"));

        show($("lessonArea"));

    }


    /* =====================================================
       LESSON BUTTONS
    ===================================================== */

    $("listenBtn").addEventListener("click", () => {

        speakCurrentLesson();

    });


    $("repeatBtn").addEventListener("click", () => {

        speakCurrentLesson();

    });


    $("easyEnglishBtn").addEventListener("click", () => {

        const lesson =
            missions[currentMission].lessons[currentLesson];

        $("easyEnglishTitle").textContent =
            lesson.title;

        $("easyEnglishText").textContent =
            lesson.easy;

        openModal("easyEnglishModal");

    });


    /* =====================================================
       NEXT LESSON
    ===================================================== */

    function nextLesson() {

        if (
            currentLesson <
            missions[currentMission].lessons.length - 1
        ) {

            currentLesson++;

            showLesson();

            speakCurrentLesson();

        } else {

            startGame();

        }

    }


    /* =====================================================
       MISSION / BACK
    ===================================================== */

    $("backMissionBtn").addEventListener("click", () => {

        showScreen("mapScreen");

    });


    $("missionMapBtn").addEventListener("click", () => {

        stopGame();

        updateMissionMap();

        showScreen("mapScreen");

    });


    /* =====================================================
       START GAME
    ===================================================== */

    $("startGameBtn").addEventListener("click", () => {

        nextLesson();

    });


    function startGame() {

        hide($("lessonArea"));
        hide($("quizArea"));
        hide($("completeArea"));

        show($("gameArea"));

        resetGame();

        openModal("missionGuideModal");

        toast("Game ready!", "🎮");

    }


    /* =====================================================
       GAME
    ===================================================== */

    function resetGame() {

        stopGame();

        currentScore = 0;
        lives = 3;
        energy = 0;

        playerPosition = 50;

        updateGameStats();

        renderGameItems();

        movePlayer();

    }


    function updateGameStats() {

        $("scoreDisplay").textContent =
            currentScore;

        $("livesDisplay").textContent =
            "❤️".repeat(lives) +
            "🖤".repeat(Math.max(0, 3 - lives));

        $("energyDisplay").textContent =
            `⚡ ${energy}`;

    }


    function renderGameItems() {

        const container =
            $("gameItems");

        container.innerHTML = "";

        const items =
            missions[currentMission].gameItems;

        items.forEach((emoji, index) => {

            const item =
                document.createElement("div");

            item.className = "game-item";

            item.textContent = emoji;

            item.style.left =
                `${10 + Math.random() * 80}%`;

            item.style.top =
                `${15 + Math.random() * 65}%`;

            item.dataset.index = index;

            container.appendChild(item);

        });

    }


    function movePlayer() {

        const player =
            $("gamePlayer");

        if (!player) return;

        player.style.left =
            `${playerPosition}%`;

    }


    function moveLeft() {

        if (!gameRunning && $("gameArea").classList.contains("hidden")) {
            return;
        }

        playerPosition -= 7;

        if (playerPosition < 5) {
            playerPosition = 5;
        }

        movePlayer();

        collectNearbyItems();

    }


    function moveRight() {

        if (!gameRunning && $("gameArea").classList.contains("hidden")) {
            return;
        }

        playerPosition += 7;

        if (playerPosition > 95) {
            playerPosition = 95;
        }

        movePlayer();

        collectNearbyItems();

    }


    function jump() {

        if (jumpActive) {
            return;
        }

        jumpActive = true;

        const player =
            $("gamePlayer");

        player.classList.add("jumping");

        setTimeout(() => {

            player.classList.remove("jumping");

            jumpActive = false;

        }, 550);

        collectNearbyItems();

    }


    function collectNearbyItems() {

        const items =
            document.querySelectorAll(".game-item");

        let collected = false;

        items.forEach(item => {

            if (item.classList.contains("collected")) {
                return;
            }

            const itemLeft =
                parseFloat(item.style.left);

            const distance =
                Math.abs(itemLeft - playerPosition);

            if (distance < 8) {

                item.classList.add("collected");

                currentScore += 100;
                energy += 1;

                collected = true;

                updateGameStats();

                toast(
                    "+100 points!",
                    "⚡"
                );

            }

        });

        if (collected) {
            checkGameGoal();
        }

    }


    function checkGameGoal() {

        const target =
            missions[currentMission].gameItems.length;

        if (energy >= target) {

            stopGame();

            toast(
                "Mission game complete!",
                "🏆"
            );

            setTimeout(() => {

                showQuiz();

            }, 800);

        }

    }


    /* =====================================================
       GAME CONTROLS
    ===================================================== */

    $("leftBtn").addEventListener("click", moveLeft);

    $("rightBtn").addEventListener("click", moveRight);

    $("jumpBtn").addEventListener("click", jump);


    document.addEventListener("keydown", event => {

        if ($("gameArea").classList.contains("hidden")) {
            return;
        }

        if (event.key === "ArrowLeft") {

            event.preventDefault();
            moveLeft();

        }

        if (event.key === "ArrowRight") {

            event.preventDefault();
            moveRight();

        }

        if (
            event.key === "ArrowUp" ||
            event.key === " "
        ) {

            event.preventDefault();
            jump();

        }

    });


    /* =====================================================
       GAME START / STOP
    ===================================================== */

    function runGameLoop() {

        if (gameRunning) {
            return;
        }

        gameRunning = true;

        gameInterval =
            setInterval(() => {

                const random =
                    Math.random();

                if (random < 0.18) {

                    lives--;

                    updateGameStats();

                    toast(
                        "Watch out!",
                        "⚠️"
                    );

                    if (lives <= 0) {

                        stopGame();

                        openModal("pauseModal");

                    }

                }

            }, 5000);

    }


    function stopGame() {

        gameRunning = false;

        if (gameInterval) {

            clearInterval(gameInterval);

            gameInterval = null;

        }

    }


    $("gameGuideBtn").addEventListener("click", () => {

        openModal("missionGuideModal");

    });


    $("exitGameBtn").addEventListener("click", () => {

        stopGame();

        showScreen("mapScreen");

    });


    $("exitMissionBtn").addEventListener("click", () => {

        closeModal("pauseModal");

        stopGame();

        showScreen("mapScreen");

    });


    $("tryAgainBtn").addEventListener("click", () => {

        closeModal("pauseModal");

        resetGame();

        runGameLoop();

    });


    /* Start actual game after guide closes */

    const missionGuideCloseButtons =
        document.querySelectorAll(
            '#missionGuideModal [data-close="missionGuideModal"]'
        );

    missionGuideCloseButtons.forEach(button => {

        button.addEventListener("click", () => {

            if (!gameRunning) {
                runGameLoop();
            }

        });

    });


    /* =====================================================
       QUIZ
    ===================================================== */

    function showQuiz() {

        hide($("lessonArea"));
        hide($("gameArea"));
        hide($("completeArea"));

        show($("quizArea"));

        const quiz =
            missions[currentMission].quiz;

        $("quizQuestion").textContent =
            quiz.question;

        $("quizFeedback").textContent = "";

        $("quizFeedback").className =
            "quiz-feedback";

        document.querySelectorAll(".quiz-option")
            .forEach(button => {

                button.disabled = false;

                button.classList.remove(
                    "correct",
                    "wrong"
                );

            });

        const container =
            $("quizOptions");

        container.innerHTML = "";

        quiz.answers.forEach(answer => {

            const button =
                document.createElement("button");

            button.className =
                "quiz-option";

            button.dataset.answer =
                answer[0];

            button.textContent =
                answer[1];

            container.appendChild(button);

        });

        document.querySelectorAll(".quiz-option")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    handleQuizAnswer
                );

            });

    }


    function handleQuizAnswer(event) {

        const selected =
            event.currentTarget.dataset.answer;

        const quiz =
            missions[currentMission].quiz;

        document.querySelectorAll(".quiz-option")
            .forEach(button => {

                button.disabled = true;

            });

        if (selected === quiz.correct) {

            event.currentTarget.classList.add("correct");

            currentScore += 300;

            $("quizFeedback").textContent =
                "Correct! Great job! 🎉";

            $("quizFeedback").classList.add(
                "correct"
            );

            toast(
                "+300 points!",
                "⭐"
            );

        } else {

            event.currentTarget.classList.add("wrong");

            currentScore = Math.max(
                0,
                currentScore - 100
            );

            $("quizFeedback").textContent =
                "Not quite. Try to remember the lesson.";

            $("quizFeedback").classList.add(
                "wrong"
            );

            toast(
                "Keep learning!",
                "💡"
            );

        }

        $("languageBoostText").textContent =
            quiz.boost;

    }


    $("quizEasyBtn").addEventListener("click", () => {

        const quiz =
            missions[currentMission].quiz;

        $("easyEnglishTitle").textContent =
            "Easy English";

        $("easyEnglishText").textContent =
            quiz.easy;

        openModal("easyEnglishModal");

    });


    $("continueBtn").addEventListener("click", () => {

        completeMission();

    });


    /* =====================================================
       COMPLETE MISSION
    ===================================================== */

    function completeMission() {

        stopGame();

        const mission =
            missions[currentMission];

        const missionReward =
            XP_PER_MISSION;

        totalXP += missionReward;

        totalScore += currentScore;

        if (
            currentMission >= unlockedMission &&
            unlockedMission < missions.length
        ) {

            unlockedMission =
                Math.min(
                    unlockedMission + 1,
                    missions.length
                );

        }

        localStorage.setItem(
            "roboXP",
            totalXP
        );

        localStorage.setItem(
            "roboScore",
            totalScore
        );

        localStorage.setItem(
            "roboUnlocked",
            unlockedMission
        );

        updateTopBar();

        $("missionXP").textContent =
            `+${missionReward}`;

        $("finalScore").textContent =
            currentScore;

        $("completeTitle").textContent =
            `${mission.title} Complete!`;

        $("completeMessage").textContent =
            `Excellent work! You learned about ${mission.subtitle.toLowerCase()}.`;

        if (currentMission < missions.length - 1) {

            $("unlockText").textContent =
                `Mission ${missions[currentMission + 1].number} unlocked!`;

            $("nextMissionBtn").style.display =
                "inline-flex";

        } else {

            $("unlockText").textContent =
                "You completed all five missions!";

            $("nextMissionBtn").style.display =
                "none";

        }

        hide($("lessonArea"));
        hide($("gameArea"));
        hide($("quizArea"));

        show($("completeArea"));

        updateMissionMap();

    }


    /* =====================================================
       NEXT MISSION
    ===================================================== */

    $("nextMissionBtn").addEventListener("click", () => {

        if (currentMission < missions.length - 1) {

            startMission(currentMission + 1);

        } else {

            showFinalScreen();

        }

    });


    $("viewMapBtn").addEventListener("click", () => {

        updateMissionMap();

        showScreen("mapScreen");

    });


    /* =====================================================
       FINAL SCREEN
    ===================================================== */

    function showFinalScreen() {

        stopGame();

        $("totalXP").textContent =
            totalXP;

        $("totalScore").textContent =
            totalScore;

        showScreen("finalScreen");

        speak(
            "Congratulations! You completed all five missions and reached the Future City."
        );

    }


    $("finalListenBtn").addEventListener("click", () => {

        speak(
            "Congratulations! You completed all five missions and reached the Future City."
        );

    });


    $("playAgainBtn").addEventListener("click", () => {

        localStorage.removeItem("roboXP");
        localStorage.removeItem("roboScore");
        localStorage.removeItem("roboUnlocked");

        totalXP = 0;
        totalScore = 0;
        unlockedMission = 0;

        currentMission = 0;
        currentLesson = 0;

        updateTopBar();
        updateMissionMap();

        showScreen("homeScreen");

        toast(
            "New adventure started!",
            "🚀"
        );

    });


    /* =====================================================
       INITIALIZE
    ===================================================== */

    updateTopBar();
    updateMissionMap();

    showScreen("homeScreen");

    console.log(
        "🤖 ROBO: MISSION FUTURE is ready!"
    );

});