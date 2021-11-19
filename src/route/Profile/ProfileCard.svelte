<article class="profile-card">
    <h2>
        <slot name="name">
            <span class="missing">Unknown name</span>
        </slot>
    </h2>

    <div class="email">
        <slot name="email">
            <span class="missing">Unknown email</span>
        </slot>
    </div>

    <div class="game">
        <slot name="game">
            <span class="missing">Unknown game</span>
        </slot>
    </div>
</article>

<style>
    .profile-card {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
    }

    h2 {
        font-size: 24px;
        padding: 0 0 0.2em 0;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #9500ff
    }

    .game, .email {
        padding: 0 0 0 1.5em;
        background:  0 0 no-repeat;
        background-size: 20px 20px;
        margin: 0 0 0.5em 0;
        line-height: 1.2;
    }

    .game { background-image: url(../profileSVG/videogame.svg) }
    .email   { background-image: url(../profileSVG/email.svg) }
    .missing { color: #999 }
</style>