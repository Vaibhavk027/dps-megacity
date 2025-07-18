const form = document.getElementById('signupForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const selectedServices = Array.from(
        document.querySelectorAll('.services input:checked')
      ).map(cb => cb.value);

      if (selectedServices.length === 0) {
        message.textContent = 'Please select at least one service.';
        message.style.color = 'red';
        return;
      }

      // Simulate success
      message.textContent = `Thanks, ${name}! You've signed up for: ${selectedServices.join(', ')}`;
      message.style.color = 'green';

      form.reset();
    });
