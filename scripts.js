<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script>
        const contactForm = document.getElementById('contact-form');
        const messageBox = document.getElementById('message-box');

        function showMessage(message, type = 'success') {
            messageBox.textContent = message;
            messageBox.className = `alert alert-${type}`;
            messageBox.classList.add('show');
            setTimeout(() => {
                messageBox.classList.remove('show');
            }, 3000);
        }

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !telefono || !mensaje) {
                showMessage('Por favor, complete todos los campos.', 'danger');
                return;
            }

            // Validación de email (simple)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Por favor, ingrese un email válido.', 'danger');
                return;
            }

            // Validación de teléfono (simple - solo dígitos y longitud)
            const phoneRegex = /^\d{10}$/; // Ejemplo para 10 dígitos
            if (!phoneRegex.test(telefono)) {
                showMessage('Por favor, ingrese un teléfono válido (10 dígitos).', 'danger');
                return;
            }

            // Simulación de envío del formulario (aquí iría la lógica real con fetch o similar)
            console.log('Formulario enviado:', { nombre, email, telefono, mensaje });
            showMessage('Mensaje enviado correctamente. ¡Te contactaremos pronto!', 'success');
            contactForm.reset();
        });
    </script>
