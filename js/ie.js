                // 프로필 정보 변경 함수
                function changeProfile() {
                    document.getElementById('profile-name').innerText = "이순신";
                    document.getElementById('profile-job').innerText = "프론트엔드 개발자";
                    document.getElementById('profile-location').innerText = "부산, 대한민국";
                    document.getElementById('profile-email').href = "mailto:leesoonshin@example.com";
                    document.getElementById('profile-email').innerText = "이순신에게 이메일 보내기";
                }
        
                // 이미지 업로드 처리
                const imageUpload = document.getElementById('image-upload');
                imageUpload.addEventListener('change', function(event) {
                    const file = event.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            document.getElementById('profile-image').src = e.target.result;
                        }
                        reader.readAsDataURL(file); // 파일을 Data URL로 변환하여 이미지로 표시
                    }
                });
                function toggleDropdown() {
                    // 드롭다운의 display 상태를 토글합니다
                    document.querySelector('.dropdown').classList.toggle('show');
                }
        
                // 페이지의 다른 곳을 클릭했을 때 드롭다운을 닫기 위한 이벤트
                window.onclick = function(event) {
                    if (!event.target.matches('.dropdown button')) {
                        const dropdowns = document.getElementsByClassName('dropdown-content');
                        for (let i = 0; i < dropdowns.length; i++) {
                            const openDropdown = dropdowns[i];
                            if (openDropdown.style.display === 'block') {
                                openDropdown.style.display = 'none';
                            }
                        }
                        document.querySelector('.dropdown').classList.remove('show');
                    }
                }