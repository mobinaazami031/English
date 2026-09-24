/* =========================================================
   ENGLISH CLASS PRESENTATION
   Main JavaScript
   ========================================================= */

"use strict";

/* =========================================================
   PRESENTATION DATA
   ========================================================= */

const stages = [
    {
        id: 1,
        title: "Introduction",
        shortTitle: "Start",
        text: "Welcome to our English presentation. Today we are going to learn some interesting and useful facts together.",
        gameText: "Move the robot to the green finish point. Use the arrow keys or the buttons.",
        info: [
            {
                icon: "🌍",
                title: "What We Learn",
                text: "We will learn important ideas, useful vocabulary, and interesting facts about our topic."
            },
            {
                icon: "🧠",
                title: "Learn Step by Step",
                text: "Each stage gives us a small amount of information before we start a new challenge."
            },
            {
                icon: "🎮",
                title: "Learn and Play",
                text: "After every lesson, you can test your understanding with a short interactive game."
            }
        ]
    },

    {
        id: 2,
        title: "Key Ideas",
        shortTitle: "Ideas",
        text: "Now let's look at the main ideas. Understanding the basic concepts helps us understand the topic more easily.",
        gameText: "Reach the destination without touching the obstacles.",
        info: [
            {
                icon: "💡",
                title: "Main Idea",
                text: "Every topic has a few important ideas. Finding them makes learning easier."
            },
            {
                icon: "🔎",
                title: "Important Details",
                text: "Small details can help us understand the bigger picture."
            },
            {
                icon: "📚",
                title: "Useful Knowledge",
                text: "Good knowledge helps us explain a topic clearly and confidently."
            }
        ]
    },

    {
        id: 3,
        title: "Interesting Facts",
        shortTitle: "Facts",
        text: "Here are some interesting facts. Facts can make a presentation more memorable and more exciting.",
        gameText: "Find the safe path and guide the robot to the finish.",
        info: [
            {
                icon: "⭐",
                title: "Did You Know?",
                text: "Interesting facts can help us remember new information for a longer time."
            },
            {
                icon: "🚀",
                title: "Explore",
                text: "Learning becomes more exciting when we ask questions and explore new ideas."
            },
            {
                icon: "🤔",
                title: "Think About It",
                text: "Try to connect new information with things you already know."
            }
        ]
    },

    {
        id: 4,
        title: "Vocabulary",
        shortTitle: "Words",
        text: "Let's learn a few useful English words. These words can help us talk about the topic more easily.",
        gameText: "Use the robot to reach the correct destination.",
        info: [
            {
                icon: "🗣️",
                title: "Speak",
                text: "Learning useful words can make speaking English easier."
            },
            {
                icon: "✍️",
                title: "Remember",
                text: "Try to use new words in simple sentences."
            },
            {
                icon: "🎯",
                title: "Practice",
                text: "Practice is one of the best ways to remember vocabulary."
            }
        ]
    },

    {
        id: 5,
        title: "Final Challenge",
        shortTitle: "Final",
        text: "Great job! We have reached the final challenge. Let's review what we learned and finish the mission.",
        gameText: "Complete the final robot mission!",
        info: [
            {
                icon: "🏆",
                title: "Final Mission",
                text: "Use everything you have learned to complete the final challenge."
            },
            {
                icon: "🧩",
                title: "Connect the Ideas",
                text: "Good learning means connecting different ideas together."
            },
            {
                icon: "🎉",
                title: "Mission Complete",
                text: "When you finish the final stage, the presentation is complete."
            }
        ]
    }
];


/* =========================================================
   APP STATE
   ========================================================= */

const state = {
    currentStage: 0,

    score: 0,

    completedStages: new Set(),

    speaking: false,

    speechPaused: false,

    currentWords: [],

    currentWordIndex: 0,

    speechToken: 0,

    game: {
        running: false,

        rows: 9,

        cols: 13,

        robotRow: 0,

        robotCol: 0,

        targetRow: 8,

        targetCol: 12,

        obstacles: [],

        moves: 0,

        time: 0,

        timer: null
    }
};


