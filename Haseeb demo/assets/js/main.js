// Main JavaScript functionality for NESO website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const primaryMenu = document.getElementById('primary-menu');
    const mainNav = primaryMenu.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = mainNav.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Update icon animation
            const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
            if (menuIcon) {
                menuIcon.style.transform = isExpanded ? 'rotate(45deg)' : 'rotate(0deg)';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!primaryMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
                if (menuIcon) {
                    menuIcon.style.transform = 'rotate(0deg)';
                }
            }
        });

        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
                if (menuIcon) {
                    menuIcon.style.transform = 'rotate(0deg)';
                }
            }
        });
    }

    // Search functionality
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(event) {
            const searchTerm = searchInput.value.trim();
            if (!searchTerm) {
                event.preventDefault();
                searchInput.focus();
                return false;
            }
        });

        // Clear search when escape key is pressed
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                this.value = '';
                this.blur();
            }
        });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update focus for accessibility
                targetElement.focus();
            }
        });
    });

    // Accordion functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.parentElement.nextElementSibling;
            const isActive = this.classList.contains('active');

            // Close all accordions first (if you want only one open at a time)
            // accordionButtons.forEach(btn => {
            //     btn.classList.remove('active');
            //     btn.parentElement.nextElementSibling.classList.remove('active');
            // });

            // Toggle current accordion
            if (isActive) {
                this.classList.remove('active');
                content.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
            } else {
                this.classList.add('active');
                content.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Tab functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetTab = this.getAttribute('href').substring(1);

            // Remove active class from all tabs and content
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Modal functionality
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modalCloses = document.querySelectorAll('.modal-close, [data-modal-close]');
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            const targetModal = document.querySelector(this.getAttribute('data-modal-target'));
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Focus on modal for accessibility
                targetModal.querySelector('.modal').focus();
            }
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(event) {
            if (event.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Form validation
    const forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                const value = field.value.trim();
                const errorElement = field.parentElement.querySelector('.invalid-feedback');

                if (!value) {
                    isValid = false;
                    field.classList.add('is-invalid');
                    field.classList.remove('is-valid');
                    
                    if (errorElement) {
                        errorElement.style.display = 'block';
                    }
                } else {
                    field.classList.remove('is-invalid');
                    field.classList.add('is-valid');
                    
                    if (errorElement) {
                        errorElement.style.display = 'none';
                    }
                }
            });

            if (!isValid) {
                event.preventDefault();
                const firstInvalidField = form.querySelector('.is-invalid');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
            }
        });

        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required')) {
                    const value = this.value.trim();
                    const errorElement = this.parentElement.querySelector('.invalid-feedback');

                    if (!value) {
                        this.classList.add('is-invalid');
                        this.classList.remove('is-valid');
                        if (errorElement) {
                            errorElement.style.display = 'block';
                        }
                    } else {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                        if (errorElement) {
                            errorElement.style.display = 'none';
                        }
                    }
                }
            });
        });
    });

    // Tooltip functionality
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.querySelector('.tooltip-text');
        
        tooltip.addEventListener('mouseenter', function() {
            if (tooltipText) {
                tooltipText.style.visibility = 'visible';
                tooltipText.style.opacity = '1';
            }
        });

        tooltip.addEventListener('mouseleave', function() {
            if (tooltipText) {
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            }
        });
    });

    // Back to top functionality
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Print functionality
    const printButtons = document.querySelectorAll('.print-page');
    printButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.print();
        });
    });

    // Loading state management
    function showLoading(element) {
        const spinner = document.createElement('div');
        spinner.className = 'spinner';
        spinner.setAttribute('aria-label', 'Loading...');
        element.appendChild(spinner);
        element.classList.add('loading');
    }

    function hideLoading(element) {
        const spinner = element.querySelector('.spinner');
        if (spinner) {
            spinner.remove();
        }
        element.classList.remove('loading');
    }

    // Expose utility functions globally
    window.NESO = {
        showLoading,
        hideLoading,
        
        // Accessibility helpers
        trapFocus: function(element) {
            const focusableElements = element.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length === 0) return;
            
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            element.addEventListener('keydown', function(event) {
                if (event.key === 'Tab') {
                    if (event.shiftKey) {
                        if (document.activeElement === firstElement) {
                            event.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            event.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            });
        },

        // Cookie helpers
        setCookie: function(name, value, days) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
        },

        getCookie: function(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
    };

    // Initialize any components that need setup
    console.log('NESO website initialized');
});
