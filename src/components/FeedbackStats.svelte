<script>
	import { FeedbackStore } from "../stores";

  $: count = $FeedbackStore.length
  $: average = Number($FeedbackStore.reduce((a, { rating }) => a + rating, 0) / count).toFixed(2)
</script>

<div class="stats">
  <p class="info">{count} Reviews</p>

  <p class="info">Ratings average: {average}</p>
</div>

<style>
  .stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .info {
    font-weight: bold
  }
</style>