/* =========================================================
   DOM HELPERS
   ========================================================= */

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return Array.from(document.querySelectorAll(selector));
}

function createElement(tag, className, text = "") {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text) {
        element.textContent = text;
    }

    return element;
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});


function initializeApp() {
    createPresentationIfNeeded();

    setupEvents();

    renderStageNavigation();

    renderStage(0);

    updateProgress();

    setupKeyboardControls();
}


/* =========================================================
   AUTOMATIC HTML SUPPORT
   ========================================================= */

/*
   If your HTML already contains the required containers,
   this function uses them.

   If some containers are missing, it creates them.
*/

function createPresentationIfNeeded() {
    let app = $(".app");

    if (!app) {
        app = createElement("main", "app");

        document.body.prepend(app);
    }

    if (!$(".presentation-container")) {
        const container = createElement(
            "div",
            "container presentation-container"
        );

        container.innerHTML = `
            <div class="topbar">
                <div class="logo">
                    <div class="logo-icon">🤖</div>
                    <span>English Mission</span>
                </div>

                <div class="status">
                    <span class="status-dot"></span>
                    <span>Presentation Ready</span>
                </div>
            </div>

            <div class="progress-wrapper">
                <div class="progress-info">
                    <span id="progressText">Stage 1 of 5</span>
                    <span id="scoreText">Score: 0</span>
                </div>

                <div class="progress">
                    <div
                        class="progress-fill"
                        id="progressFill"
                    ></div>
                </div>
            </div>

            <div id="stageNavigation" class="stage-nav"></div>

            <section id="mainContent"></section>

            <footer class="footer">
                <strong>English Mission</strong>
                <br>
                Interactive English Presentation
            </footer>
        `;

        app.appendChild(container);
    }

    if (!$("#toast")) {
        const toast = createElement("div", "toast");

        toast.id = "toast";

        document.body.appendChild(toast);
    }

    if (!$("#gameOverlay")) {
        createGameModal();
    }
}


/* =========================================================
   STAGE NAVIGATION
   ========================================================= */

function renderStageNavigation() {
    const nav = $("#stageNavigation");

    if (!nav) return;

    nav.innerHTML = "";

    stages.forEach((stage, index) => {
        const button = createElement(
            "button",
            "stage-btn"
        );

        button.type = "button";

        button.dataset.stage = index;

        button.innerHTML = `
            <span>${stage.id}</span>
            <span>${stage.shortTitle}</span>
        `;

        if (index === state.currentStage) {
            button.classList.add("active");
        }

        if (state.completedStages.has(index)) {
            button.classList.add("completed");
        }

        button.addEventListener("click", () => {
            goToStage(index);
        });

        nav.appendChild(button);
    });
}


/* =========================================================
   RENDER STAGE
   ========================================================= */

function renderStage(index) {
    if (index < 0 || index >= stages.length) {
        return;
    }

    stopSpeaking();

    stopGame();

    state.currentStage = index;

    const stage = stages[index];

    const content = $("#mainContent");

    if (!content) return;

    content.innerHTML = `
        <section class="screen">

            <div class="section">

                <div class="section-header">

                    <div class="section-label">
                        Stage ${stage.id}
                    </div>

                    <h1 class="section-title">
                        ${escapeHTML(stage.title)}
                    </h1>

                    <p class="section-description">
                        ${escapeHTML(stage.text)}
                    </p>

                </div>


                <div class="narrator">

                    <div
                        class="narrator-avatar"
                        id="narratorAvatar"
                    >
                        🤖
                    </div>

                    <div class="narrator-content">

                        <div class="narrator-label">
                            English Narrator
                        </div>

                        <div
                            class="narrator-text"
                            id="narratorText"
                        >
                            Press Play to listen.
                        </div>

                    </div>

                    <div class="narrator-controls">

                        <button
                            class="btn btn-primary"
                            id="speakButton"
                            type="button"
                        >
                            🔊 Play
                        </button>

                        <button
                            class="btn btn-secondary"
                            id="stopSpeechButton"
                            type="button"
                        >
                            ⏹ Stop
                        </button>

                    </div>

                </div>


                <div class="info-grid">

                    ${stage.info.map(item => `
                        <article class="info-card">

                            <div class="info-icon">
                                ${item.icon}
                            </div>

                            <h3>
                                ${escapeHTML(item.title)}
                            </h3>

                            <p>
                                ${escapeHTML(item.text)}
                            </p>

                        </article>
                    `).join("")}

                </div>


                <div class="highlight">

                    <strong>💡 Remember:</strong>

                    ${escapeHTML(stage.text)}

                </div>


                <div class="game-section">

                    <div class="game-header">

                        <div>

                            <div class="section-label">
                                Mini Game
                            </div>

                            <h2 class="game-title">
                                🤖 Robot Mission
                            </h2>

                            <p class="game-description">
                                ${escapeHTML(stage.gameText)}
                            </p>

                        </div>


                        <div class="game-hud">

                            <div class="hud-item">
                                ⭐
                                Score:
                                <span
                                    class="hud-value"
                                    id="gameScore"
                                >
                                    ${state.score}
                                </span>
                            </div>

                            <div class="hud-item">
                                👣
                                Moves:
                                <span
                                    class="hud-value"
                                    id="moveCount"
                                >
                                    0
                                </span>
                            </div>

                            <div class="hud-item">
                                ⏱️
                                Time:
                                <span
                                    class="hud-value"
                                    id="gameTime"
                                >
                                    0
                                </span>
                            </div>

                        </div>

                    </div>


                    <div class="game-instructions">

                        <div class="game-instructions-icon">
                            💡
                        </div>

                        <div>
                            <strong>How to play:</strong>
                            Move the robot with the arrow keys
                            or the buttons below.
                            Reach the green flag to complete
                            the mission.
                        </div>

                    </div>


                    <div
                        class="game-board"
                        id="gameBoard"
                    ></div>


                    <div class="game-controls">

                        <button
                            class="game-control-btn up"
                            data-direction="up"
                            type="button"
                            aria-label="Move up"
                        >
                            ↑
                        </button>

                        <button
                            class="game-control-btn left"
                            data-direction="left"
                            type="button"
                            aria-label="Move left"
                        >
                            ←
                        </button>

                        <button
                            class="game-control-btn down"
                            data-direction="down"
                            type="button"
                            aria-label="Move down"
                        >
                            ↓
                        </button>

                        <button
                            class="game-control-btn right"
                            data-direction="right"
                            type="button"
                            aria-label="Move right"
                        >
                            →
                        </button>

                    </div>


                    <div class="keyboard-hint">

                        You can also use

                        <span class="key">↑</span>
                        <span class="key">↓</span>
                        <span class="key">←</span>
                        <span class="key">→</span>

                        on your keyboard.

                    </div>


                    <div
                        class="game-result"
                        id="gameResult"
                    >
                        <div class="game-result-icon">
                            🎉
                        </div>

                        <h3>
                            Mission Complete!
                        </h3>

                        <p id="gameResultText">
                            Great job!
                        </p>

                        <br>

                        <button
                            class="btn btn-success"
                            id="nextStageButton"
                            type="button"
                        >
                            Next Stage →
                        </button>
                    </div>

                </div>

            </div>

        </section>
    `;

    bindStageEvents();

    renderGame();

    renderStageNavigation();

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   STAGE EVENTS
   ========================================================= */

function bindStageEvents() {
    const speakButton = $("#speakButton");

    if (speakButton) {
        speakButton.addEventListener(
            "click",
            speakCurrentStage
        );
    }

    const stopButton = $("#stopSpeechButton");

    if (stopButton) {
        stopButton.addEventListener(
            "click",
            stopSpeaking
        );
    }

    $$(".game-control-btn").forEach(button => {
        button.addEventListener("click", () => {
            const direction =
                button.dataset.direction;

            moveRobot(direction);
        });
    });

    const nextButton = $("#nextStageButton");

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            if (
                state.currentStage <
                stages.length - 1
            ) {
                goToStage(
                    state.currentStage + 1
                );
            } else {
                showCompletionScreen();
            }
        });
    }
}


