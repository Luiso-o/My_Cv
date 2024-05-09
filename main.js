//cambia el texto de contacto
document.querySelectorAll('.link').forEach(link => {
    const originalText = link.querySelector('.link-text').textContent; // Almacena el texto original
  
    link.addEventListener('mouseover', function() {
      switch (link.id) {
        case 'telefono':
              link.querySelector('.link-text').textContent = 'Contacta conmigo!';
          break;
        case 'email':
          link.querySelector('.link-text').textContent = 'Envíame un correo!';
          break;
        case 'sitio-web':
          link.querySelector('.link-text').textContent = 'Échale un vistazo!';
          break;
        case 'linkedin':
          link.querySelector('.link-text').textContent = 'Revisa mi trayectoria!';
          break;
        case 'portafolio':
          link.querySelector('.link-text').textContent = 'Mira mis proyectos!';
          break;
        case 'ubicacion':
          link.querySelector('.link-text').textContent = 'Encuéntrame aquí!';
          break;
        default:
          break;
      }
    });
  
    link.addEventListener('mouseout', function() {
      link.querySelector('.link-text').textContent = originalText; 
    });
});

//cambia el ano de creacion en footer
document.getElementById("current-year").textContent = new Date().getFullYear();