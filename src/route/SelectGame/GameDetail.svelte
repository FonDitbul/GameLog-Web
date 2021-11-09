<script lang="ts">
	import {unixTimestamp} from "../util";
	export let GameDetail;
</script>


<div>
    <h3>게임이름 : {GameDetail.name}</h3>
    <h3>게임 포스터 </h3>
    <img src={GameDetail.cover[0].url}>

    <h3>기관 평점 : {GameDetail.aggregated_rating}</h3>
    <h3>기관 평가 수 : {GameDetail.aggregated_rating_count}</h3>

    <h3>게임 카테고리 : {GameDetail.category}</h3>
    <div>
        <h3>게임 모드 :
            {#each GameDetail.game_modes as game_mode}
                {game_mode.name} &nbsp;&nbsp;
            {/each}
        </h3>
    </div>
    <div>
        <h3>게임 장르 :
            {#each GameDetail.genres as genre}
                {genre.name} &nbsp;&nbsp;
            {/each}
        </h3>
    </div>
    <div>
        <h3>게임 테마 :
            {#each GameDetail.themes as theme}
                {theme.name} &nbsp;&nbsp;
            {/each}
        </h3>
    </div>
    <div>
        <h3>게임 플랫폼 :
            {#each GameDetail.platforms as platform}
                {platform.name} &nbsp;&nbsp;
            {/each}
        </h3>
    </div>
    <div>
        <h3>연관 기업 :
            {#each GameDetail.involved_companies as company}
                {company.company[0].name} &nbsp;&nbsp;
            {/each}
        </h3>
    </div>

    <h3>출시일 : {unixTimestamp(GameDetail.first_release_date)}</h3>
    <h3>인게임 스크린샷 </h3>
    <div class="screenshot">
        {#each GameDetail.screenshots as screenshot}
            <img src={screenshot.url}>
        {/each}
    </div>

    <h3>게임 스토리 : {GameDetail.storyline}</h3>
    <h3>게임 요약 : {GameDetail.summary}</h3>
</div>