/* =========================================================
   STAGE NAVIGATION LOGIC
   ========================================================= */

function goToStage(index) {
    if (index < 0 || index >= stages.length) {
        return;
    }

    renderStage(index);
}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {
    const progressFill = $("#progressFill");

    const progressText = $("#progressText");

    const scoreText = $("#scoreText");

    if (progressFill) {
        const percentage =
            ((state.currentStage + 1) /
                stages.length) *
            100;

        progressFill.style.width =
            `${percentage}%`;
    }

    if (progressText) {
        progressText.textContent =
            `Stage ${state.currentStage + 1} of ${stages.length}`;
    }

    if (scoreText) {
        scoreText.textContent =
            `Score: ${state.score}`;
    }
}


/* =========================================================
   TEXT TO SPEECH
   ========================================================= */

function speakCurrentStage() {
    const stage = stages[state.currentStage];

    if (!stage) return;

    if (
        !("speechSynthesis" in window)
    ) {
        showToast(
            "Your browser does not support speech synthesis."
        );

        return;
    }

    stopSpeaking();

    const narratorText = $("#narratorText");

    if (!narratorText) return;

    state.speaking = true;
    state.speechPaused = false;
    state.currentWordIndex = 0;

    const text =
        `${stage.title}. ${stage.text}. ${stage.gameText}`;

    prepareWordText(text);

    const words = text
        .trim()
        .split(/\s+/);

    state.currentWords = words;

    const utterance =
        new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";

    /*
       Slow and calm voice.
    */
    utterance.rate = 0.72;

    utterance.pitch = 1;

    utterance.volume = 1;

    const voice =
        findEnglishVoice();

    if (voice) {
        utterance.voice = voice;
    }

    const avatar =
        $("#narratorAvatar");

    const wave =
        $(".voice-wave");

    if (avatar) {
        avatar.classList.add("speaking");
    }

    if (wave) {
        wave.classList.add("active");
    }

    utterance.onboundary = event => {
        if (
            event.name === "word"
        ) {
            highlightNextWord();
        }
    };

    utterance.onend = () => {
        finishSpeaking();
    };

    utterance.onerror = () => {
        finishSpeaking();
    };

    window.speechSynthesis.speak(
        utterance
    );
}


function findEnglishVoice() {
    const voices =
        window.speechSynthesis.getVoices();

    if (!voices.length) {
        return null;
    }

    return (
        voices.find(
            voice =>
                voice.lang === "en-US"
        ) ||

        voices.find(
            voice =>
                voice.lang.startsWith("en")
        ) ||

        null
    );
}


/* =========================================================
   WORD HIGHLIGHTING
   ========================================================= */

function prepareWordText(text) {
    const narratorText =
        $("#narratorText");

    if (!narratorText) return;

    const words =
        text.trim().split(/\s+/);

    narratorText.innerHTML =
        words
            .map(
                (word, index) =>
                    `<span class="word" data-word="${index}">
                        ${escapeHTML(word)}
                    </span>`
            )
            .join(" ");
}


function highlightNextWord() {
    const words =
        $$(".narrator-text .word");

    if (!words.length) return;

    words.forEach(word => {
        word.classList.remove("active");
    });

    if (
        state.currentWordIndex >=
        words.length
    ) {
        state.currentWordIndex = 0;
    }

    const current =
        words[state.currentWordIndex];

    if (current) {
        current.classList.add("active");
    }

    state.currentWordIndex++;
}


/* =========================================================
   STOP SPEECH
   ========================================================= */

function stopSpeaking() {
    if (
        "speechSynthesis" in window
    ) {
        window.speechSynthesis.cancel();
    }

    finishSpeaking();
}


function finishSpeaking() {
    state.speaking = false;

    const avatar =
        $("#narratorAvatar");

    const wave =
        $(".voice-wave");

    if (avatar) {
        avatar.classList.remove("speaking");
    }

    if (wave) {
        wave.classList.remove("active");
    }
}


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

