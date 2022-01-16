export const PI = Math.PI;

const d = document;

export default function contactFormValidations() {

    const $form = d.querySelector(".form"),
        $inputs = d.querySelectorAll(".form [required]");

    console.log($inputs);

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    })
    
}

