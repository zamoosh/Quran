class Player {
    player;
    play_logo;
    pause_logo;
    audio;
    playing = false;

    constructor(selector) {
        this.player = document.getElementById(selector);
        this.play_logo = this.player.querySelector("img.play");
        this.pause_logo = this.player.querySelector("img.pause");
        this.audio = document.querySelector("audio");
        console.log(this.audio.duration);

        this.makePlayable();
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
}