function setupKeyboardControls() {
    document.addEventListener(
        "keydown",
        event => {
            const key =
                event.key.toLowerCase();

            const directionMap = {
                arrowup: "up",
                w: "up",

                arrowdown: "down",
                s: "down",

                arrowleft: "left",
                a: "left",

                arrowright: "right",
                d: "right"
            };

            const direction =
                directionMap[key];

            if (direction) {
                event.preventDefault();

                moveRobot(direction);
            }

            if (key === " " && !state.speaking) {
                const activeElement =
                    document.activeElement;

                const isButton =
                    activeElement &&
                    (
                        activeElement.tagName ===
                        "BUTTON"
                    );

                if (!isButton) {
                    event.preventDefault();

                    speakCurrentStage();
                }
            }
        }
    );
}


/* =========================================================
   GAME CREATION
   ========================================================= */

function renderGame() {
    resetGame();

    const board =
        $("#gameBoard");

    if (!board) return;

    board.innerHTML = "";

    board.style.setProperty(
        "--rows",
        state.game.rows
    );

    board.style.setProperty(
        "--cols",
        state.game.cols
    );

    createGrid();

    createObstacles();

    createDestination();

    createRobot();

    startGameTimer();
}


/* =========================================================
   GAME RESET
   ========================================================= */

function resetGame() {
    stopGame();

    state.game.running = true;

    state.game.robotRow = 0;

    state.game.robotCol = 0;

    state.game.targetRow =
        state.game.rows - 1;

    state.game.targetCol =
        state.game.cols - 1;

    state.game.obstacles = [];

    state.game.moves = 0;

    state.game.time = 0;

    updateGameHUD();
}


/* =========================================================
   GAME GRID
   ========================================================= */

function createGrid() {
    const board =
        $("#gameBoard");

    if (!board) return;

    const grid =
        createElement(
            "div",
            "game-grid"
        );

    grid.style.gridTemplateRows =
        `repeat(${state.game.rows}, 1fr)`;

    grid.style.gridTemplateColumns =
        `repeat(${state.game.cols}, 1fr)`;

    for (
        let row = 0;
        row < state.game.rows;
        row++
    ) {
        for (
            let col = 0;
            col < state.game.cols;
            col++
        ) {
            const cell =
                createElement(
                    "div",
                    "cell"
                );

            cell.dataset.row = row;

            cell.dataset.col = col;

            grid.appendChild(cell);
        }
    }

    board.appendChild(grid);
}


/* =========================================================
   OBSTACLE GENERATION
   ========================================================= */

function createObstacles() {
    const board =
        $("#gameBoard");

    if (!board) return;

    const obstacleCount =
        8 + state.currentStage * 2;

    const obstacles = [];

    let attempts = 0;

    while (
        obstacles.length <
            obstacleCount &&
        attempts < 300
    ) {
        attempts++;

        const row =
            Math.floor(
                Math.random() *
                state.game.rows
            );

        const col =
            Math.floor(
                Math.random() *
                state.game.cols
            );

        /*
           Keep start and destination clear.
        */
        if (
            (row === 0 && col === 0) ||
            (
                row === state.game.targetRow &&
                col === state.game.targetCol
            )
        ) {
            continue;
        }

        const alreadyExists =
            obstacles.some(
                obstacle =>
                    obstacle.row === row &&
                    obstacle.col === col
            );

        if (alreadyExists) {
            continue;
        }

        /*
           Keep the first area relatively open.
        */
        if (
            row <= 1 &&
            col <= 2
        ) {
            continue;
        }

        obstacles.push({
            row,
            col
        });
    }

    /*
       Make sure a basic path exists.
       We keep a diagonal-style safe corridor.
    */

    for (
        let i = 0;
        i < state.game.rows;
        i++
    ) {
        const protectedCells = [
            {
                row: i,
                col: Math.min(
                    i,
                    state.game.cols - 1
                )
            },
            {
                row: i,
                col: Math.min(
                    i + 1,
                    state.game.cols - 1
                )
            }
        ];

        protectedCells.forEach(
            safe => {
                const index =
                    obstacles.findIndex(
                        obstacle =>
                            obstacle.row ===
                                safe.row &&
                            obstacle.col ===
                                safe.col
                    );

                if (index !== -1) {
                    obstacles.splice(
                        index,
                        1
                    );
                }
            }
        );
    }

    state.game.obstacles =
        obstacles;

    obstacles.forEach(
        obstacle => {
            const element =
                createElement(
                    "div",
                    "obstacle"
                );

            element.style.width =
                `${100 / state.game.cols}%`;

            element.style.height =
                `${100 / state.game.rows}%`;

            element.style.left =
                `${(obstacle.col / state.game.cols) * 100}%`;

            element.style.top =
                `${(obstacle.row / state.game.rows) * 100}%`;

            element.style.margin = "15px";

            /*
               Use a smaller obstacle visual
               because the board has padding.
            */
            element.style.width =
                `calc(${100 / state.game.cols}% - 30px)`;

            element.style.height =
                `calc(${100 / state.game.rows}% - 30px)`;

            board.appendChild(element);
        }
    );
}


