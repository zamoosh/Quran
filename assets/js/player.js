class Player {
    player;
    play_logo;
    pause_logo;
    audio;
    playing = false;
    progress_bar;

    constructor(selector) {
        this.player = document.getElementById(selector);
        let logos = this.player.querySelectorAll("img");
        this.play_logo = logos[0];
        this.pause_logo = logos[1];
        this.audio = document.querySelector("audio");
        this.progress_bar = document.querySelector("progress");
        // console.log(this.audio.duration);
        // console.log(this.progress_bar);

        this.makePlayable();
        this.updateProgressBar();
    }

    makePlayable() {
        let obj = this;
        this.player.addEventListener("click", function () {
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
}
