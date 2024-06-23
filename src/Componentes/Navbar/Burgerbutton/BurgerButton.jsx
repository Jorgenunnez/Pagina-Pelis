import estilos from "./BurgerButton.module.css";

function BurgerButton() {
  return (
    <div class={estilos.burger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerButton;