/* =========================================================
   DESTINATION
   ========================================================= */

function createDestination() {
    const board =
        $("#gameBoard");

    if (!board) return;

    const destination =
        createElement(
            "div",
            "destination"
        );

    const cellWidth =
        100 / state.game.cols;

    const cellHeight =
        100 / state.game.rows;

    destination.style.left =
        `calc(${state.game.targetCol * cellWidth}% + 3px)`;

    destination.style.top =
        `calc(${state.game.targetRow * cellHeight}% + 3px)`;

    destination.style.width =
        `calc(${cellWidth}% - 6px)`;

    destination.style.height =
        `calc(${cellHeight}% - 6px)`;

    board.appendChild(
        destination
    );
}


/* =========================================================
   ROBOT
   ========================================================= */

function createRobot() {
    const board =
        $("#gameBoard");

    if (!board) return;

    const robot =
        createElement(
            "div",
            "robot"
        );

    robot.id = "robot";

    board.appendChild(robot);

    updateRobotPosition();
}


function updateRobotPosition() {
    const robot =
        $("#robot");

    if (!robot) return;

    const cellWidth =
        100 / state.game.cols;

    const cellHeight =
        100 / state.game.rows;

    robot.style.left =
        `calc(${state.game.robotCol * cellWidth}% + ${cellWidth / 2}% - 24px)`;

    robot.style.top =
        `calc(${state.game.robotRow * cellHeight}% + ${cellHeight / 2}% - 24px)`;

    /*
       Keep the robot visually inside the board
       on small screens.
    */

    robot.style.transform =
        "translate(0, 0)";
}


/* =========================================================
   ROBOT MOVEMENT
   ========================================================= */

function moveRobot(direction) {
    if (!state.game.running) {
        return;
    }

    let newRow =
        state.game.robotRow;

    let newCol =
        state.game.robotCol;

    switch (direction) {
        case "up":
            newRow--;
            break;

        case "down":
            newRow++;
            break;

        case "left":
            newCol--;
            break;

        case "right":
            newCol++;
            break;
    }

    /*
       Outside the board.
    */

    if (
        newRow < 0 ||
        newRow >= state.game.rows ||
        newCol < 0 ||
        newCol >= state.game.cols
    ) {
        showToast("You cannot go there!");

        return;
    }

    /*
       Obstacle collision.
    */

    const hitObstacle =
        state.game.obstacles.some(
            obstacle =>
                obstacle.row === newRow &&
                obstacle.col === newCol
        );

    if (hitObstacle) {
        showToast(
            "⚠️ Be careful! There is an obstacle."
        );

        const robot =
            $("#robot");

        if (robot) {
            robot.animate(
                [
                    {
                        transform:
                            "translateX(0)"
                    },
                    {
                        transform:
                            "translateX(-7px)"
                    },
                    {
                        transform:
                            "translateX(7px)"
                    },
                    {
                        transform:
                            "translateX(0)"
                    }
                ],
                {
                    duration: 180
                }
            );
        }

        return;
    }

    state.game.robotRow =
        newRow;

    state.game.robotCol =
        newCol;

    state.game.moves++;

    updateRobotPosition();

    updateGameHUD();

    const robot =
        $("#robot");

    if (robot) {
        robot.classList.remove(
            "moving"
        );

        void robot.offsetWidth;

        robot.classList.add(
            "moving"
        );
    }

    checkGameWin();
}


