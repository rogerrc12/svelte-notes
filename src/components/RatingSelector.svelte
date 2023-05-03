<script>
  import { createEventDispatcher } from "svelte"
  let selected = 5
  const dispatch = createEventDispatcher()

  const onRadio = e => {
    selected = e.target.value
    dispatch("select-rating", selected)
  }
</script>

<ul class="rating">
  <li>
    <input type="radio" name="rating" value="1" id="num1" on:input={onRadio} checked={selected===1}>
    <label for="num1">1</label>
  </li>
  <li>
    <input type="radio" name="rating" value="2" id="num2" on:input={onRadio} checked={selected===2}>
    <label for="num2">2</label>
  </li>
  <li>
    <input type="radio" name="rating" value="3" id="num3" on:input={onRadio} checked={selected===3}>
    <label for="num3">3</label>
  </li>
  <li>
    <input type="radio" name="rating" id="num4" value="4" on:input={onRadio} checked={selected===4}>
    <label for="num4">4</label>
  </li>
  <li>
    <input type="radio" name="rating" id="num5" value="5" on:input={onRadio} checked={selected===5}>
    <label for="num5">5</label>
  </li>
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    margin:  0 10px;
    text-align: center;
    border-radius: 50%;
    transition: background 250ms ease-out, color 400ms linear;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: #ff6a95;
    color: #fff
  }

  [type="radio"] {
    opacity: 0;
  }

  [type="radio"]:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>