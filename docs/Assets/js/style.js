gsap.registerPlugin(ScrollTrigger);

gsap.to("#Title1" , {
    letterSpacing:0,
    marginLeft:0,
    scrollTrigger: {
        trigger: '#Title1',
      }
})

gsap.to("#Title2" , {
  y:0,
  scrollTrigger: {
      trigger: '#Title2',
    }
})

gsap.to("#viImage1" , {
  height:"40vh",
  scrollTrigger: {
      trigger: '#viImage1',
      markers: true,
    }
})
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez toutes les sections
    const sections = document.querySelectorAll('.people');

    // Parcourez chaque section
    sections.forEach((section, index) => {
      // Créez un déclencheur de défilement pour chaque section
      ScrollTrigger.create({
        trigger: section,
        start: "top center", // Lorsque le haut de la fenêtre d'affichage atteint le centre de la section
        end: "bottom center", // Lorsque le bas de la fenêtre d'affichage atteint le centre de la section
        toggleClass: "active", // Ajoutez une classe 'active' lorsque le déclencheur est atteint
        onToggle: self => {
          if (self.isActive) {
            // Si le déclencheur est activé, faites défiler vers la section
            window.scrollTo({
              top: section.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });