
        const slider = document.getElementById('image-slider');
        const dotsContainer = document.getElementById('dots-container');

        let currentIndex = 0;
        const intervalTime = 2500; // 5 seconds

        function showSlide(index) {
            const translateValue = -index * 100;
            slider.style.transform = `translateX(${translateValue}%)`;
        }

        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active-dot', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slider.children.length;
            showSlide(currentIndex);
            updateDots();
        }

        function createDots() {
            for (let i = 0; i < slider.children.length; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    showSlide(currentIndex);
                    updateDots();
                    resetInterval();
                });
                dotsContainer.appendChild(dot);
            }
        }

        function resetInterval() {
            clearInterval(sliderInterval);
            sliderInterval = setInterval(nextSlide, intervalTime);
        }

        // Add event listeners
        createDots();

        // Show initial state
        showSlide(currentIndex);

        // Set interval for automatic slide change
        let sliderInterval = setInterval(nextSlide, intervalTime);