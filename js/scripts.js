document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Aquí podrías hacer una petición a un servidor para enviar el formulario
        // Para este ejemplo, simplemente mostramos un mensaje de éxito
        formResponse.innerHTML = `Gracias por tu mensaje, ${name}. Te responderemos pronto a ${email}.`;

        // Limpiar el formulario
        form.reset();
    });
});
