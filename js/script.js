// 언어 선택기 기능
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            languageDropdown.classList.toggle('show');
        });
    }
    
    // 언어 선택기 외부 클릭시 닫기
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.language-selector')) {
            languageDropdown.classList.remove('show');
        }
    });
    
    // 모바일 메뉴 기능
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // 메뉴 항목 클릭 시 메뉴 닫기
    const menuItems = document.querySelectorAll('.nav-links a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // 스크롤 애니메이션
    const scrollElements = document.querySelectorAll('.feature-card, .product, .testimonial');
    
    const elementInView = (el, scrollOffset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // 초기 로드시 애니메이션 체크
    handleScrollAnimation();
    
    // 스크롤시 애니메이션 체크
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // 리사이즈 이벤트
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            navLinks.style.display = '';
        }
    });
}); 