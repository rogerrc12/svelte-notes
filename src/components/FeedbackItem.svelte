<script>
  import { FeedbackStore } from "../stores";
	import Card from "./Card.svelte";
  export let item

  const handleDelete = id => {
    FeedbackStore.update(currentFeedback => currentFeedback.filter(feedback => feedback.id !== id))
  }
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <div class="text-display">{item.text}</div>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -1px;
    width: 50px;
    height: 50px;
    background-color: #ff6a95;
    color: #fff;
    border-radius: 50%;
    border: 1px solid #eee;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    background: none;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #aaa
  }
</style>