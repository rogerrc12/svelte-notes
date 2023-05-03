<script>
  export let variant = "primary"
  export let type = "button"
  export let disabled = false
</script>

<button class={variant} {type} {disabled}>
  <slot />
</button>

<style>
  button {
    color: #fff;
    border: 0;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    cursor: pointer;
  }

  .primary {
    background-color: #202142;
  }

  .secondary {
    background-color: #ff6a95;
  }

  button:hover {
    transform: scale(.98);
    opacity: .9;
  }

  button:disabled {
    background-color: #ccc;
    color: #333;
    cursor: auto
  }

  button:disabled:hover {
    transform: scale(1);
    opacity: 1;
  }
</style>