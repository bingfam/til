// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="About/About.html"><strong aria-hidden="true">1.</strong> About</a></li><li class="chapter-item expanded "><a href="dev/dev.html"><strong aria-hidden="true">2.</strong> 개발</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/lang/lang.html"><strong aria-hidden="true">2.1.</strong> 언어 / framework</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/rust/rust.html"><strong aria-hidden="true">2.1.1.</strong> rust</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/rust/00001.html"><strong aria-hidden="true">2.1.1.1.</strong> rust 구조체 출력</a></li><li class="chapter-item "><a href="dev/rust/00002.html"><strong aria-hidden="true">2.1.1.2.</strong> rust 1.79 + iced 0.12.1 한글 폰트를 기본으로 설정하기</a></li><li class="chapter-item "><a href="dev/rust/00003.html"><strong aria-hidden="true">2.1.1.3.</strong> rust 코드에 document 달기</a></li><li class="chapter-item "><a href="dev/rust/00004.html"><strong aria-hidden="true">2.1.1.4.</strong> visual studio code에서 rust traits 한 번에 만들기 단축키: ctrl + .</a></li><li class="chapter-item "><a href="dev/rust/00005.html"><strong aria-hidden="true">2.1.1.5.</strong> rust 1.79 + iced 0.12.1 한글 나오게 하기</a></li><li class="chapter-item "><a href="dev/rust/00006.html"><strong aria-hidden="true">2.1.1.6.</strong> rust에서 ffmpeg 개발하기</a></li></ol></li><li class="chapter-item "><a href="dev/winui3/winui3.html"><strong aria-hidden="true">2.1.2.</strong> winui3</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/winui3/00001.html"><strong aria-hidden="true">2.1.2.1.</strong> auto 를 반환하는 함수를 정의하기 전에 사용할 수 없다는 에러메시지가 나올 때</a></li><li class="chapter-item "><a href="dev/winui3/00002.html"><strong aria-hidden="true">2.1.2.2.</strong> winui 3 패키징하지 않고 탐색기에서 exe 파일 실행하기</a></li></ol></li></ol></li><li class="chapter-item "><a href="dev/game/game.html"><strong aria-hidden="true">2.2.</strong> 게임</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/game/O3DE/O3DE.html"><strong aria-hidden="true">2.2.1.</strong> O3DE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/game/O3DE/00001.html"><strong aria-hidden="true">2.2.1.1.</strong> O3DE 설치하기</a></li></ol></li></ol></li><li class="chapter-item "><a href="dev/git/git.html"><strong aria-hidden="true">2.3.</strong> git</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/git/00001.html"><strong aria-hidden="true">2.3.1.</strong> window 11 arm64에서 git auth 창이 투명하게 보인다</a></li><li class="chapter-item "><a href="dev/git/00002.html"><strong aria-hidden="true">2.3.2.</strong> github private repository에 git bash에서 접속하기</a></li><li class="chapter-item "><a href="dev/git/00003.html"><strong aria-hidden="true">2.3.3.</strong> .gitconfig 파일의 내용을 전부 다 지워도 git config --list 하면 뭔가 정보가 남아있다</a></li><li class="chapter-item "><a href="dev/git/00004.html"><strong aria-hidden="true">2.3.4.</strong> git 한글 파일명이 숫자처럼 보이는 경우 해결</a></li></ol></li><li class="chapter-item "><a href="dev/visualstudio/visualstudo.html"><strong aria-hidden="true">2.4.</strong> visual studio</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/visualstudio/00001.html"><strong aria-hidden="true">2.4.1.</strong> 컴파일 오류 목록 중 하나를 더블클릭하면 문제 세부 정보 창이 나올 때 없애는 방법</a></li></ol></li><li class="chapter-item "><a href="dev/vscode/vscode.html"><strong aria-hidden="true">2.5.</strong> vscode</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/vscode/extensions/extensions.html"><strong aria-hidden="true">2.5.1.</strong> extensions</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/vscode/extensions/00001.html"><strong aria-hidden="true">2.5.1.1.</strong> vscode에서 pdf 파일 보기 extension</a></li><li class="chapter-item "><a href="dev/vscode/extensions/00002.html"><strong aria-hidden="true">2.5.1.2.</strong> md파일 내 이미지 특정 폴더에 붙여넣기</a></li></ol></li><li class="chapter-item "><a href="dev/vscode/snippets/snippets.html"><strong aria-hidden="true">2.5.2.</strong> snippets</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/vscode/snippets/00001.html"><strong aria-hidden="true">2.5.2.1.</strong> snippet 만들기</a></li><li class="chapter-item "><a href="dev/vscode/snippets/00002.html"><strong aria-hidden="true">2.5.2.2.</strong> 답이 접혀 있는 문제를 내기 위한 code snippet</a></li></ol></li><li class="chapter-item "><a href="dev/vscode/00001.html"><strong aria-hidden="true">2.5.3.</strong> vscode 작업 영역</a></li><li class="chapter-item "><a href="dev/vscode/00002.html"><strong aria-hidden="true">2.5.4.</strong> visual studio code 에서 terminal에서 한글이 안될 때</a></li></ol></li><li class="chapter-item "><a href="dev/etc.html"><strong aria-hidden="true">2.6.</strong> 기타</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/miniconda/miniconda.html"><strong aria-hidden="true">2.6.1.</strong> miniconda</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dev/miniconda/00001.html"><strong aria-hidden="true">2.6.1.1.</strong> miniconda 사용법</a></li></ol></li></ol></li></ol></li><li class="chapter-item expanded "><a href="utility/utility.html"><strong aria-hidden="true">3.</strong> 유틸리티</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="utility/joplin.html"><strong aria-hidden="true">3.1.</strong> joplin</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
