class Player {
    player;
    play_logo;
    pause_logo;
    audio;
    playing = false;
    progress_bar;
    speed_toolbar;
    speed_selected;

    constructor(selector) {
        this.player = document.getElementById(selector);
        let logos = this.player.querySelectorAll("img");
        this.play_logo = logos[1];
        this.pause_logo = logos[2];
        this.audio = document.querySelector("audio");
        this.progress_bar = document.querySelector("progress");
        this.speed_toolbar = this.player.querySelector(".footer__speed-toolbar");
        this.speed_selected = this.speed_toolbar.querySelector('.footer__speed-selected');

        this.makePlayable();
        this.updateProgressBar();
        this.speedControl();
    }

    makePlayable() {
        let obj = this;
        let play_pause_btn = this.player.querySelector(".footer__player");
        play_pause_btn.addEventListener("click", function () {
            obj.togglePlay();
        });
    }

    togglePlay() {
        if (this.playing) {
            this.audio.pause();
            this.playing = false;
            toggleShape(this);
        } else {
            this.audio.play();
            this.playing = true;
            toggleShape(this);
        }

        function toggleShape(obj) {
            obj.play_logo.classList.toggle("active");
            obj.pause_logo.classList.toggle("active");
        }
    }

    updateProgressBar() {
        let obj = this;
        let current_time;
        obj.audio.addEventListener("timeupdate", updateProgressBar);

        function updateProgressBar() {
            current_time = Math.ceil(obj.audio.currentTime);
            obj.progress_bar.value = (current_time / obj.audio.duration) * 100;
        }
    }

    speedControl() {
        this.speed_toolbar.addEventListener('click', this.toggleSpeeds.bind(this));
    }

    toggleSpeeds(e) {
        let btn_d = 36;
        let d = 45;
        let buttons = this.speed_toolbar.querySelectorAll('button');
        if(e.target.tagName === 'DIV')
            this.speed_toolbar.classList.toggle('open');
        if (this.speed_toolbar.classList.contains('open')) {
            buttons.forEach((btn, index) => {
                btn.classList.add('open');
                btn.style.transform = `translate(18px, -${(index * btn_d) + d}px)`;
                btn.style.transitionDelay = (index * 100) / 2 + 'ms';
            });
        } else {
            buttons.forEach(btn => {
                btn.classList.remove('open');
            });
        }
        buttons.forEach(btn => {
            btn.addEventListener('click', this.speedSet.bind(this));
        });
    }

    speedSet(e) {
        let buttons = this.speed_toolbar.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        this.speed_selected.innerHTML = e.target.innerHTML;
        this.audio.playbackRate = e.target.value;
    }
}
