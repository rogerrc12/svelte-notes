<script>
  import { nanoid } from "nanoid"
  import Card from "./Card.svelte";
  import { FeedbackStore } from "../stores";
  import Button from "./Button.svelte";
	import RatingSelector from "./RatingSelector.svelte";

  let text = ""
  let rating = 5
  let btnDisabled = false
  let MINCHARS = 10;
  let message

  const handleSelectRating = e => rating = e.detail

  const handleInput = () => {
    if (text.trim().length <= MINCHARS) {
      message = `Text must be at least ${MINCHARS}`
      btnDisabled = true
    } else {
      message = null
      btnDisabled = false
    }
  }

  const handleSubmit = () => {
    if (text.trim().length > MINCHARS) {
      const newFeedback = {
        id: nanoid(),
        text,
        rating: +rating
      }

      FeedbackStore.update(currentFeedbacks => {
        return [newFeedback, ...currentFeedbacks]
      })

      text = ""
    }
  }
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>

<form on:submit|preventDefault={handleSubmit}>
  <RatingSelector on:select-rating={handleSelectRating} />

  <div class="input-group">
    <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back">
    <Button type="submit" disabled={btnDisabled}>Send</Button>
  </div>
  {#if message}
  <div class="message">{message}</div>
  {/if}
</form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  

  form {
    width: 80%;
    margin: auto
  }


  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    padding: 0 10px;
  }
  input:focus {
    outline: none;
  }

  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>