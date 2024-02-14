import { Orders } from "./displayOrder.js";
import { MetalOptions } from "./metalOptions.js";
import { saveOrder } from "./placeOrder.js";
import { SizeOptions } from "./sizeOptions.js";
import { StyleOptions } from "./styleOptions.js";
const container = document.querySelector(".container");

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const styleOptionsHTML = await StyleOptions();
  const sizeOptionsHTML = await SizeOptions();
  const saveButton = await saveOrder();
  const displayOrder = await Orders();

  const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>
        

        <article class="order">
        ${saveButton}
       
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${displayOrder}

        </article>
    `;

  container.innerHTML = composedHTML;
};

document.addEventListener("newOrderCreated", render);

render();