/* =========================================================
   GAME WIN
   ========================================================= */

function checkGameWin() {
    const reached =
        state.game.robotRow ===
            state.game.targetRow &&
        state.game.robotCol ===
            state.game.targetCol;

    if (!reached) {
        return;
    }

    completeCurrentStage();
}


/* =========================================================
   COMPLETE STAGE
   ========================================================= */

function completeCurrentStage() {
    if (!state.game.running) {
        return;
    }

    state.game.running = false;

    stopGameTimer();

    const stage =
        stages[state.currentStage];

    const baseScore = 100;

    const timeBonus =
        Math.max(
            0,
            60 -
                state.game.time
        );

    const moveBonus =
        Math.max(
            0,
            40 -
                state.game.moves
        );

    const earned =
        baseScore +
        timeBonus +
        moveBonus;

    state.score += earned;

    state.completedStages.add(
        state.currentStage
    );

    updateProgress();

    renderStageNavigation();

    const result =
        $("#gameResult");

    const resultText =
        $("#gameResultText");

    if (result) {
        result.classList.add("show");
    }

    if (resultText) {
        resultText.textContent =
            `Excellent! You earned ${earned} points.`;
    }

    showToast(
        `🎉 Stage complete! +${earned} points`
    );

    playSuccessSound();

    if (
        state.currentStage ===
        stages.length - 1
    ) {
        const nextButton =
            $("#nextStageButton");

        if (nextButton) {
            nextButton.textContent =
                "🏆 Finish Presentation";
        }
    }
}


/* =========================================================
   GAME TIMER
   ========================================================= */

function startGameTimer() {
    stopGameTimer();

    state.game.timer =
        setInterval(() => {
            if (
                !state.game.running
            ) {
                return;
            }

            state.game.time++;

            updateGameHUD();

        }, 1000);
}


function stopGameTimer() {
    if (state.game.timer) {
        clearInterval(
            state.game.timer
        );

        state.game.timer = null;
    }
}


function stopGame() {
    stopGameTimer();

    state.game.running = false;
}


/* =========================================================
   GAME HUD
   ========================================================= */

function updateGameHUD() {
    const score =
        $("#gameScore");

    const moves =
        $("#moveCount");

    const time =
        $("#gameTime");

    if (score) {
        score.textContent =
            state.score;
    }

    if (moves) {
        moves.textContent =
            state.game.moves;
    }

    if (time) {
        time.textContent =
            formatTime(
                state.game.time
            );
    }
}


