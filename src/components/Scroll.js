export function changeHeaderColor(header) {
    header.style.transition = 'background-color 0.3s ease'; // Añadir transición suave

    const handleScroll = () => {
        if (window.scrollY > 0) {
            header.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Azul semi-transparente
        } else {
            header.style.backgroundColor = 'rgba(173, 216, 230, 0.5)'; // Lightblue semi-transparente
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}