function formatTime(seconds) {
    const minutes =
        Math.floor(
            seconds / 60
        );

    const remaining =
        seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remaining
    ).padStart(2, "0")}`;
}


/* =========================================================
   SUCCESS SOUND
   ========================================================= */

function playSuccessSound() {
    /*
       Uses the browser's Web Audio API.
       No external sound files are required.
    */

    try {
        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            return;
        }

        const context =
            new AudioContext();

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();

        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
            520,
            context.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            880,
            context.currentTime + 0.25
        );

        gain.gain.setValueAtTime(
            0.001,
            context.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.15,
            context.currentTime + 0.02
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            context.currentTime + 0.4
        );

        oscillator.connect(gain);

        gain.connect(
            context.destination
        );

        oscillator.start();

        oscillator.stop(
            context.currentTime + 0.4
        );

    } catch (error) {
        console.log(
            "Audio unavailable."
        );
    }
}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;

function showToast(message) {
    const toast =
        $("#toast");

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(() => {
            toast.classList.remove(
                "show"
            );
        }, 2200);
}


/* =========================================================
   FINAL COMPLETION SCREEN
   ========================================================= */

function showCompletionScreen() {
    stopSpeaking();

    stopGame();

    const content =
        $("#mainContent");

    if (!content) return;

    content.innerHTML = `
        <section class="complete-screen">

            <div>

                <div class="complete-icon">
                    🏆
                </div>

                <div class="section-label">
                    Mission Complete
                </div>

                <h1>
                    Great Job!
                </h1>

                <p>
                    You completed the English Mission.
                    You learned new information,
                    practiced English,
                    and completed all the robot challenges.
                </p>

                <br>

                <div class="highlight">

                    <strong>Final Score:</strong>

                    ${state.score} points

                </div>

                <div class="hero-actions"
                     style="justify-content:center;">

                    <button
                        class="btn btn-primary"
                        id="restartButton"
                        type="button"
                    >
                        🔄 Play Again
                    </button>

                    <button
                        class="btn btn-secondary"
                        id="backButton"
                        type="button"
                    >
                        ← Review Stages
                    </button>

                </div>

            </div>

        </section>
    `;

    renderStageNavigation();

    const restart =
        $("#restartButton");

    if (restart) {
        restart.addEventListener(
            "click",
            restartPresentation
        );
    }

    const back =
        $("#backButton");

    if (back) {
        back.addEventListener(
            "click",
            () => {
                goToStage(0);
            }
        );
    }

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   RESTART
   ========================================================= */

function restartPresentation() {
    state.currentStage = 0;

    state.score = 0;

    state.completedStages =
        new Set();

    renderStageNavigation();

    renderStage(0);

    updateProgress();
}


/* =========================================================
   MODAL
   ========================================================= */

function createGameModal() {
    const overlay =
        createElement(
            "div",
            "overlay"
        );

    overlay.id =
        "gameOverlay";

    overlay.innerHTML = `
        <div class="modal">

            <div class="modal-header">

                <h2 class="modal-title">
                    🎮 How To Play
                </h2>

                <button
                    class="modal-close"
                    id="modalClose"
                    type="button"
                    aria-label="Close"
                >
                    ✕
                </button>

            </div>

            <div class="game-instructions">

                <div class="game-instructions-icon">
                    🤖
                </div>

                <div>
                    Guide the robot to the green
                    destination.
                </div>

            </div>

            <p style="line-height:1.8;color:#94a3b8;">
                Use the arrow keys on your keyboard
                or the four buttons below the game.
                Avoid the red obstacles and reach
                the finish point.
            </p>

            <br>

            <div class="text-center">

                <button
                    class="btn btn-primary"
                    id="startModalButton"
                    type="button"
                >
                    🚀 Start Mission
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(
        overlay
    );

    const close =
        $("#modalClose");

    if (close) {
        close.addEventListener(
            "click",
            closeModal
        );
    }

    const start =
        $("#startModalButton");

    if (start) {
        start.addEventListener(
            "click",
            closeModal
        );
    }

    overlay.addEventListener(
        "click",
        event => {
            if (
                event.target ===
                overlay
            ) {
                closeModal();
            }
        }
    );
}


function openModal() {
    const overlay =
        $("#gameOverlay");

    if (overlay) {
        overlay.classList.add(
            "show"
        );
    }
}


function closeModal() {
    const overlay =
        $("#gameOverlay");

    if (overlay) {
        overlay.classList.remove(
            "show"
        );
    }
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {
    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   SPEECH VOICE LOADING
   ========================================================= */

if (
    "speechSynthesis" in window
) {
    window.speechSynthesis.onvoiceschanged =
        () => {
            findEnglishVoice();
        };
}


/* =========================================================
   PREVENT ACCIDENTAL PAGE DRAGGING
   ========================================================= */

document.addEventListener(
    "dragstart",
    event => {
        if (
            event.target.tagName ===
            "IMG"
        ) {
            event.preventDefault();
        }
    }
);


/* =========================================================
   END
   ========================================================= */